import React, { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Header from "../../../components/admin/Header";
import Insights from "../../../components/admin/Insights";
import Orders from "../../../components/admin/Orders";
import '../../../assets/private/style.css';  import {useNavigate} from 'react-router-dom'
export default function  MainAdmin({isLogged}){ const navigate = useNavigate()
  React.useEffect(()=>{
    if(!isLogged ){
      navigate('/signin')
    }
  },[isLogged])
const [close , setClose] = useState(false)
  const handleClose = () =>{
 setClose(!close)
}
return(
<>
  <Sidebar close={close}/>
  <div className="content bg-[#fbfbfb] h-[100vh]" >
  <Navbar click={handleClose} />
  <main>
  <Header></Header>
  <Insights/>
  <Orders/>
  
  </main>
  </div>
</>

)
}