interface Citation {
  id: string;
  metadata: {
    paragraph_index: number;
    sentence_index: number;
  };
  original_sentence: string;
  paper_details: {
    title: string;
    authors: string[];
    year: string;
    url: string;
    doi: string;
  };
  status: string;
}

export const formatCitation = (details: Citation['paper_details']): string => {
  const firstAuthor = details.authors[0] || 'Unknown';
  const authorText = details.authors.length > 1 ? `${firstAuthor} et al.` : firstAuthor;
  return `(${authorText}, ${details.year})`;
};

// Main function to add citations to text
export const annotateTextWithCitation = (
  text: string,
  acceptedCitations: Citation[]
): string => {
  if (!text || !acceptedCitations || acceptedCitations.length === 0) {
    return text;
  }

  let annotatedText = text;


  // Sort citations by length of the original sentence (longest first)
  const sortedCitations = [...acceptedCitations].sort(
    (a, b) => (b.original_sentence?.length || 0) - (a.original_sentence?.length || 0)
  );

  sortedCitations.forEach((citation) => {
    if (!citation.original_sentence || !citation.paper_details) return;

    const { original_sentence } = citation;
    const { authors, year } = citation.paper_details;

    const authorName =
      authors && authors.length > 0 ? authors[0].split(' ').pop() : 'Unknown';
    const citationMarker = `${authorName}, ${year}`;

    const escapedSentence = original_sentence.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
    const sentenceRegex = new RegExp(`(${escapedSentence}[.?!]?)\\s*`, 'i');

    annotatedText = annotatedText.replace(sentenceRegex, `$1 (${citationMarker}) `);
  });

  return annotatedText;
};

// Function to create downloadable document with citations in Word format
export const createDocumentWithCitations = async (
  text: string,
  citations: Citation[],
  styleGuide: 'APA' | 'MLA' | 'CHICAGO' = 'APA'
): Promise<string> => {
  const annotatedText = annotateTextWithCitation(text, citations);
  const formattedReferences = formatReferences(citations, styleGuide);

  const finalDocument = `
${annotatedText}

References
----------
${formattedReferences}
  `;

  return finalDocument;
};

// Helper function to format references according to the chosen style guide
const formatReferences = (citations: Citation[], styleGuide: string): string => {
  const uniquePapers: Record<string, Citation['paper_details']> = {};

  citations.forEach((citation) => {
    if (!citation.paper_details) return;

    const { doi, url, title } = citation.paper_details;
    const key = doi || url || title;

    if (!uniquePapers[key]) {
      uniquePapers[key] = citation.paper_details;
    }
  });

  const references = Object.values(uniquePapers).map((paper) => {
    const { authors, title, year, url, doi } = paper;

    switch (styleGuide.toUpperCase()) {
      case 'APA':
        return `${authors?.join(', ') ?? 'Unknown'} (${year}). "${title}". Retrieved from ${doi ? `https://doi.org/${doi}` : url
          }`;

      case 'MLA':
        return `${authors?.join(', ') ?? 'Unknown'}. "${title}." ${year}. Web. ${doi ? `https://doi.org/${doi}` : url
          }`;

      case 'CHICAGO':
        return `${authors?.join(', ') ?? 'Unknown'}. "${title}." ${year}. ${doi ? `https://doi.org/${doi}` : url
          }`;

      default:
        return `${authors?.join(', ') ?? 'Unknown'} (${year}). "${title}". Retrieved from ${doi ? `https://doi.org/${doi}` : url
          }`;
    }
  });

  return references.join('\n\n');
};
