import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Acceptance of Terms</h2>
                    <p className="text-gray-600 leading-6">
                        By accessing and using Tweakr, you agree to comply with our terms and conditions. If you do not agree, you may not use the platform.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">User Responsibilities</h2>
                    <p className="text-gray-600 leading-6">
                        Users must ensure that the documents uploaded comply with copyright laws and are free of sensitive or illegal content.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Service Scope</h2>
                    <p className="text-gray-600 leading-6">
                        Tweakr automates in-text citations and reference list generation. It does not add, subtract, or alter document content except for citation purposes.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Customization Features</h2>
                    <p className="text-gray-600 leading-6">
                        Users can select preferred reference years and formats. Tweakr reserves the right to update these features periodically.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Limitation of Liability</h2>
                    <p className="text-gray-600 leading-6">
                        Tweakr is not liable for any errors in citations due to incomplete or inaccurate information in the user’s uploaded documents.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Modifications to Terms</h2>
                    <p className="text-gray-600 leading-6">
                        Tweakr reserves the right to update its terms at any time. Continued use of the platform signifies acceptance of the updated terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
