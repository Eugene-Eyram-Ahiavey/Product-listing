import { useState } from 'react';
// import axios from 'axios';
import products from '../data/data.json'
import cartImage from '../utils/images/icon-add-to-cart.svg';
import decrement from '../utils/images/icon-decrement-quantity.svg';
import increment from '../utils/images/icon-increment-quantity.svg'

console.log(products);



function HomePage(){
const [cart, setCart] = useState([]);

let cartQuantity = 0;

const addToCart = (product) => {
setCart((prevCart) => {
  const existingProduct = prevCart.find(item => item.id === product.id);
console.log('prevCart', prevCart);
  
if(existingProduct){
  return prevCart.map(item => item.id === product.id ? 
    {...item, quantity:item.quantity + 1} : item
  );
}

return [...prevCart, {...product, quantity: 1}];
})

}

const totalCartQuantity = () => {
  cart.forEach(cartItem => cartQuantity+= cartItem.quantity);
}

totalCartQuantity();








    return (
        
        <>
        
         <h1 className='text-2xl font-sans font-bold text-newrose-900 ml-20 mt-5'>Desserts</h1>
        <div className='flex flex-col w-[90%] m-auto mt-5 lg:flex-row gap-5'>
           
            <div className='basis-9/12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3' >
            {
            products.map((product) => {
                
            return (
             <div  key={product.id} className=''>
                 <div className='relative' >
                   <picture>
                    <source  media="(min-width: 1024px)" srcSet={product.image.desktop}/>
                    <source  media="(min-width: 768px)" srcSet={product.image.tablet}/>
                    <img src={product.image.mobile} alt={product.name}
                    className='rounded-lg'
                    />
                   </picture>
                   <div className=" group m-auto border border-newrose-500 p-1 w-[180px] cursor-pointer rounded-3xl flex justify-center items-center absolute bottom-[-10px] left-16 bg-white lg:ml-6 hover:bg-orange-600">
                        <img src={cartImage} alt="add-to-cart" className='h-[20px] group-hover:hidden'/>
                            <div className='hidden group-hover:flex w-full items-center justify-between px-3'>
                            <button className='w-[20px] h-[20px] rounded-full border border-white flex items-center justify-center'
                            onClick={() =>removeFromCart(product)}
                            >
                                <img className='hidden group-hover:block mt-2 m-auto' src={decrement} alt="decrement"/>
                            </button>
                            <p className='hidden group-hover:block text-white cursor-pointer'>{product?.quantity}</p>
                           <button className='w-[20px] h-[20px] rounded-full border border-white flex items-center justify-center'
                           onClick={() => addToCart(product)}
                           >
                            <img className='hidden group-hover:block bg-orange' src={increment} alt="increment"/>
                            </button>
                            </div>
                        <p className='ml-5 group-hover:hidden'>Add to Cart</p>
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
            <div className='basis-3/12 border border-black h-[300px]'> 
            <h1 className='ml-3 pt-2 text-2xl text-orange-600 font-bold '>Your Cart ({cartQuantity})</h1>
            
            </div>
        </div>
        </>
    )
}

export default HomePage;