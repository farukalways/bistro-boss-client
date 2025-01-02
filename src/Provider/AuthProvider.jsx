import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(email, password)
  };

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  };

  const updateUserProfile = (name, photo) => {

   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe()
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;