import React from 'react'

const CitationIsReadyModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[811px] flex gap-4 flex-col ">
                <div className='w-full h-[87px]'>
                    <img src="/gif/Animation - success.gif" alt="gif" className='w-full h-full' />
                </div>
                <p className='text-[#545454] text-[20px] font-medium text-center'>Your Citations, Ready for Inspection</p>
            </div>
        </div>
    )
}

export default CitationIsReadyModal
