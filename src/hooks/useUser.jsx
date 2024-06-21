import { useContext } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Config/ultilities/provider/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data:currentUser, isLoading,refetch } = useQuery({
    queryKey: ["user",user?.email],
    queryFn: async() =>{
    const res=await axiosSecure.get(`/user/${user?.email}`);
    return res.data;
    },
    // enabled: !!user?.email && localStorage.getItem("token")
      
      
  });
  return {currentUser,isLoading,refetch}; 
};

export default useUser;
