import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline, MdOutlinePhotoLibrary} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center pt-4 bg-gray-100">
      <div className=" bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Please Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-4 mt-8">
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    <AiOutlineUser className="inline-block mr-2 text-gray-500" />
                    Username
                </label>

                <input type="text" placeholder="Enter your name" {...register("name", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    <MdOutlineMailOutline className="inline-block mr-2 text-gray-500" />
                 Email
                </label>

                <input type="text" placeholder="Enter your email" {...register("email", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    <RiLockPasswordLine  className="inline-block mr-2 text-gray-500" />
                  Password
                </label>

                <input type="text" placeholder="Enter your name" {...register("password", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm password">
                    <RiLockPasswordLine className="inline-block mr-2 text-gray-500" />
                 Confirm Password
                </label>

                <input type="text" placeholder="Enter your email" {...register("confirm", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    <FaPhoneAlt className="inline-block mr-2 text-gray-500" />
               Phone number
                </label>

                <input type="text" placeholder="Enter your name" {...register("password", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    < MdOutlinePhotoLibrary className="inline-block mr-2 text-gray-500" />
                      Photo URL 
                </label>

                <input type="text" placeholder="Enter your email" {...register("confirm", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" /> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
