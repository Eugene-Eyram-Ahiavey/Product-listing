
import { useState } from "react";
import { Link } from "react-router-dom";
import dessertsImage from "../utils/images/Collection.png";
import { TbEyeClosed } from "react-icons/tb";
import { FiEye } from "react-icons/fi";


const SignUpPage = () => {
const [isOpen, setIsOpen] = useState(false)


const readPassword = () => {
setIsOpen(!isOpen);
}

    return(
        <>
         <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center'
          style={{backgroundImage:`url(${dessertsImage})`}}
        >
            
            <div className='bg-newrose-100 w-80 p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:w-96'>
               
                <h1 className='text-2xl'>Welcome On Board We're glad to have you here 🥳</h1>

                <div className='mt-5'>
                    <input type="text" placeholder="Full Name" className='border-none outline-none w-full rounded-xl p-2'/>
                </div>

                <div className='mt-5'>
                    <input type="text" placeholder="Email Address" className='border-none outline-none w-full rounded-xl p-2'/>
                </div>

                <div className='mt-5 flex justify-between rounded-xl bg-white border border-blue-400 items-center'>
                    <input type={isOpen ? 'text' : 'password'}  placeholder='Password' className='outline-none w-full rounded-xl  p-2 '/>
                    
                    {
                        isOpen ? <>
                        <TbEyeClosed
                    className='mr-3 cursor-pointer'
                    onClick={readPassword}
                    />
                        </>
                        : 
                        <>
                        <FiEye 
                        className='mr-3 cursor-pointer'
                        onClick={readPassword}
                        />
                        </>
                    }
                    
                </div>
                
                <div className='mt-5 flex justify-between items-center'>
                    <input type="checkbox" /> 
                    <span>I Agree with Terms of Service and Privacy Policy</span>
                </div>

                <button className="p-2 bg-orange-600 w-full rounded-xl text-newrose-100 mt-5">Login</button>

                <div className="mt-5 text-center">
                <span>Already have an account?</span>
                <span className='ml-2 text-orange-600'>Login</span>
                </div>
                
            </div>
        </div>
        </>
    )
}



export default SignUpPage;