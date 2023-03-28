import React from 'react';

const Cart = (props) => {
    let {cart} =props
    let totalPrice = 0;
    let totalShipping = 0 
    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tex = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tex
    return (
        <div className='pl-7 mt-3 flex flex-col gap-3'>
            <p className='text-lg'>Selected Items: {cart.length} </p>
            <p className='text-lg'>Total Price: ${totalPrice}</p>
            <p className='text-lg'>Total Shipping Charge: ${totalShipping}</p>
            <p className='text-lg'>Tax: ${tex.toFixed(2)}</p>
            <h1 className='text-xl font-bold'>Grand Total:$ {grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default Cart;