import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/' className={({isActive})=>isActive? 'active':''}>Home</NavLink>
            <NavLink to='/shop' className={({isActive})=>isActive? 'active':''}>Shop</NavLink>
            <NavLink to='/order' className={({isActive})=>isActive? 'active':''}>Order Review</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive? 'active':''}>About</NavLink>
            <NavLink to='/login' className={({isActive})=>isActive? 'active':''}>Login</NavLink>
        </div>
    );
};

export default Header;