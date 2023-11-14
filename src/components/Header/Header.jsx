import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { getShoppingCart } from '../../fakeData/fakeDb';
import toast, { Toaster } from 'react-hot-toast';
const Header = () => { 
    const storedCart = getShoppingCart();
    let path='/order';
    let cnt=0;
    for(const id in storedCart) cnt++;
    if(cnt===0) path='/shop';
    const toasting=()=>
    {
        if(cnt===0) {toast('Your Cart is Empty'); } 
    } 
    return (
        <div className='header'>
            <NavLink to='/' className={({isActive})=>isActive? 'active':''}>Home</NavLink>
            <NavLink to='/shop' className={({isActive})=>isActive? 'active':''}>Shop</NavLink>
            <NavLink onClick={toasting} to={path} className={({isActive})=>isActive? 'active':''}>Order Review</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive? 'active':''}>About</NavLink>
            <NavLink to='/login' className={({isActive})=>isActive? 'active':''}>Login</NavLink>
        </div>
    );
};

export default Header;