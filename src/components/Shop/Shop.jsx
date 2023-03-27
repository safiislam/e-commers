import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch('products.json')
            const data = await res.json();
            setProducts(data)
        }
        loadData()
    },[])
    return (
        <div className='grid grid-cols-5  '>
            <div className='grid grid-cols-3 gap-y-8 col-span-4 mx-[60px] mt-14'>
                {
                    products.map(product => <Product product = {product}  key ={product.id}/>)
                }
            </div>
            <div className='col-span-1'>
                <p>order comer here</p>
            </div>
        </div>
    );
};

export default Shop;