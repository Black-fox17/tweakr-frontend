import React from 'react'

interface ButtonProps {
    variant?: 'outlined' | "transparent" | 'default';
    overrideStyle?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', overrideStyle, onClick, children }) => {
    const baseClasses = "flex gap-2 items-center justify-center rounded-[6px]  relative z-10  text-center whitespace-nowrap cursor-pointer hover:shadow-md "
    let variantClasses = '';

    switch (variant) {
        case 'outlined':
            variantClasses = 'bg-brand text-white';
            break;
        case 'transparent':
            variantClasses = 'bg-inherit border border-brand text-brand';
            break;
        default:
            variantClasses = 'bg-[#064386] text-white';
            break;
    }

    return (
        <div className='relative group'>
            <button className={`${overrideStyle} ${baseClasses} ${variantClasses}`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
