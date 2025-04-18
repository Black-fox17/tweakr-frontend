import React from 'react'

const CreateAccountModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-[#545454]">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[811px] flex items-center justify-center gap-2 flex-col ">
                <p className='text-[20px] font-medium'>Your Citations Are Ready to Roll!</p>
                <div className='text-left flex items-start flex-col w-full'>
                    <h3 className='text-[24px] font-semibold text-black'>Create your Tweakrr account to unleash them.</h3>
                    <p className='text-[#8A8A8A] text-[18px]'>(Don't worry, this takes 30 seconds - way faster than formatting one citation manually)</p>
                </div>
                <div className='bg-[#D8D8D8] h-[0.5px] w-full'></div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[18px] font-semibold'>Email</label>
                        <input type="text" placeholder='Email' className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full' />
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[18px] font-semibold'>Password</label>
                            <div className='w-full relative'>
                                <input type="text" placeholder='Password' className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full' />
                                <img src="/assets/Hide.svg" alt="apple" className='w-[20px] h-[20px] absolute right-4 top-[18px]' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[18px] font-semibold'>Confirm Password</label>
                            <div className='w-full relative'>
                                <input type="text" placeholder='Confirm Password' className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full relative' />
                                <img src="/assets/Hide.svg" alt="apple" className='w-[20px] h-[20px] absolute right-4 top-[18px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-6 w-full'>
                    <p className='text-[18px] '>Or take the express route</p>
                    <div className='bg-[#D8D8D8] h-[0.5px] w-[67%]'></div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <button className='border border-[#EEEEEE] w-full p-4 flex items-center justify-center gap-4 rounded-full'>
                        <img src="/assets/google.svg" alt="google" />
                        <p className='text-[16px] font-medium'>Continue with Google</p>
                    </button>
                    <button className='border border-[#EEEEEE] w-full p-4 flex items-center justify-center gap-4 rounded-full'>
                        <img src="/assets/apple.svg" alt="apple" />
                        <p className='text-[16px] font-medium'>Continue with Google</p>
                    </button>
                    <button className="bg-[#31DAC0] text-[14px] text-black rounded-full py-[14px] px-[20px] font-semibold self-start w-full">
                        Work Your Citation Magic
                    </button>
                </div>
                <div>
                    <p className='text-center '>By signing up, you're joining the citation liberation movement. <br />
                        Also, you agree to  <span className='text-[#010F34] font-medium'>our Terms</span> and <span className='font-medium text-[#010F34]'>Privacy Policy</span> .</p>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountModal
