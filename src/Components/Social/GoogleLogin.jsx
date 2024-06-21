import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleLogin = () => {
    const [Error,setError]=useState('');
    const navigate=useNavigate();
    const {googleLogin}=useAuth();
    
    const handleGoogleLogin=()=>{
        googleLogin()
        .then((result)=>{
            const user=result.user;
            setError('');
            console.log(result.user);
            if(user){
                const UserImp={
                    Name:user?.displayName,
                    email:user?.email,
                    photoURL:user?.photoURL,
                    role:"user",
                    gender:"Is not specified",
                    address:"Is not specified",
                    phone:"Is not specified",
                   
                 
                };
                if(user.email && user.displayName){
                    return axios.post("http://localhost:3001/new-user",UserImp)
                   .then(()=>{
                     navigate('/home');
                     alert("User Created Successfully");
                   }).catch((err)=>{
                    throw new Error(err)
                   }) 
                  
                   
                }
            }
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })
    }
    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            <button onClick={()=>handleGoogleLogin()}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 flex justify-center items-center gap-2" >
                 <span><FcGoogle/></span> 
                 <p>Sign in with Google</p>
            </button>
           
        </div>
    );
};

export default GoogleLogin;