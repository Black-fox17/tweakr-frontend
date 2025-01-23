import DraftForm from '@/app/components/DraftForm'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-16 px-4 text-center'>
            <h1 className='text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 leading-tight'>
                Secure Your Work and Experience a Personalized Platform!<br />
                Manage Drafts, References, and Preferences with Ease.
            </h1>
            <DraftForm />
        </div>
    )
}

export default page
