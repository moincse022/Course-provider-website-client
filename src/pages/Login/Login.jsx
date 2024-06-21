
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/Social/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {login,error,setError,loader,setLoader}=useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      setError("");
      e.preventDefault();
      const data= new FormData(e.target);
   const formData=Object.fromEntries(data.entries());
  //  login(FormData.email,FormData.password,navigate);
  // console.log(formData);
      login(formData.email,formData.password).then(()=>{
        alert("login successfully");
        navigate("/");
      }).catch((error)=>{
        setError(error.message);
        setLoader(false);
      })


   
    }
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-center text-3xl font-bold">Get started today</h1>
      <p className="text-center">Enter your email and password to login</p>
      <div className="mx-auto max-w-lg mb-0 mt-6 shadow-lg p-4  rounded-lg sm:p-6 lg:p-8 ">
        <form  onSubmit={handleSubmit} className="space-y-4">
            <p className="text-center text-xl  text-red-600" >Sing in to your account</p>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full border outline-none  p-1"
              />
            </div>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="w-full border outline-none p-1"
              />
              <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-2 top-2 text-xl cursor-pointer"><BiShow className="w-4 h-4"/></span>
            </div>
          </div>
          <div className=" bg-secondary text-white w-full flex justify-center items-center p-1">
            <input type="submit" value="Login" className="btn btn-secondary w-full  cursor-pointer" />
          
          </div>
          
          <p className="text-center">Don't have an account? <Link  className=" underline text-secondary" to="/register">Sign up</Link></p>
        </form>
        <GoogleLogin/>
      </div>
    </div>
  );
};

export default Login;
