import React from 'react';

// Define the props interface
interface CitationIsReadyModalProps {
  onClose: () => void;
}

const CitationIsReadyModal: React.FC<CitationIsReadyModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[811px] flex gap-4 flex-col relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                <div className='w-full h-[87px]'>
                    <img src="/gif/Animation - success.gif" alt="gif" className='w-full h-full' />
                </div>
                <p className='text-[#545454] text-[20px] font-medium text-center'>
                    Your Citations, Ready for Inspection
                </p>
            </div>
        </div>
    );
};

export default CitationIsReadyModal;
