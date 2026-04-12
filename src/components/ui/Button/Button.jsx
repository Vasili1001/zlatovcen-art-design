import React from 'react';
import './button.scss';

const Button = ({ children, type = 'button', variant = 'primary', ...props }) => {
    return (
        <button type={type} className={`button button--${variant}`} {...props}>
            {children}
        </button>
    );
};

export default Button;