import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "../../firebase_config";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("moin");
  const [loading, setLoading] = useState(false);
  const [loader,setLoader]=useState(false)
  const [error, setError] = useState();
  const auth = getAuth(app);
  // create user
  const singUp = async (email, password) => {
    try {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  // login
  const login = async (email, password) => {
    try {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  //  update user profile
  const updateUserProfile = async (name, photo) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setUser(auth.currentUser);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  // subscribe
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        axios.post(
          "http://localhost:5000/api/set-token", {email: user.email, name: user.displayName})
          .then((data)=>{
            if(data.data.token){
              localStorage.setItem("token", data.data.token);
              setLoading(false)
            }
         
          })
      }
      else{
        localStorage.removeItem("token")
        setLoading(false)

      }
    });
    return () => {
      unsubscribed();
    };
  }, []);
  // logOut
  const logOut =async() => {
   try{
   return await signOut(auth);
   }
   catch{
    setError(error.message);
    throw error;
   }
  };
  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    try {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const authentication = {
    user,
    singUp,
    loading,
    login,
    logOut,
    updateUserProfile,
    googleLogin,
    error,
    loader,
    setLoader,
    setError
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
