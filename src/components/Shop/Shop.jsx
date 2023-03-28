import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const stordCart =getShoppingCart()
        const saveCart =[]
        // step 1 : get id of stordCart
        for(const id in stordCart){
            // step 2: get product from  products state by using id
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                // step 3: add quantity
                const quantity = stordCart[id];
                addProduct.quantity =quantity
                saveCart.push(addProduct)
            }
        }
        setCart(saveCart)
    },[products])
    const handelAddToCart =(product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
        
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