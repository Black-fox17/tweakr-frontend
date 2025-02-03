"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

const steps = [
    {
        id: 1,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 1,
        title: "Accessing the Application",
        description:
            "To begin using the Tweakr Application, open your web browser and go to the Tweakr homepage. If you already have an account, click on the Login button and enter your credentials. If you are a new user, click Sign Up to create an account. You can sign up using your email and password or authenticate through a third-party service like Google or ORCID. After completing the sign-up process, check your email for a verification link. Click on the link to activate your account and gain full access to the platform.",
        listItems: [
        ],
    },
    {
        id: 2,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 2,
        title: "Getting Started with the Dashboard",
        description:
            "Once you log in, you will be directed to the Dashboard, which serves as the main workspace for managing your documents and citations. The dashboard is divided into three key sections. The Uploaded Drafts section displays all previously uploaded documents, allowing users to access, or delete them. The Stored References section provides access to previously generated citations, enabling users to manage and retrieve them when needed. The Settings section allows users to configure citation styles such as APA, MLA and Chicago as well as adjust personal preferences like notification settings and theme options.",
        listItems: [
        ],
    },
    {
        id: 3,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 3,
        title: "Uploading and Managing Documents",
        description:
            "To upload a document, navigate to the Dashboard and click on the Upload Document button. You can either select a file from your computer using the file selector or drag and drop it into the upload box. The application supports file formats such as .docx, .txt, and PDF. Once the document is successfully uploaded, it will appear in the Uploaded Drafts section, where you can review its status and proceed with processing.",
        listItems: [
        ],
    },
    {
        id: 4,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 4,
        title: "Draft Processing",
        description:
            "After uploading your document, the next step is making a payment to initiate processing. The platform ensures that your document is carefully reviewed and properly referenced by the Tweakr team. Once the payment is confirmed, the processing team will work on your draft, ensuring accurate citations and formatting. The entire process takes approximately 5- 10 minutes to complete. Once the document has been fully processed and referenced, a download link will be sent to your email. You can use this link to download the finalized version of your document, now correctly formatted with citations.",
        listItems: [
        ],
    },
    {
        id: 5,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 5,
        title: "Finalizing and Downloading Your Document",
        description:
            "Once you receive the email containing the download link, click on it to access your processed document. You can download the document in different formats, including .docx for further editing in Microsoft Word and PDF for easy sharing or submission. The referenced document will include all necessary citations, formatted according to the citation style you selected in the Settings section.",
        listItems: [
        ],
    },
    {
        id: 6,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 6,
        title: "Conclusion",
        description:
            "The Tweakr Application provides a seamless and efficient solution for researchers, academics, and writers to manage citations and format their documents correctly. By following this guide, you can easily upload your drafts, process them for citations, and download the finalized versions with accurate references. For further assistance, visit the Help & Support section within the application.",
        listItems: [
        ],
    },
];

function HowItWorks() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="flex flex-col items-center justify-center gap-10 px-4 sm:px-8 md:px-16 py-16" id="service">
            <div className="text-center max-w-[800px]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mt-8">
                    Tweakr Application – User Guide
                </h1>
                <p className="mt-4 text-sm sm:text-base">
                    This guide will help you navigate the Tweakr Application’s web interface and make the most of its features. Follow these steps to upload, edit, and finalize your documents with properly formatted citations.
                </p>
            </div>

            <div className="relative w-full max-w-[1000px]">
                {/* Content Wrapper with Fading Effect */}
                <div
                    className={`flex flex-col gap-8 transition-all duration-500 ${showAll ? "" : "max-h-[500px] sm:max-h-[550px]"
                        }`}
                    style={{
                        WebkitMaskImage: showAll
                            ? "none"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)",
                        maskImage: showAll
                            ? "none"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)",
                        transition: "mask-image 0.5s ease-in-out, -webkit-mask-image 0.5s ease-in-out",
                    }}
                >
                    {steps.map((step, id) => (
                        <article key={id} className="flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-8">
                            <Image
                                src={step.imageSrc}
                                width={350}
                                height={250}
                                className="w-full sm:w-[300px] md:w-[350px] h-auto"
                                alt={"how it works"}
                            />
                            <div className="hidden sm:flex flex-col items-center gap-2">
                                <div className="border border-gray-500 px-3 py-1 text-sm">{step.stepNumber}</div>
                                <div className="h-[12rem] w-[1px] bg-gray-500"></div>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h3 className="font-bold text-lg sm:text-xl">{step.title}</h3>
                                <p className="text-sm sm:text-base">{step.description}</p>
                                <ul className="space-y-2">
                                    {step.listItems.map((item, index) => (
                                        <li key={index} className="text-sm sm:text-base">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            {!showAll && (
                <Button
                    variant="outlined"
                    overrideStyle="py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-base"
                    onClick={() => setShowAll(true)}
                >
                    Continue With Guide
                </Button>
            )}
        </section>
    );
}

export default HowItWorks;
