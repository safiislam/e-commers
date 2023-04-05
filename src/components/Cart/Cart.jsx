import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({cart,handleClearCart,children}) => {
    
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0 ;

    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1
        // }
        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tex = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tex
    return (
        <div className='pl-7 mt-3 flex flex-col gap-3'>
            <p className='text-lg'>Selected Items: {quantity} </p>
            <p className='text-lg'>Total Price: ${totalPrice}</p>
            <p className='text-lg'>Total Shipping Charge: ${totalShipping}</p>
            <p className='text-lg'>Tax: ${tex.toFixed(2)}</p>
            <h1 className='text-xl font-bold'>Grand Total:$ {grandTotal.toFixed(2)}</h1>
            <div>
                <button onClick={handleClearCart} className='flex items-center justify-between rounded px-6 bg-[#FF3030] text-white w-[90%] h-[56px]'> <span className='font-normal'>Clear Cart</span> <TrashIcon className="h-7 w-6 text-white" /></button>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default Cart;