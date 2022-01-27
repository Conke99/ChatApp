import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [messages, setMessages] = useState([]);

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
  // catching users from DB
  useEffect(() => {
    const fetchUsers = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((item) => {
        setUser([...user, item.data()]);
      });
    };
    fetchUsers();
  }, []);

  // showing messages
  // showing messages

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      console.log("MESSAGES: ", messages);
      setMessages(messages);
    };

    fetchMessages();
  }, []);
  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const q = query(collection(db, "messages"));
  //     const unsubscribe = await onSnapshot(q, (querySnapshot) => {
  //       querySnapshot.forEach((doc) => setMessages([messages, doc.data()]));
  //     });
  //   };
  //   fetchMessages();
  // }, []);

  // i dont know what this is
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
    user,
    messages,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
