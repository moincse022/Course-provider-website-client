import  { useContext } from 'react';
import { AuthContext } from '../Config/ultilities/provider/AuthProvider';

const useAuth = () => {
 const auth=useContext(AuthContext);
 return auth;
};

export default useAuth;