

// import { useState, useEffect } from 'react'
import Modal from './Modal'
import empty from '../utils/images/illustration-empty-cart.svg'
import removeIcon from '../utils/images/icon-remove-item.svg'
import carbonIcon from '../utils/images/icon-carbon-neutral.svg'


const Cart = ({cart, setCart, isOpen, startNewOrder, controlModal}) => {
// const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart-items')) || []);


// useEffect(()=> {
// localStorage.setItem('cart-items', JSON.stringify(cart));

// }, [cart])




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


const deleteFromCart = (product) => {
setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== product.id));
}



    return (
        <>
              <div className='basis-3/12  rounded-xl h-fit bg-white pb-3'> 
              <h1 className='ml-3 pt-2 text-2xl text-orange-600 font-bold '>Your Cart ({totalCartQuantity})</h1>

              {
                cart.length === 0  ? <>
                  <div className=' w-[90%] m-auto'>
                    <div className='w-[50%] m-auto p-2'>
                    <img src={empty} />
                    </div>
                    <p className='text-center text-newrose-500 p-3'>Your added items will appear here</p>
                  </div>
                </>
                :
              <>
                  
              {
                cart.map((cartItem) => {
                  return (
                    <div key={cartItem.id} className='p-3 bg-white'>
                      <div>
                        <p className='w-[90%] m-auto'>{cartItem.name}</p>
                        <div className='flex justify-between w-[90%] m-auto'>
                          <p><span className='text-orange-600'>{cartItem.quantity}x</span>
                            <span className='ml-3  text-newrose-400'>@{cartItem.price}</span>  <span className='ml-2 text-newrose-500'>${cartItem.quantity * cartItem.price}</span> 
                            </p> 
                          
                              <button className='w-[20px] h-[20px] rounded-full border border-newrose-300 flex items-center justify-center hover:border-black'>
                              <img 
                              onClick={() => deleteFromCart(cartItem)}
                              src={removeIcon}
                              
                              />
                              </button>
                        </div>

                        <hr className='mt-3'/>
                      </div>
                    </div>
                  )
                })
              }
              <div className='w-[90%] m-auto'>
                <div className='flex justify-between'>
                  <p className='text-newrose-500'>Order Total</p>
                  <p className='font-bold'>${cartPriceTotal().toFixed(2)}</p>
                </div>
                <div className='flex bg-newrose-100 mt-4 p-1 rounded-md'>
                  <img src={carbonIcon} />
                  <p className='ml-2'>This is a <span className='text-newrose-900 font-bold'>carbon-neutral</span> delivery</p>
                </div>
                <button className='w-full bg-orange-600 text-newrose-100 border:none mt-4 p-2 rounded-3xl hover:bg-newrose-500'
                  onClick={controlModal} 
                
                >Confirm Order</button>
              </div>


                  {/* Modal* */}
                {
                  isOpen && <Modal
                  startNewOrder={startNewOrder}
                  cart={cart}
                  cartPriceTotal={cartPriceTotal}
                  />
                }
                 
              </>
}
            </div>
        </>
    )

}


export default Cart;