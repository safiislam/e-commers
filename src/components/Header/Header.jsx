import React from 'react';
import logo  from '../../images/Logo.svg'
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' bg-[#1C2B35] h-[80px] px-20 flex justify-between items-center  '>
            <img src={logo} alt="" />
            <div className='text-white flex gap-6'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;