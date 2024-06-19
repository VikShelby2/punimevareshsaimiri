import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import NotFound from "./Pages/NotFound";
import SignIn from "./components/auth/signup";

import { useEffect, useState } from "react";
import { auth , db } from "./firebase/firebase";
import {
  collection,
  getDocs,
  query,
  // , where
} from "firebase/firestore";
import Loading from "./components/Public/Loading";


import AddCreds from "./components/auth/addcreds";
import MainAdmin from "./Pages/admin/dashboard";
import Home from "./Pages/Home";
import AdminProduct from "./Pages/admin/dashboard/ProductPage";
import AdminSettings from "./Pages/admin/dashboard/SettingsPage";
import ProductList from "./Pages/ProductList";
import Example from "./components/Public/Grid/preview";
import ProductOverview from "./Pages/ProductOverview";
import ContactPage from "./Pages/ContactPage";
import OrderPage from "./Pages/OrderProduct";
import OrderAdmin from "./Pages/admin/dashboard/OrderPage";





export default function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
 
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
  setLoading(true);
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
      await getDocs(query(collection(db, "Users")))
        .then((res) => {
          if (res.docs.length === 0) {
            navigate("/signIn/addCreds");
            setLoading(false);
          } else {
            let userResArr = [];
            res.docs.map((doc) => {
              if (doc.data().uid === user.uid) {
                userResArr.push({ id: doc.id, ...doc.data() });
              }
            });
            if (!userResArr.length) {
              navigate("/signIn/addCreds");
              setLoading(false);
            } else {
              setUserData(userResArr);
              setIsLogged(true);
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setIsLogged(false);
      setLoading(false);
      
    }
  });
}, [isLogged , navigate]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
console.log(userData[0])
  const isMobile = width < 768;
	
	console.log(isLogged)
	
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <>
        
          <Routes>
          <Route
            path="/"
            element={ <Home/>}
          ></Route>
          <Route path="/dash/home" element={ isLogged ?   <>
          <MainAdmin userData={userData} isLogged={isLogged}/></> : null}/>
          <Route path="/dash/product" element={ isLogged ?   <>
          <AdminProduct userData={userData} isLogged={isLogged} /></> : null}/>
         
          <Route path="/dash/settings" element={ isLogged ?   <>
          <AdminSettings userData={userData} isLogged={isLogged}/></> : null}/>
              
          <Route path="/dash/order" element={ isLogged ?   <>
          <OrderAdmin userData={userData} isLogged={isLogged}/></> : null}/>
            <Route
              path="/signIn"
              element={
                <SignIn
                  setLogged={setIsLogged}
                  isLogged={isLogged}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              path="/signIn/addCreds"
           
              element={
                 !isLogged ? (
                  <AddCreds
                    setLoading={setLoading}
                    user={user}
                    setLogged={setIsLogged}
                  />
                ) : (
                  <NotFound />
                )
              }
            />

            <Route path="/products" element={<ProductList/>}/>
            <Route path="/contact-us" element={<ContactPage/>}/>
              
            <Route path="/products/:productId" element={<ProductOverview/>}/>
            <Route path='/order/:productId' element={<OrderPage/>}/>
            <Route path="*" element={ <NotFound />}/>
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}