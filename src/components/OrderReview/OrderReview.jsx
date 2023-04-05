import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const OrderReview = ({product,handleRemoveData}) => {
    const {id, name, img, quantity, price} = product ;
    console.log(product)
    return (
        <div className=' mt-5 w-[571px] h-[107px] border-2  border-[#95A0A7] rounded-lg p-2 flex items-center'>
            <div className='h-[91px] w-[91px]'>
                <img className='h-full w-full' src={img} alt="" />
            </div>
            <div className='flex-grow ml-4'>
                <p className='text-5 font-medium'>{name}</p>
                <p> price: <span className='text-[#FF9900]'>{price}</span></p>
                <p>Order Quantity : <span className='text-[#FF9900]'>{quantity}</span></p>
            </div>
            <button onClick={()=> handleRemoveData(id)} className='h-[60px] w-[60px] bg-[#eb57574c] rounded-[50%] flex justify-center items-center'><TrashIcon className="h-8 w-7 text-[#EB5757]" /></button>
        </div>
    );
};

export default OrderReview;