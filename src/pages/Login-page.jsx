
import { useState } from "react";
import dessertsImage from "../utils/images/Collection.png";
import { TbEyeClosed } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";


const LoginPage = () => {

const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({
    email:'',
    password:'',
    rememberMe: false,

})


const handleChange = (event) => {
const {name, value,type, checked, } = event.target;

   setFormData((prevData) => ({
...prevData, 
[name]:type === 'checkbox' ? checked : value
   }));
}

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
                       onChange={handleChange}
                       required
                    />
                </div>

                <div className='mt-5 flex justify-between rounded-xl bg-white border border-blue-400 items-center'>
                    <input type={isOpen ? 'text' : 'password'}  placeholder='Password' className='outline-none w-full rounded-xl  p-2 '
                   
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     required
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
                
                <div className='mt-5 flex  items-center'>
                    <input type="checkbox"
                    name='rememberMe'
                    value={formData.rememberMe}
                    onChange={handleChange}
                    className='cursor-pointer'
                    /> 
                    <span className='ml-3'>Remember Me</span>

                    
                </div>

                <button className="p-2 bg-orange-600 w-full rounded-xl text-newrose-100 mt-5">Login</button>

                <div className="mt-5 text-center">
                <span>New Around here?</span>
                <Link to={"/signup"}>
                <span className='ml-2 cursor-pointer text-orange-600'>Signup</span>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}



export default LoginPage;