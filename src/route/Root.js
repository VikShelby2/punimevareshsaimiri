import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "./router";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { useRouteNavigation } from "../Hook/useRoute";



export default function Root(){

  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        await getDocs(query(collection(db, "Users")))
          .then((res) => {
            if (res.docs.length === 0) {
             
              setLoading(false);
            } else {
              let userResArr = [];
              res.docs.map((doc) => {
                if (doc.data().uid === user.uid) {
                  userResArr.push({ id: doc.id, ...doc.data() });
                }
              });
              if (!userResArr.length) {
               
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
          });
      } else {
        setIsLogged(false);
        setLoading(false);
        
      }
    });
  }, [isLogged ]);
console.log(userData)
    const router = createBrowserRouter([
    
        ...AuthRoute(userData , isLogged , setIsLogged  , setLoading ),
      
       ])
       
       return (
    
        <RouterProvider router={router} />
    
      
      
      
      )
 
}