import React from 'react';
import './container.scss';

const Container = ({ children, as: Tag = 'div', className = '', size = 'default' }) => {
    return <Tag className={`container container--${size} ${className}`.trim()}>{children}</Tag>;
};

export default Container;