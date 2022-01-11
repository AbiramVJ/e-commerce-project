import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
//PAGES
import HomePage from "./pages/homepage/HomePage";
import SignInSignUp from "./pages/SsignIn-and-signUp/SignInSignUp";
import Shop from "./pages/shop/shop";

//Components

import Header from "./components/heder/Header";

//auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [user, setUser] = useState({
    currentUser: "",
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setUser({ currentUser: userAuth });
    });
  }, []);

  return (
    <>
      <Router>
        <Header currentUser={user.currentUser} />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/Signin" element={<SignInSignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
