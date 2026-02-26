
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import dessertsImage from "../utils/images/Collection.png";
import { TbEyeClosed } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { RotatingLines } from 'react-loader-spinner';



const SignUpPage = () => {

const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false)
const [error, setError] = useState(true);

const [formData, setFormData] = useState({

    fullName: '', 
    email:'',
    password:'',
    termsOfService: false,
})
const [errorMessage, setErrorMessage] = useState("");
const [isLoading, setIsLoading] = useState(false);


const handleChange = (event) => {
const {name, value, type, checked} = event.target;

setFormData((prevData) => ({
...prevData, 
[name]: type === 'checked' ? checked : value
}))
}

const readPassword = () => {
setIsOpen(!isOpen);
}



const handleSubmit = async (e) => {
e.preventDefault();
if(!formData.email || !formData.fullName || !formData.password){
    setError(true);
    return;
}try{
setIsLoading(true)

const response = await axios.post("https://product-listing-backend-s5l6.onrender.com/users", {
    full_name: formData.fullName, 
    email: formData.email,
    password: formData.password
});

console.log(response.data);

if(response.status === 201){
    setIsLoading(false);
    navigate('/home');
}
}catch(error){
setIsLoading(false)
setErrorMessage(true);
if(error.response){
    if(error.response.status === 400){
    setErrorMessage("All feilds are required");
    }else if(error.response.status === 409){
        setErrorMessage("Email already exists");
    }else{
        setErrorMessage("Something went wrong")
    }
}else{
    setErrorMessage("Network error");
}
console.log(error);
}
};





    return(
        <>
        <div className='min-h-screen relative'>
         <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center'
          style={{backgroundImage:`url(${dessertsImage})`}}
        >
            
            <form className='bg-newrose-100 w-80 p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:w-96'
             onSubmit={handleSubmit}
            >
                <h1 className='text-2xl text-center'>Welcome On Board</h1>
                    <h1 className="text-center">We're glad to have you here 🥳</h1>

                <div className='mt-5'>
                    <input type="text" placeholder="Full Name" className='border-none outline-none w-full rounded-xl p-2'
                    value={formData.fullName}
                    name='fullName'
                    onChange={handleChange}
                    />
                </div>

                <div className='mt-5'>
                    <input type="text" placeholder="Email Address"   className='border-none outline-none w-full rounded-xl p-2'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                   
                    />
                </div>

                <div className='mt-5 flex justify-between rounded-xl bg-white border border-blue-400 items-center'>
                    <input type={isOpen ? 'text' : 'password'}  placeholder='Password' className='outline-none w-full rounded-xl  p-2 '
                    name='password'
                    onChange={handleChange}
                    
                    
                    />
                    {
                        !isOpen ? <>
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
                
                <div className='mt-5 flex items-center'>
                    <input type="checkbox" 
                    value={formData.termsOfService}
                    name='termsOfService'
                    onChange={handleChange}
                    /> 
                    <span className="ml-3">I Agree with Terms of Service</span>

                </div>

                <button className="p-2 bg-orange-600 w-full rounded-xl text-newrose-100 mt-5"
                type="submit"
                >
                    SignUp
                </button>
                
                    {
                        error && <p className='text-red-600 text-center mt-2'>All fields are required</p> 
                    }

                    {
                        errorMessage && <p className='text-red-600 text-center mt-2'>{errorMessage}</p>
                    }

                <div className="mt-5 text-center">
                <span>Already have an account?</span>
                <Link to={'/login'}>
                <span className='ml-2 text-orange-600'>Login</span>
                </Link>
                </div>
                
            </form>

                {
                    isLoading && (
                        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
                            <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="black"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />    

                        </div>
                    )
                }
        </div>  
           
           </div>
        </>
    )
}



export default SignUpPage;