
import { useState } from "react";
import { Link } from "react-router-dom";
import dessertsImage from "../utils/images/Collection.png";
import { TbEyeClosed } from "react-icons/tb";
import { FiEye } from "react-icons/fi";


const LoginPage = () => {
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({
    email:'',
    password:'',
})


const readPassword = () => {
setIsOpen(!isOpen);
}


    return(
        <>
         <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center'
          style={{backgroundImage:`url(${dessertsImage})`}}
        >
            
            <div className='bg-newrose-100 w-80 p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:w-96'>
               
                <h1 className='text-2xl text-center'>Hi Welcome back 👋🏽</h1>

                <div className='mt-5'>
                    <input type="text" placeholder="Email Address" className='border-none outline-none w-full rounded-xl p-2'
                        value={formData.email}
                        name='email'
                    />
                </div>

                <div className='mt-5 flex justify-between rounded-xl bg-white border border-blue-400 items-center'>
                    <input type={isOpen ? 'text' : 'password'}  placeholder='Password' className='outline-none w-full rounded-xl  p-2 '
                    name="password"
                    value={formData.password}
                    />
                    
                        {
                            !isOpen ?
                            <>
                            <TbEyeClosed 
                        className='mr-3 cursor-pointer'
                        onClick={readPassword}
                        />
                            </> : 
                            
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
                    <span className='cursor-pointer'>Remember Me</span>

                    
                </div>

                <button className="p-2 bg-orange-600 w-full rounded-xl text-newrose-100 mt-5">Login</button>

                <div className="mt-5 text-center">
                <span>New Around here?</span>
                <span className='ml-2 cursor-pointer text-orange-600'>Signup</span>
                </div>
                
            </div>
        </div>
        </>
    )
}



export default LoginPage;