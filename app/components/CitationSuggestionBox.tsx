import React, { useState } from 'react';

const citation = {
    "status": "success",
    "document_id": "e163548b-8a33-481a-9ff8-f6d243541bbe",
    "total_citations": 35,
    "citations": [
        {
            "id": "abe7dfeb-68d4-4e1b-af2a-8b3f4a04cce7",
            "original_sentence": "Corporate governance refers to the system of rules, practices, and processes by which a company is directed and controlled.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 1,
                "sentence_index": 1
            }
        },
        {
            "id": "0f115682-93f5-4652-b122-8a0131ed4b24",
            "original_sentence": "Corporate governance serves as a crucial mechanism for ensuring that a company operates efficiently and ethically while meeting its strategic objectives and legal obligations.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 1,
                "sentence_index": 3
            }
        },
        {
            "id": "8af58e40-536c-45f7-99e6-b62bfee4344c",
            "original_sentence": "The board is responsible for overseeing the management of the company and making strategic decisions that align with shareholders' interests.",
            "paper_details": {
                "title": "The impact of governance quality on corporate climate risk disclosure: The role of the governance committee",
                "authors": [
                    "Honey D."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85213984596",
                "doi": "10.1016/j.irfa.2024.103901"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 2,
                "sentence_index": 2
            }
        },
        {
            "id": "b3c0a8b0-aa94-439b-855b-a630cf75156c",
            "original_sentence": "It ensures that executives act responsibly and in compliance with laws and regulations.",
            "paper_details": {
                "title": "Enhancing organizational citizenship behavior towards the environment",
                "authors": [
                    "Nadežda Jankelová",
                    "Ildikó Némethová",
                    "Marina Dabić",
                    "Andreas Kallmuenzer"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s11846-024-00781-x",
                "doi": "10.1007/s11846-024-00781-x"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 2,
                "sentence_index": 3
            }
        },
        {
            "id": "89ef6b5d-85c6-4d78-aeea-553ae5664fe6",
            "original_sentence": "Independent directors play a critical role in maintaining objectivity and ensuring that management does not engage in self-serving practices that could harm stakeholders.",
            "paper_details": {
                "title": "Pursuing a corporate sustainable identity: Green governance strategy, hybrid vehicle development, knowledge and sustainability performance",
                "authors": [
                    "Helfaya A."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85216373046",
                "doi": "10.1016/j.jik.2025.100660"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 2,
                "sentence_index": 4
            }
        },
        {
            "id": "2636967c-95a3-433f-98ca-d51b294af94b",
            "original_sentence": "Transparency and accountability are fundamental principles of corporate governance.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 3,
                "sentence_index": 1
            }
        },
        {
            "id": "191ef559-852f-40b4-876b-9c3c9d49fe7b",
            "original_sentence": "Transparency requires that companies disclose accurate and timely information regarding their financial performance, risks, and governance structures.",
            "paper_details": {
                "title": "Corporate governance, national governance quality, and biodiversity reporting: Global evidence",
                "authors": [
                    "Orazalin N.S."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85211606220",
                "doi": "10.1016/j.intaccaudtax.2024.100669"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 3,
                "sentence_index": 2
            }
        },
        {
            "id": "c3f8c290-64a3-4c5f-b923-856d13176166",
            "original_sentence": "Accountability ensures that executives and directors are answerable to shareholders and other stakeholders for their decisions and actions.",
            "paper_details": {
                "title": "Corporate governance, national governance quality, and biodiversity reporting: Global evidence",
                "authors": [
                    "Orazalin N.S."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85211606220",
                "doi": "10.1016/j.intaccaudtax.2024.100669"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 3,
                "sentence_index": 3
            }
        },
        {
            "id": "1385e263-4e62-4ebc-ab24-a6037aa75cdd",
            "original_sentence": "The presence of well-defined reporting mechanisms and audits helps prevent fraudulent activities and mismanagement.",
            "paper_details": {
                "title": "The impact of governance quality on corporate climate risk disclosure: The role of the governance committee",
                "authors": [
                    "Honey D."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85213984596",
                "doi": "10.1016/j.irfa.2024.103901"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 3,
                "sentence_index": 4
            }
        },
        {
            "id": "a78371b0-8278-41ac-ae16-6291562692a1",
            "original_sentence": "Ethical conduct is another cornerstone of corporate governance.",
            "paper_details": {
                "title": "Voter Turnouts Govern Key Electoral Statistics",
                "authors": [
                    "Ritam Pal",
                    "Aanjaneya Kumar",
                    "M. S. Santhanam"
                ],
                "year": "2025",
                "url": "http://arxiv.org/abs/2501.01896v1",
                "doi": ""
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 4,
                "sentence_index": 1
            }
        },
        {
            "id": "eb83f6dd-eb5d-469d-ab8d-97eee4a78eb6",
            "original_sentence": "Adherence to ethical principles fosters trust and confidence among investors, customers, and regulatory bodies.",
            "paper_details": {
                "title": "Navigating paradoxical tension: the influence of big corporations on startup sustainability performance in asymmetric collaborations",
                "authors": [
                    "Salvatore Ammirato",
                    "Alberto Michele Felicetti",
                    "Serena Filippelli",
                    "Thomas Maran"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s11846-024-00777-7",
                "doi": "10.1007/s11846-024-00777-7"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 4,
                "sentence_index": 3
            }
        },
        {
            "id": "aecb3a30-e62b-4621-af64-bfd8b0cbaa83",
            "original_sentence": "Strong corporate governance structures also promote corporate social responsibility, ensuring that companies operate in a manner that benefits society while minimizing environmental and social risks.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 4,
                "sentence_index": 4
            }
        },
        {
            "id": "a73adccc-da45-4917-926f-96d987e31850",
            "original_sentence": "Risk management is an essential component of corporate governance.",
            "paper_details": {
                "title": "Pursuing a corporate sustainable identity: Green governance strategy, hybrid vehicle development, knowledge and sustainability performance",
                "authors": [
                    "Helfaya A."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85216373046",
                "doi": "10.1016/j.jik.2025.100660"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 5,
                "sentence_index": 1
            }
        },
        {
            "id": "cb6be7d8-7558-4657-9682-a701869f2de5",
            "original_sentence": "Companies must identify, assess, and mitigate risks that could affect their financial stability and reputation.",
            "paper_details": {
                "title": "Corporate governance, national governance quality, and biodiversity reporting: Global evidence",
                "authors": [
                    "Orazalin N.S."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85211606220",
                "doi": "10.1016/j.intaccaudtax.2024.100669"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 5,
                "sentence_index": 2
            }
        },
        {
            "id": "5ad1f1d3-6893-4ac9-b15b-5b984f8ae6cc",
            "original_sentence": "Effective risk management frameworks help organizations navigate economic uncertainties, regulatory changes, and operational challenges.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 5,
                "sentence_index": 3
            }
        },
        {
            "id": "efbd598d-5dcf-46d1-b8c9-0bfa1c9ef033",
            "original_sentence": "The board of directors plays a vital role in ensuring that robust risk management policies are in place and adhered to by management.",
            "paper_details": {
                "title": "The impact of governance quality on corporate climate risk disclosure: The role of the governance committee",
                "authors": [
                    "Honey D."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85213984596",
                "doi": "10.1016/j.irfa.2024.103901"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 5,
                "sentence_index": 4
            }
        },
        {
            "id": "03236a41-b9b3-480a-af8d-e2c21903cb64",
            "original_sentence": "Legal and regulatory compliance is a fundamental aspect of corporate governance.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 6,
                "sentence_index": 1
            }
        },
        {
            "id": "ebd8caf4-dc47-4d05-9da7-6126b7be3d49",
            "original_sentence": "Companies must operate within the legal frameworks established by governments and regulatory bodies.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 6,
                "sentence_index": 2
            }
        },
        {
            "id": "0e446bde-0e4b-491c-b048-0a6be24c13bb",
            "original_sentence": "Compliance with securities laws, tax regulations, labor laws, and environmental standards is essential to avoid legal penalties and maintain a good corporate reputation.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 6,
                "sentence_index": 3
            }
        },
        {
            "id": "7dd3c438-538f-4d6b-aff9-d4d7deda931d",
            "original_sentence": "A strong compliance culture enhances corporate integrity and prevents unethical practices that could lead to financial scandals.",
            "paper_details": {
                "title": "The role of multiple board directorships in sustainability strategies: symbol or substance?",
                "authors": [
                    "Francisco Bravo-Urquiza",
                    "Nuria Reguera-Alvarado"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s11846-024-00778-6",
                "doi": "10.1007/s11846-024-00778-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 6,
                "sentence_index": 4
            }
        },
        {
            "id": "c1ddc520-5d1c-46ee-9943-096329b2e1a1",
            "original_sentence": "Corporate governance also encompasses the protection of shareholder rights.",
            "paper_details": {
                "title": "The impact of governance quality on corporate climate risk disclosure: The role of the governance committee",
                "authors": [
                    "Honey D."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85213984596",
                "doi": "10.1016/j.irfa.2024.103901"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 7,
                "sentence_index": 1
            }
        },
        {
            "id": "12714ffe-9b3b-412d-ac80-f25110739d24",
            "original_sentence": "Shareholders are the owners of a company and have the right to participate in key decisions, such as electing directors and approving major corporate actions.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 7,
                "sentence_index": 2
            }
        },
        {
            "id": "e0c72bd9-1e19-4b53-b4ee-1621cc1bcd17",
            "original_sentence": "Effective shareholder engagement contributes to a more inclusive and balanced decision-making process.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 7,
                "sentence_index": 4
            }
        },
        {
            "id": "7ccbb51d-02a8-4381-aa9f-bc3959dc0791",
            "original_sentence": "Technological advancements have transformed corporate governance by introducing digital tools that enhance transparency, accountability, and communication.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 8,
                "sentence_index": 1
            }
        },
        {
            "id": "aaf9722c-174a-4e8a-9044-48d2ef532ecd",
            "original_sentence": "Companies now use technology-driven solutions for real-time financial reporting, data security, and stakeholder engagement.",
            "paper_details": {
                "title": "Wine waste valorisation: crushing the research domain",
                "authors": [
                    "Stefano Abbate",
                    "Piera Centobelli",
                    "Maria Di Gregorio"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s11846-024-00779-5",
                "doi": "10.1007/s11846-024-00779-5"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 8,
                "sentence_index": 2
            }
        },
        {
            "id": "194b6dc5-3a94-400f-941e-8544ac702ef5",
            "original_sentence": "The integration of artificial intelligence and blockchain technology further strengthens governance mechanisms by reducing fraud risks and improving decision-making processes.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 8,
                "sentence_index": 3
            }
        },
        {
            "id": "6554ba66-12e7-49fc-99d1-eec18cf61453",
            "original_sentence": "Corporate governance practices vary across different countries and industries.",
            "paper_details": {
                "title": "Corporate governance, national governance quality, and biodiversity reporting: Global evidence",
                "authors": [
                    "Orazalin N.S."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85211606220",
                "doi": "10.1016/j.intaccaudtax.2024.100669"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 9,
                "sentence_index": 1
            }
        },
        {
            "id": "612d63f5-1fd3-4d27-9496-d49e281486d8",
            "original_sentence": "While some jurisdictions have stringent regulatory frameworks, others rely on voluntary guidelines and best practices.",
            "paper_details": {
                "title": "Corporate governance, national governance quality, and biodiversity reporting: Global evidence",
                "authors": [
                    "Orazalin N.S."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85211606220",
                "doi": "10.1016/j.intaccaudtax.2024.100669"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 9,
                "sentence_index": 2
            }
        },
        {
            "id": "8e73a620-c4c4-485a-89ce-6d6bd473d7e2",
            "original_sentence": "International organizations such as the Organisation for Economic Co-operation and Development (OECD) and the International Finance Corporation (IFC) have developed corporate governance principles that serve as benchmarks for companies worldwide.",
            "paper_details": {
                "title": "The Rule of Law and Corporate Actors: Measuring Influence",
                "authors": [
                    "Olena Uvarova"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s40803-024-00242-3",
                "doi": "10.1007/s40803-024-00242-3"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 9,
                "sentence_index": 3
            }
        },
        {
            "id": "ae004001-4e86-491f-89e1-3f6675e00365",
            "original_sentence": "Adapting to global governance standards helps organizations attract investment, foster sustainable growth, and enhance their corporate reputation.",
            "paper_details": {
                "title": "Navigating paradoxical tension: the influence of big corporations on startup sustainability performance in asymmetric collaborations",
                "authors": [
                    "Salvatore Ammirato",
                    "Alberto Michele Felicetti",
                    "Serena Filippelli",
                    "Thomas Maran"
                ],
                "year": "2024",
                "url": "https://doi.org/10.1007/s11846-024-00777-7",
                "doi": "10.1007/s11846-024-00777-7"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 9,
                "sentence_index": 4
            }
        },
        {
            "id": "e6a85ef9-0bb9-4f41-98f8-75ed9f2131d4",
            "original_sentence": "The effectiveness of corporate governance is often assessed through various indicators, including financial performance, board composition, risk management effectiveness, and adherence to ethical standards.",
            "paper_details": {
                "title": "The impact of governance quality on corporate climate risk disclosure: The role of the governance committee",
                "authors": [
                    "Honey D."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85213984596",
                "doi": "10.1016/j.irfa.2024.103901"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 10,
                "sentence_index": 1
            }
        },
        {
            "id": "f9e608df-7e6d-4d91-95b5-39319742dcdb",
            "original_sentence": "Poor corporate governance, on the other hand, can lead to financial mismanagement, legal liabilities, and reputational damage.",
            "paper_details": {
                "title": "Flying safe: The impact of corporate governance on aviation safety",
                "authors": [
                    "Khadivar H."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85215400834",
                "doi": "10.1016/j.jairtraman.2025.102743"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 10,
                "sentence_index": 3
            }
        },
        {
            "id": "8fc34850-7102-4d23-ac29-f1be478d7227",
            "original_sentence": "Corporate governance is a dynamic and evolving field that requires continuous improvement and adaptation to emerging challenges.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 11,
                "sentence_index": 1
            }
        },
        {
            "id": "6c970a4d-2322-43b1-843b-91f58b19d195",
            "original_sentence": "As businesses operate in increasingly complex environments, the importance of sound governance practices cannot be overstated.",
            "paper_details": {
                "title": "Anticipatory macroeconomic governance: exploring future-oriented strategies for economic resilience and sustainability",
                "authors": [
                    "Ceyhun Elgin"
                ],
                "year": "2025",
                "url": "https://doi.org/10.1186/s40309-025-00248-6",
                "doi": "10.1186/s40309-025-00248-6"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 11,
                "sentence_index": 2
            }
        },
        {
            "id": "053cddc2-a5bb-4469-9814-cb7ac3275526",
            "original_sentence": "Companies must remain committed to upholding high governance standards, fostering transparency, and maintaining accountability to ensure sustainable success in the global market.",
            "paper_details": {
                "title": "Pursuing a corporate sustainable identity: Green governance strategy, hybrid vehicle development, knowledge and sustainability performance",
                "authors": [
                    "Helfaya A."
                ],
                "year": "2025",
                "url": "https://api.elsevier.com/content/abstract/scopus_id/85216373046",
                "doi": "10.1016/j.jik.2025.100660"
            },
            "status": "pending_review",
            "metadata": {
                "paragraph_index": 11,
                "sentence_index": 3
            }
        }
    ]
}

type CitationSuggestionBoxProps = {
    suggestions: string[] | undefined;
};


const CitationSuggestionBox: React.FC<CitationSuggestionBoxProps> = ({ suggestions }) => {

    return (
        <div className="flex items-center justify-center w-full h-full flex-col mb-[13rem] sm:mb-0 ">
            {suggestions && suggestions.length > 0 ? (
                <div className="w-full">
                    {citation.citations.map((suggestion: any, index: any) => (
                        <div key={index} className="p-2 sm:p-4 border-b text-[#545454] flex flex-col items-start gap-4">
                            <p className='text-[20px] truncate max-w-full'><s>{suggestion?.original_sentence}</s></p>
                            <p className='text-[20px] text-[#010F34] max-w-full truncate'>{suggestion.original_sentence}</p>
                            <p className='bg-[#EAFBF9] text-[#010F34] font-medium text-[14px] rounded-md truncate max-w-full p-2'>
                                Source:{suggestion.paper_details.url}</p>
                            <div className='flex gap-4'>
                                <button className='text-[14px] text-[#010F34] font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-3'>
                                    Accept
                                </button>
                                <button className='text-[14px] text-[#8A8A8A] font-medium  px-4 py-3'>
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className='flex items-center justify-between w-full px-4 py-2 bg-[#EDEDED] gap-1'>
                        <button className='text-[14px] text-[#010F34] bg-white font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-2 whitespace-nowrap'>
                            Accept All
                        </button>
                        <button className='text-[14px] text-[#010F34] bg-white font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-2 whitespace-nowrap'>
                            Edit Details
                        </button>
                        <button className='text-[14px] text-[#010F34] bg-[#31DAC0] font-medium rounded-sm shadow-md px-4 py-2'>
                            Finalize
                        </button>
                    </div>

                </div>
            ) : (
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img src="/assets/home-trend-down.svg" alt="home-icon" />
                    <h3 className="text-[20px] font-semibold text-[#010F34]">Let’s get to work</h3>
                    <p className="text-[#010F34] text-[14px] font-medium">Suggestions will appear here</p>
                </div>
            )}
        </div >
    );
};

export default CitationSuggestionBox;
