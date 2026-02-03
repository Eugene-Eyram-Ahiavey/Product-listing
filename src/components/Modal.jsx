
// import { useState } from 'react';
import orderIcon from '../utils/images/icon-order-confirmed.svg';
import { calculateMoney } from '../utils/money';
import removeIcon from '../utils/images/icon-remove-item.svg'


const Modal = ({startNewOrder, cart, cartPriceTotal, setIsOpen}) => {


const closeModal = () => {
setIsOpen(false)
}




    return (
        <>                  
                   <div className='rounded-md p-3 fixed inset-0 z-50'>
                        <div className='absolute inset-0 bg-black/50'></div>
                        <div className='relative  bg-white w-full max-w-[25rem] h-full max-h-[25rem] border right-4 left-2 top-16 rounded-2xl md:w-full md:max-w-[25rem] md:top-80 md:left-40 lg:w-full lg:max-w-[25rem] lg:top-60 lg:left-[30rem]'>
                            <div className='flex justify-between items-center pt-3 w-[95%] m-auto'>
                             <img src={orderIcon} alt="orderconfirmed" />
                               
                              <img src={removeIcon} alt="remove" className='h-5 cursor-pointer'
                              onClick={closeModal}
                              />
                            </div>
                        
                          <h1 className='text-2xl mt-2 font-bold ml-3'>Order Confirmed</h1>
                          <p className='text-newrose-400 ml-3'>we hope you enjoy your food!</p>
        
                          <div className='bg-white w-full max-w-[25rem] rounded-2xl p-3 border md:w-full md:max-w-[31.25rem] lg:w-full lg:max-w-[25rem]'>
                            {
                              cart.map((cartItem) => {
                              return(
                              <div key={cartItem.id} className='p-2'>
                                <div className='pb-2 '>
                                  <div className='flex justify-between items-center'>
                                    <img src={cartItem.image.desktop} className='w-14 rounded-md' />
                                      <div className=''>
                                      <span>{cartItem.name}</span> <br/>
                                      <span className='text-orange-400'>{cartItem.quantity}x </span>
                                      <span className='text-newrose-400'>@${calculateMoney(cartItem.quantity, cartItem.price)}</span>
                                      </div>
                                    <p>${calculateMoney(cartItem.quantity, cartItem.price)}</p>
                                  </div>
                                </div>
        
                                <hr />
                                </div>
                              )
                              })
                            }
                            <div className='flex justify-between items-center'>
                              <p className='p-4'>Order Total</p>
                              <p className='font-semibold mr-2'>${cartPriceTotal().toFixed(2)}</p>
                            </div>
        
                              <button className=' w-full bg-orange-600 text-newrose-100 border:none mt-4 p-2 rounded-3xl hover:bg-newrose-500'
                              onClick={startNewOrder}
                              >
                                Start New Order</button>
        
                          </div>
        
                      </div>
                      
                      </div>
        </>
    )


}


export default Modal;