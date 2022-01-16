import { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import intializeFirebase from "../Firebase/Firebase.init";

intializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [admin, setAdmin] = useState(false);

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, provider).catch((error) =>
      setError(error.message)
    );
  };

  const newHandleFacebookLogin = () => {
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    fetch(
      `https://blooming-forest-81529.herokuapp.com/checkAdmin/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

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
    // sessionStorage.removeItem("email");
  };

  const handleUserRegister = (email, password) => {
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
    fetch("https://blooming-forest-81529.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleUserLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setUser(result.user);

        console.log(result.user);
      })

      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  return {
    handleGoogleLogin,
    newHandleFacebookLogin,
    admin,
    handleUserLogin,
    user,
    isLoading,
    handleLogout,
    handleUserRegister,
  };
};

export default useFirebase;
