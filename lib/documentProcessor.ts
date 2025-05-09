// Add this file to your project as documentProcessor.js

import { saveAs } from 'file-saver'; // You'll need to install this package
import { Document, Packer, Paragraph, TextRun, HeadingLevel, ExternalHyperlink, AlignmentType } from 'docx'; // Install docx package

/**
 * Processes a document with citations and creates a downloadable Word document
 * @param {string} rawText - The original document text
 * @param {Array} citations - The accepted citations
 * @param {string} styleGuide - The selected citation style guide
 * @returns {Promise<Blob>} - A Blob containing the Word document
 */
export const processDocument = async (rawText, citations, styleGuide = 'APA') => {
  try {
    // Step 1: Annotate the text with citations
    const annotatedText = annotateTextWithCitation(rawText, citations);
    
    // Step 2: Format references according to the style guide
    const referencesChildren = formatReferences(citations, styleGuide);
    
    // Step 3: Create a Word document
    const doc = createWordDocument(annotatedText, referencesChildren);
    
    // Step 4: Generate the Word file as a blob
    const blob = await Packer.toBlob(doc);
    
    // Return the blob for download
    return blob;
  } catch (error) {
    console.error('Error processing document:', error);
    throw new Error('Failed to process document');
  }
};

/**
 * Downloads the processed document
 * @param {Blob} blob - The document blob
 * @param {string} filename - The filename to save as
 */
export const downloadDocument = (blob, filename = 'document_with_citations.docx') => {
  saveAs(blob, filename);
};

/**
 * Annotates text with citations
 * @param {string} text - The original text
 * @param {Array} citations - The accepted citations
 * @returns {string} - Text with citations inserted
 */
const annotateTextWithCitation = (text, citations) => {
  if (!text || !citations || citations.length === 0) {
    return text;
  }

  let annotatedText = text;
  
  // Sort citations by length of the original sentence (longest first)
  const sortedCitations = [...citations].sort((a, b) => 
    (b.original_sentence?.length || 0) - (a.original_sentence?.length || 0)
  );

  // Process each citation
  sortedCitations.forEach(citation => {
    if (!citation.original_sentence || !citation.paper_details) return;
    
    const { original_sentence } = citation;
    const { authors, year } = citation.paper_details;
    
    // Create the citation marker
    // Ensure authors is an array and has at least one element
    const authorLastName = (authors && Array.isArray(authors) && authors.length > 0 && typeof authors[0] === 'string') 
        ? authors[0].split(' ').pop() 
        : 'Unknown';
    const citationMarker = `(${authorLastName}, ${year || 'n.d.'})`; // Added n.d. for missing year
    
    // Escape special characters for safe use in regex
    const escapedSentence = original_sentence
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .trim();
    
    // Create regex to find the sentence, accounting for potential spacing differences
    // and ensuring it matches whole sentences more reliably.
    const sentenceRegex = new RegExp(escapedSentence.replace(/\s+/g, '\\s+') + `[.?!]?`, 'gi'); // Added 'g' and 'i' flags, improved regex
        
    // Replace the original sentence with the sentence + citation
    // Using a function for replacement to avoid issues with special characters in replacement string
    annotatedText = annotatedText.replace(sentenceRegex, (match) => `${match} ${citationMarker}`);
  });

  return annotatedText;
};

/**
 * Formats references according to the selected style guide
 * @param {Array} citations - The accepted citations
 * @param {string} styleGuide - The selected citation style guide
 * @returns {Array<Array<TextRun | ExternalHyperlink>>} - Array of arrays, each inner array is children for a Paragraph
 */
const formatReferences = (citations, styleGuide) => {
  const uniquePapers = {};
  
  citations.forEach(citation => {
    if (!citation.paper_details) return;
    const { doi, url, title } = citation.paper_details;
    const key = doi || url || title || JSON.stringify(citation.paper_details); // More robust key
    if (!uniquePapers[key]) {
      uniquePapers[key] = citation.paper_details;
    }
  });
  
  // Format references according to style guide
  return Object.values(uniquePapers).map(paper => {
    const { authors, title, year, url, doi } = paper as any; // Cast to any if paper_details type is not strict
    
    const authorText = (authors && Array.isArray(authors) && authors.length > 0) ? authors.join(', ') : 'Unknown Author';
    const yearText = year || 'n.d.';
    const titleText = title || 'Untitled';
    
    const sourceLink = doi ? `https://doi.org/${doi}` : url;
    const children: (TextRun | ExternalHyperlink)[] = [];

    switch (styleGuide.toUpperCase()) {
      case 'APA':
        // Author(s) (Year). Title. URL
        children.push(new TextRun(`${authorText} (${yearText}). `));
        children.push(new TextRun({ text: titleText, italics: true }));
        children.push(new TextRun(". "));
        if (sourceLink) {
          children.push(new ExternalHyperlink({
            children: [new TextRun({ text: sourceLink, style: "Hyperlink" })],
            link: sourceLink,
          }));
        }
        break;
        
      case 'MLA':
        // Author(s). "Title." Year. Web. URL
        children.push(new TextRun(`${authorText}. "${titleText}." ${yearText}. Web. `));
        if (sourceLink) {
          children.push(new ExternalHyperlink({
            children: [new TextRun({ text: sourceLink, style: "Hyperlink" })],
            link: sourceLink,
          }));
        }
        break;
        
      case 'CHICAGO':
        // Author(s). "Title." Year. URL.
        children.push(new TextRun(`${authorText}. "${titleText}." ${yearText}. `));
        if (sourceLink) {
          children.push(new ExternalHyperlink({
            children: [new TextRun({ text: sourceLink, style: "Hyperlink" })],
            link: sourceLink,
          }));
        }
        children.push(new TextRun("."));
        break;
        
      default: // Default to APA
        children.push(new TextRun(`${authorText} (${yearText}). `));
        children.push(new TextRun({ text: titleText, italics: true }));
        children.push(new TextRun(". "));
        if (sourceLink) {
          children.push(new ExternalHyperlink({
            children: [new TextRun({ text: sourceLink, style: "Hyperlink" })],
            link: sourceLink,
          }));
        }
        break;
    }
    return children;
  });
};

/**
 * Creates a Word document with the annotated text and references
 * @param {string} annotatedText - The text with citations
 * @param {Array<Array<TextRun | ExternalHyperlink>>} referencesChildren - The formatted reference children elements
 * @returns {Document} - A docx Document object
 */
const createWordDocument = (annotatedText, referencesChildren) => {
  const paragraphs = annotatedText.split('\n').filter(p => p.trim() !== '');
  
  const documentParagraphs = paragraphs.map(text => 
    new Paragraph({
      children: [new TextRun(text)],
      spacing: {
        after: 200, // Standard spacing after paragraph
        line: 360,  // For 1.5 line spacing (1.0 is 240)
      },
    })
  );
  
  const referencesParagraphs = [
    new Paragraph({
      text: 'References',
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER, // Center align "References" heading
      spacing: {
        before: 600, // More space before "References"
        after: 300,
        line: 360, // Also 1.5 line spacing for the heading itself if desired
      },
    }),
    ...referencesChildren.map(children => 
      new Paragraph({
        children: children,
        spacing: {
          after: 200,
          line: 360, // 1.5 line spacing for reference entries
        },
        indent: {
          // left: 720, // 0.5 inch, standard for some styles
          hanging: 720, // Hanging indent for references
        },
      })
    ),
  ];
  
  return new Document({
    // Define a default font for the document if desired, though it won't pick up from the original.
    // styles: {
    //   default: {
    //     document: {
    //       run: {
    //         font: "Calibri", // Example: set a default font like Calibri
    //         size: 22, // Corresponds to 11pt
    //       },
    //     },
    //   },
    // },
    sections: [
      {
        properties: {},
        children: [...documentParagraphs, ...referencesParagraphs],
      },
    ],
  });
};

// Implementation for handleFinalize
export const handleFinalize = async (extract, acceptedCitations, styleGuide = 'APA') => {
  if (!extract?.data?.content || acceptedCitations.length === 0) {
    throw new Error("No content or citations to process");
  }
  
  try {
    // Process the document
    const blob = await processDocument(
      extract.data.content,
      acceptedCitations,
      styleGuide
    );
    
    // Create a URL for the blob
    const documentUrl = URL.createObjectURL(blob);
    
    // Return the URL for download component
    return {
      documentUrl,
      downloadFile: () => downloadDocument(blob),
      statistics: {
        citationCount: acceptedCitations.length,
        referenceCount: getUniqueReferencesCount(acceptedCitations),
      }
    };
  } catch (error) {
    console.error('Failed to finalize document:', error);
    throw error;
  }
};

/**
 * Gets the count of unique references
 * @param {Array} citations - The accepted citations
 * @returns {number} - Count of unique references
 */
const getUniqueReferencesCount = (citations) => {
  const uniquePapers = new Set();
  
  citations.forEach(citation => {
    if (!citation.paper_details) return;
    
    const { doi, url, title } = citation.paper_details;
    const key = doi || url || title;
    
    uniquePapers.add(key);
  });
  
  return uniquePapers.size;
};