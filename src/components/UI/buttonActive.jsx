import React, { useState } from 'react';
export default function ButtonActive({
    active = false,
    className = '',
    children,
    ...props
}) {
    const [isActive, setIsActive] = useState(active);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <li
            {...props}
            onClick={handleClick} 
            className={
                'inline-flex items-center bg-gray-100 text-gray-600 px-2 py-1 rounded mr-1 text-3xl font-bold cursor-pointer transition duration-150 ease-in-out focus:outline-none ' +
                (isActive
                    ? 'text-white nav-gradient-bg focus:text-white'
                    : 'text-gray-600 bg-gray-100 focus:text-gray-700') +
                className
            }
        >
            {children}
        </li>
    );
}
