import React from "react";
import useLastRoute from "../../../Hook/useLastRoute";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { useBreakpointValue } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
export default function Sidebar({close}){
const isMobile = useBreakpointValue({ base: true, sm: false });
const navigate = useNavigate()
    const lastRoute = useLastRoute();
   
    const singOutUser = ()=>{
        signOut(auth);
        navigate('/signin')
      console.log('logged out')
      }


return(
<div className={`sidebar ${close || isMobile ? 'close' : ''}`}>
        <a href="#" className="logo">
            
            <div className="logo-name" />
        </a>
        <ul className="side-menu">
            <li className={`${lastRoute ==='home' ? 'active' : ''}`}><a href="#"><i className="bx bxs-dashboard" /><Link to='/dash/home'>Dashboard</Link></a></li>
            <li className={`${lastRoute ==='product' ? 'active' : ''}`}><a href="#"><i className="bx bx-store-alt" /><Link to="/dash/product" >Products</Link></a></li>
            <li className={`${lastRoute ==='settings' ? 'active' : ''}`}><a href="#"><i className="bx bx-cog" /><Link to="/dash/settings">Settings</Link></a></li>
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