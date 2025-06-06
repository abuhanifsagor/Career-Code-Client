import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
 
const googleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  const authInfo = {
    createUser,
    loading,
    user,
    setUser,
    setLoading,
    loginUser,
    logoutUser,
    googleLogin,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default Authprovider;
