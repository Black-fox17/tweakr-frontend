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

// Returns a nicely formatted author citation like: (Smith et al., 2025)
export const formatCitation = (details: Citation['paper_details']) => {
    const firstAuthor = details.authors[0] || 'Unknown';
    const authorText = details.authors.length > 1 ? `${firstAuthor} et al.` : firstAuthor;
    return `(${authorText}, ${details.year})`;
};

// Main function to add citations to text
// Enhanced version of annotateTextWithCitation function
export const annotateTextWithCitation = (text, acceptedCitations) => {
    if (!text || !acceptedCitations || acceptedCitations.length === 0) {
      return text;
    }
  
    let annotatedText = text;
    
    // Sort citations by length of the original sentence (longest first)
    // This prevents issues where shorter matches might occur within longer sentences
    const sortedCitations = [...acceptedCitations].sort((a, b) => 
      (b.original_sentence?.length || 0) - (a.original_sentence?.length || 0)
    );
  
    // Process each citation
    sortedCitations.forEach(citation => {
      if (!citation.original_sentence || !citation.paper_details) return;
      
      const { original_sentence } = citation;
      const { authors, year } = citation.paper_details;
      
      // Create the citation marker
      const authorName = authors && authors.length > 0 ? authors[0].split(' ').pop() : 'Unknown';
      const citationMarker = `${authorName}, ${year}`;
      
      // Escape special characters for safe use in regex
      const escapedSentence = original_sentence
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .trim();
      
      // Create regex to find the sentence, accounting for potential spacing differences
      const sentenceRegex = new RegExp(`(${escapedSentence}[.?!]?)\\s*`, 'i');
      
      // Replace the original sentence with the sentence + citation
      annotatedText = annotatedText.replace(
        sentenceRegex,
        `$1 (${citationMarker}) `
      );
    });
  
    return annotatedText;
  };
  
  // Function to create downloadable document with citations in Word format
  export const createDocumentWithCitations = async (text, citations, styleGuide = 'APA') => {
    // This is where you would use a library like docx.js to create a proper Word document
    // For now, we'll focus on the text formatting
    
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
  const formatReferences = (citations, styleGuide) => {
    // Group by unique papers to avoid duplicate references
    const uniquePapers = {};
    
    citations.forEach(citation => {
      if (!citation.paper_details) return;
      
      const { doi, url, title } = citation.paper_details;
      const key = doi || url || title;
      
      if (!uniquePapers[key]) {
        uniquePapers[key] = citation.paper_details;
      }
    });
    
    // Format references according to style guide
    const references = Object.values(uniquePapers).map(paper => {
      const { authors, title, year, url, doi } = paper;
      
      switch (styleGuide.toUpperCase()) {
        case 'APA':
          // Author(s) (Year). Title. Retrieved from URL
          const authorText = authors ? authors.join(', ') : 'Unknown';
          return `${authorText} (${year}). "${title}". Retrieved from ${doi ? `https://doi.org/${doi}` : url}`;
          
        case 'MLA':
          // Author(s). "Title." Year. Web. URL
          return `${authors ? authors.join(', ') : 'Unknown'}. "${title}." ${year}. Web. ${doi ? `https://doi.org/${doi}` : url}`;
          
        case 'CHICAGO':
          // Author(s). "Title." Year. URL
          return `${authors ? authors.join(', ') : 'Unknown'}. "${title}." ${year}. ${doi ? `https://doi.org/${doi}` : url}`;
          
        default: // Default to APA
          return `${authors ? authors.join(', ') : 'Unknown'} (${year}). "${title}". Retrieved from ${doi ? `https://doi.org/${doi}` : url}`;
      }
    });
    
    return references.join('\n\n');
  };