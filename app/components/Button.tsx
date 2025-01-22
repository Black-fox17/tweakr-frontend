import React from 'react'

interface ButtonProps {
    variant?: 'outlined' | 'default';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children }) => {
    const baseClasses = "w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-[6px] text-white relative z-10  text-center whitespace-nowrap cursor-pointer hover:shadow-md "
    const variantClasses = variant === 'outlined' ? ' bg-brand' : 'bg-[#064386] text-white';

    return (
        <div className='relative w-fit group'>
            <button className={`${baseClasses} ${variantClasses}`}>
                {children}
            </button>
        </div>
    )
}

export default Button
