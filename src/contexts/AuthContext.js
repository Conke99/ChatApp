import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, getDocs, query } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // users can Register
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // users can Login
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // sending users in DB
  function addUserName(name) {
    return addDoc(collection(db, "users"), {
      user: name,
    });
  }
  // ne radi
  // async function readUserName() {
  //   const user = await getDocs(collection(db, "users"));
  // }

  // radi ali ne renderuje

  useEffect(() => {
    const fetchUsers = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((item) => {
        // console.log(item.data());
        setUsers([...users, item.data()]);
      });
    };
    fetchUsers();
  }, []);
  // console.log(users);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    addUserName,
    users,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
