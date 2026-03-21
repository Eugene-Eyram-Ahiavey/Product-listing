
import { useState} from "react";
import { RotatingLines } from 'react-loader-spinner';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dessertsImage from "../utils/images/Collection.png";
import { TbEyeClosed } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";


const LoginPage = () => {

const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false)
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

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

const handleLogin = async (e) => {
e.preventDefault()

if(!formData.email || !formData.password){
setError(true);
return;
}
try{
setIsLoading(true);
// console.log(formData);

const response = await axios.post("https://product-listing-backend-s5l6.onrender.com/login", {
    email: formData.email, 
    password: formData.password
});

if(response.status === 200){
    setIsLoading(false);
    // console.log(response.data);

    navigate("/home");

}
}catch(err){
setIsLoading(false);

if(err.response){
    if(err.response.status === 400){
        setErrorMessage("Email and password are required");
    }else if(err.response.status === 401){
        setErrorMessage("Invalid email or password");
    }else{
        setErrorMessage("Something went wrong");
    }
}else{
    setErrorMessage("Network error");
}

console.log(err);
}

}

    return(
        <>
        <div className='min-h-screen relative'>
         <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center'
          style={{backgroundImage:`url(${dessertsImage})`}}
        >
            
            <form className='bg-newrose-100 w-80 p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:w-96'
            onSubmit={handleLogin}
            >
               
                <h1 className='text-2xl text-center'>Hi Welcome back 👋🏽</h1>

                <div className='mt-5'>
                    <input type="text" placeholder="Email Address" className='border-none outline-none w-full rounded-xl p-2'
                        
                        value={formData.email}
                        name='email'
                       onChange={handleChange}
                       
                    />
                </div>

                <div className='mt-5 flex justify-between rounded-xl bg-white border border-blue-400 items-center'>
                    <input type={isOpen ? 'text' : 'password'}  placeholder='Password' className='outline-none w-full rounded-xl  p-2 '
                   
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     
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

                <button className="p-2 bg-orange-600 w-full rounded-xl text-newrose-100 mt-5"
                
                >Login</button>

                        {

                        error && <p className='text-red-600 text-center mt-2'>All fields are required</p> 

                        }

                        {
                        errorMessage && <p className='text-red-600 text-center mt-2'>{errorMessage}</p> 
                        }



                <div className="mt-5 text-center">
                <span>New Around here?</span>
                <Link to={"/signup"}>
                <span className='ml-2 cursor-pointer text-orange-600'>Signup</span>
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



export default LoginPage;