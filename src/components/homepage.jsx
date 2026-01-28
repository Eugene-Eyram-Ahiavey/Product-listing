import { useState, useEffect } from 'react';
// import axios from 'axios';
import products from '../data/data.json'
// import Modal from './Modal.jsx';
import Cart from './Cart.jsx';
import cartImage from '../utils/images/icon-add-to-cart.svg';
import decrementImage from '../utils/images/icon-decrement-quantity.svg';
import incrementImage from '../utils/images/icon-increment-quantity.svg'
// import removeIcon from '../utils/images/icon-remove-item.svg'
// import carbonIcon from '../utils/images/icon-carbon-neutral.svg'
// import empty from '../utils/images/illustration-empty-cart.svg'
console.log(products);



function HomePage(){
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart-items')) || []);
const [isOpen, setIsOpen] = useState(false);


useEffect(()=> {
localStorage.setItem('cart-items', JSON.stringify(cart));

}, [cart])



const addToCart = (product) => {
setCart((prevCart) => {

  const existingProduct = prevCart.find(cartItem => cartItem.id === product.id);

  if(existingProduct){
    return prevCart.map(cartItem => {
      return cartItem.id === product.id ? {...cartItem, quantity:cartItem.quantity + 1} : cartItem
    });
  }

  return [...prevCart, {...product, quantity: 1}];
})

}


const removeFromCart = (product) =>{
setCart((prevCart) => {


  const existingProduct = prevCart.find(cartItem => cartItem.id === product.id);
console.log(prevCart);

if(!existingProduct){
  return prevCart;
}
  if(existingProduct.quantity === 1){
    return prevCart.filter(cartItem => cartItem.id !== product.id);
  }
  

if(existingProduct.quantity > 1){
  return prevCart.map(cartItem => {
    return cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem;
  })
}

})

}



let totalCartQuantity = cart.reduce((acc, cartItem) => {
return acc + cartItem.quantity;
}, 0);




console.log(totalCartQuantity);

const cartPriceTotal = () => {
  let totalCartPrice = 0; 

  cart.forEach(cartItem => {
    return totalCartPrice += (cartItem.price * cartItem.quantity);
  })
  return totalCartPrice;
}

console.log(cartPriceTotal())

// const deleteFromCart = (product) => {
// setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== product.id));
// }

const controlModal = () => {
setIsOpen(true);
}

const startNewOrder = () => {
  setIsOpen(false);
setCart(prevCart => {
prevCart.length = 0;  
return prevCart;
})
}

    return (      
        <div className='min-h-screen'>
         <h1 className='text-2xl font-sans font-bold text-newrose-900 ml-20 mt-5'>Desserts</h1>
        <div className='flex flex-col w-[90%] m-auto mt-5 lg:flex-row gap-5 pb-10'>
           
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
                            onClick = {() => removeFromCart(product)}
                            >
                                <img className='hidden group-hover:block mt-2 m-auto' src={decrementImage} alt="decrement"/>
                            </button>
                            <p className='hidden group-hover:block text-white cursor-pointer'>{product?.quantity}</p>
                           <button className='w-[20px] h-[20px] rounded-full border border-white flex items-center justify-center'
                           onClick={() => addToCart(product)}
                           >
                            <img className='hidden group-hover:block bg-orange' src={incrementImage} alt="increment"/>
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

             {/*Cart Items */}
             <Cart 
             cart={cart}
             setCart={setCart}
             isOpen={isOpen}
             startNewOrder={startNewOrder}
             controlModal={controlModal}
             />
          
        </div>
        </div>


    )
}

export default HomePage;