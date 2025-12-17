// import { useState, useEffect } from 'react';
// import axios from 'axios';
import products from '../data/data.json'
import addToCart from '../../public/images/icon-add-to-cart.svg';

console.log(products);

function HomePage(){


    return (
        
        <>
        
         <h1 className='text-2xl font-sans font-bold text-newrose-900 ml-20 mt-5'>Desserts</h1>
        <div className='flex flex-col w-[90%] m-auto mt-5'>
           
            <div className='basis-9/12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3' >
            {
            products.map((product) => {
                
            return (
             <div  key={product.id} className=''>
                 <div className='relative'>
                   <picture>
                    <source  media="(min-width: 1024px)" srcSet={product.image.desktop}/>
                    <source  media="(min-width: 768px)" srcSet={product.image.tablet}/>
                    <img src={product.image.mobile} alt={product.name}
                    className='rounded-lg'
                    />
                   </picture>
                   <div className="m-auto border border-newrose-500 p-1 w-[180px] cursor-pointer rounded-3xl flex justify-center items-center absolute bottom-[-10px] left-16 bg-white">
                        <img src={addToCart} alt="add-to-cart" className='h-[20px]'/>
                        <p className='ml-5'>Add to Cart</p>
                    </div>
                 </div >
                    <div className='mt-7'>
                        <p className='text-newrose-400'>{product.category}</p>
                        <p>{product.name}</p>
                        <p className='text-orange-600'>${(product.price).toFixed(2)}</p>
                    </div>

                </div>
            )
            })
            }
             
             </div>
            <div className='basis-3/12 bg-yellow-800'> Iam 25%</div>
        </div>
        </>
    )
}

export default HomePage;