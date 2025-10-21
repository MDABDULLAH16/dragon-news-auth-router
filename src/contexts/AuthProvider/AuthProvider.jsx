import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
      setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
    const loginUser = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
          toast.success("log out successful");
          setUser(null)
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    logOutUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
