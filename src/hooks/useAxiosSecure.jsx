import { useContext, useEffect } from "react";
import useAuth from "./useAuth";
import {useNavigate} from 'react-router-dom';

import axios from "axios";
import { AuthContext } from "../Config/ultilities/provider/AuthProvider";
const useAxiosSecure = () => {
//  const {logout}=useContext(AuthContext);
 const Navigate=useNavigate();

 const axiosSecure = axios.create({
   baseURL: 'http://localhost:3001',
 })
 useEffect(()=>{
   axiosSecure.interceptors.response.use(
     (config) => {
      const token = localStorage.getItem('token');
       if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
     })
     const responseInterceptor = axiosSecure.interceptors.response.use((response) => response,async(error)=>{
     
     
         if(error.response.status===401 || error.response.status===403){
          //  await logout();
           Navigate('/login');
         
         }
         throw error;
       
      })
    return ()=>{
      axiosSecure.interceptors.request.eject(responseInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);

    }
 },[Navigate,axiosSecure])
 return axiosSecure;
};

export default useAxiosSecure;