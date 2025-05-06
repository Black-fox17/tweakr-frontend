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
export const annotateTextWithCitation = (text: string, citations: Citation[]) => {
    const sentences = text.match(/[^.!?]+[.!?]/g) || []; // Split by sentence
    const resultSentences = [...sentences];

    citations.forEach(cite => {
        const { paragraph_index, sentence_index } = cite.metadata;

        // Optional: You could also check paragraph_index if you store paragraphs separately
        if (sentence_index < resultSentences.length) {
            const citationText = formatCitation(cite.paper_details);
            resultSentences[sentence_index] = resultSentences[sentence_index].trim() + ` ${citationText}.`;
        }
    });

    return resultSentences.join(' ');
};
