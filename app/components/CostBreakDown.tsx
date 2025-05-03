import React, { useState } from 'react'
import { toast } from 'sonner'
import FlutterwaveButton from './FlutterWaveButton'

const CostBreakDown = () => {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null)

    const handlePay = () => {
        if (!paymentMethod) {
            toast.warning("Please select a payment method.")
            return
        }

        if (paymentMethod === 'paypal') {
            // Call Flutterwave PayPal option
            toast.success("Flutterwave PayPal payment triggered!")
            // Here you would call the real Flutterwave handler
        } else if (paymentMethod === 'card') {
            toast.success("Flutterwave Card payment triggered!")
            // Handle card payment with Flutterwave here
        }
    }

    const activeClass = "border-[#31DAC0] bg-[#E6FAF7]"

    return (
        <div className="flex items-center justify-start w-full h-full flex-col gap-4 px-4 ">
            <h4 className='text-[24px] text-[#010F34] font-semibold border-b-[0.5px] border-[#D8D8D8] py-4'>Your Citation Freedom Is Just One Step Away 👌</h4>
            <div className='flex flex-col items-start w-full gap-2 mb-[10rem] '>
                <p className='text-[#333333] text-[18px] font-semibold'>The Damage Report</p>
                <ul className='text-[#9E9E9E] flex flex-col gap-1'>
                    <li className='flex gap-3 items-center w-full'>
                        <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                        <p>Citations Added: [Number]</p>
                    </li>
                    <li className='flex gap-3 items-center w-full'>
                        <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                        <p>Time Saved: Approximately [Hours] hours</p>
                    </li>
                    <li className='flex gap-3 items-center w-full'>
                        <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                        <p>Formatting Headaches Avoided: Countless</p>
                    </li>
                </ul>

                <div className='py-4 flex flex-col sm:flex-row gap-4 items-stretch justify-center'>
                    <article className='text-[#9E9E9E] p-4 flex flex-col gap-2 text-[18px] border border-[#F3F3F3] w-full sm:max-w-[210px] rounded-sm'>
                        <h4 className='text-[#333333] text-[18px] font-semibold'>Cost Breakdown</h4>
                        <p>Base Fee: <span className='text-[#333333] '>$2.99</span></p>
                        <p>Citation Magic ([Number] citations): <span className='text-[#333333] '>$[Amount]</span></p>
                        <p>Total: <span className='text-[#333333] '>$[Total Amount]</span></p>
                    </article>
                    <article className='text-[#9E9E9E] bg-[#F7F7F7] p-4 flex flex-col gap-2 text-[18px] border border-[#F3F3F3] w-full sm:max-w-[210px] rounded-sm'>
                        <h4 className='text-[#333333] text-[18px] font-semibold'>Tweakrr: $[Amount]</h4>
                        <p>Coffee for a late-night citation session: <span className='text-[#333333] '>$4.50+</span></p>
                        <p>Points lost for incorrect citations: Priceless<span className='text-[#333333] '>[Amount]</span></p>
                    </article>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-[#333333] font-semibold text-[18px]">Payment Options</h4>

                    <div className="flex gap-4">
                        {/* Card Option */}
                        <div className="flex items-center gap-3 p-4 rounded-md bg-[#FAFAFA] border border-[#E0E0E0] transition-all duration-200 hover:border-[#31DAC0] focus-within:border-[#31DAC0] w-full">
                            <img src="/assets/card.svg" alt="card" className="w-[24px] h-[24px] object-contain" />
                            <input
                                type="text"
                                placeholder="Card"
                                className="bg-transparent outline-none text-[#333333] placeholder:text-[#9E9E9E] text-[16px] w-full"
                            />
                        </div>

                        {/* Paypal Option */}
                        <FlutterwaveButton
                            email="user@example.com"
                            amount={3000}
                            name="Shamsudeen Zakariyyah"
                            phone="08012345678"
                        />

                    </div>
                </div>


                <div className="flex flex-col gap-4 text-[18px]">
                    <h4 className="text-[#333333] font-semibold text-[18px]">Card Information</h4>

                    <div>
                        {/* Card Number Input */}
                        <input
                            type="text"
                            placeholder="3355 4646 3737 363"
                            className="bg-[#FAFAFA] border border-[#F3F3F3] rounded-md p-4 text-[#333333] placeholder:text-[#9E9E9E] outline-none w-full"
                        />

                        {/* Expiration and Security Code */}
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Expiration date"
                                className="bg-[#FAFAFA] border border-[#F3F3F3] rounded-md p-4 text-[#333333] placeholder:text-[#9E9E9E] outline-none w-full"
                            />
                            <input
                                type="text"
                                placeholder="Security Code"
                                className="bg-[#FAFAFA] border border-[#F3F3F3] rounded-md p-4 text-[#333333] placeholder:text-[#9E9E9E] outline-none w-full"
                            />
                        </div>
                    </div>
                </div>


                <p className='text-[12px] text-[#8A8A8A] text-center self-center mt-4'>
                    Your document is under our protection. <br />
                    It will be available for download immediately after payment.
                </p>
                <button
                    // onClick={onWorkMagic}
                    className="bg-[#31DAC0] rounded-full py-[14px] px-[20px] font-semibold self-start w-full">
                    Complete My Citation Transformation
                </button>
            </div>
        </div>
    )
}

export default CostBreakDown
