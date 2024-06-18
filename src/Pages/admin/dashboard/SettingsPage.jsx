import React from "react"; import {useNavigate} from 'react-router-dom'
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Header from "../../../components/admin/Header";
import Insights from "../../../components/admin/Insights";
import Orders from "../../../components/admin/Orders";
import '../../../assets/private/style.css'
export default function  AdminSettings({isLogged}){   const navigate = useNavigate()
  React.useEffect(()=>{
    if(!isLogged ){
      navigate('/signin')
    }
  },[isLogged])
  
return(
<>
  <Sidebar/>
  <div className="content bg-[#fbfbfb] h-[100vh]" >
  <Navbar/>
  <main>
  <Header/>
  </main>
  </div>
</>

)
}