import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Data Collection</h2>
                    <p className="text-gray-600 leading-6">
                        Tweakr collects and processes documents uploaded by users solely for citation and referencing purposes. No other content is analyzed or stored beyond this scope.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">User Preferences</h2>
                    <p className="text-gray-600 leading-6">
                        The system allows users to customize citation years and formats. This data is temporarily stored to provide the requested service.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Data Security</h2>
                    <p className="text-gray-600 leading-6">
                        We ensure the safety and privacy of your uploaded documents.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Third-Party Integrations</h2>
                    <p className="text-gray-600 leading-6">
                        Tweakr uses trusted citation databases for sourcing references. No user data is shared with these databases beyond what is necessary for citation matching.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Policy Updates</h2>
                    <p className="text-gray-600 leading-6">
                        Changes to the privacy policy will be communicated through the platform. Continued use indicates acceptance of any updates.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default page
