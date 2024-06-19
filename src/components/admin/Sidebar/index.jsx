import React from "react";
import useLastRoute from "../../../Hook/useLastRoute";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { useBreakpointValue } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
export default function Sidebar({close , click}){
const isMobile = useBreakpointValue({ base: true, sm: false });
const navigate = useNavigate()
    const lastRoute = useLastRoute();
   
    const singOutUser = ()=>{
        signOut(auth);
        navigate('/signin')
      console.log('logged out')
      }


return(
<div className={`sidebar ${close || isMobile ? 'close sdfsfd' : ''}`} style={ close ? {display:'unset'} : {}} >
        <a href="#" className="logo">
            
            <div className="logo-name" />
        </a>
        <ul className="side-menu">
            <li onClick={()=>{click()}} className="holyshit flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg></li>
         <Link to='/dash/home'>  <li className={`${lastRoute ==='home' ? 'active' : ''}`}><a href="#"><i className="bx bxs-dashboard" />Dashboard</a></li></Link>
         <Link to="/dash/product" >   <li className={`${lastRoute ==='product' ? 'active' : ''}`}><a href="#"><i className="bx bx-store-alt" />Products</a></li></Link>
       <Link to="/dash/settings">     <li className={`${lastRoute ==='settings' ? 'active' : ''}`}><a href="#"><i className="bx bx-cog" />Settings</a></li></Link>
        </ul>
        <ul className="side-menu">
            <li>
                <a href="#" className="logout" onClick={()=>{singOutUser()}}>
                    <i className="bx bx-log-out-circle" />
                    Logout
                </a>
            </li>
        </ul>
    </div>


)

}