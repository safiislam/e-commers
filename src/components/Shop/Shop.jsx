import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [cart, setCart]=useState([])
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch('products.json')
            const data = await res.json();
            setProducts(data)
        }
        loadData()
    },[])
    const handelAddToCart =(product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
        console.log(product.id)
        addToDb(product.id)

    }
    return (
        <div className='grid grid-cols-5  '>
            <div className='grid grid-cols-3 gap-y-8 col-span-4 mx-[60px] mt-14'>
                {
                    products.map(product => <Product product = {product}  key ={product.id} handelAddToCart={handelAddToCart}/>)
                }
            </div>
            <div className='col-span-1  bg-[#ff99004c;] h-[500px] mr-3 sticky top-0'>
                <h1 className='text-xl text-center font-semibold mt-5'>Order Summary</h1>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;