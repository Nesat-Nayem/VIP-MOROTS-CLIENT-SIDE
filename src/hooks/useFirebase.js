import intializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
 
  onAuthStateChanged,
  signOut,
 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {
 
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
 

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [admin, setAdmin] = useState(false);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
       
      } else {
        setUser({})
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribe
  }, []);



  useEffect(()=>{
    fetch(`https://polar-cliffs-75761.herokuapp.com/checkAdmin/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
},[user.email])

  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
    
      .then(() => {
        setUser({});
      })
      
      
      .catch((err) => {
        console.log(err);
      })
      
      .finally(() => setIsLoading(false));
      sessionStorage.removeItem("email")
  };

  const handleUserRegister = ( email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        hanldeUserInfoRegister(result.user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  const hanldeUserInfoRegister = (email) => {
    fetch("https://polar-cliffs-75761.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleUserLogin = ( email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user)
        sessionStorage.setItem("email", result.user.email);
        console.log(result.user);
      })
      
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };
 
  return {
    handleGoogleLogin,
    admin,
    handleUserLogin,
    user,
    isLoading,
    handleLogout,
    handleUserRegister,
  };
};

export default useFirebase;


