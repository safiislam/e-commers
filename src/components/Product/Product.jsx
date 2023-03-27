import React from 'react';

const Product = (props) => {
    const { img, seller, ratings, name, price } = props.product
    console.log(props.product)

    return (
        <div className='w-[300px] h-[508px] border-2 border-[#95A0A7] pt-1 rounded-lg relative' >
            <div className='flex justify-center'>
                <img className='w-[286px] h-[286px] rounded-lg' src={img} alt="" />
            </div>
            <div className='mt-3 ml-3'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-lg'>Price: ${price}</p>
                <p className='mt-12'>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
                

            </div>
            <button  onClick={()=>handelAddToCart()} className='w-full bg-orange-400 h-12 rounded-b-md absolute bottom-0'> Add to Cart</button>
        </div>
    );
};

export default Product;
{/* <img className='w-[286px] h-[286px]' src={img} alt="" /> */ }