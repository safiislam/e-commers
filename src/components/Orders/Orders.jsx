import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';



const Orders = () => {
    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)
    
    const handleRemoveData = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)

    }
    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    console.log(cart)
    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 mt-10 mx-auto'>
                   {
                     cart.map(product => <OrderReview product = {product} key={product.id} handleRemoveData = {handleRemoveData} />)
                   }
            </div>
            <div className='col-span-1  bg-[#ff99004c;] h-[500px] w-[257px] mx-auto mr-3 sticky top-0'>
                <h1 className='text-xl text-center font-semibold mt-5'>Order Summary</h1>
                <Cart handleClearCart={handleClearCart} cart={cart} >
                    <Link to='/checkout' ><button>Proceed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;