import React from 'react';
import { NavLink } from 'react-router-dom';
import logoIcon from '../../../assets/images/header/logo/logo.webp';
import './logo.scss';

const Logo = () => {
    return (
        <NavLink to='/' className='logo' aria-label='ZLATOVCEN ART DESIGN home page'>
            <div className='logo__icon'>
                <img src={logoIcon} alt='Zlatovcen logo' />
            </div>

            <div className='logo__text'>
                <span className='logo__title'>ZLATOVCEN</span>
                <span className='logo__subtitle'>ART DESIGN</span>
            </div>
        </NavLink>
    );
};

export default Logo;