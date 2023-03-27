import React from 'react';
import logo  from '../../images/Logo.svg'
import "./Header.css"

const Header = () => {
    return (
        <nav className=' bg-[#1C2B35] h-[80px] px-20 flex justify-between items-center  '>
            <img src={logo} alt="" />
            <div className='text-white flex gap-6'>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;