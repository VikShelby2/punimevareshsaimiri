import React, { useState } from "react";  import {useNavigate} from 'react-router-dom'
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Header from "../../../components/admin/Header";
import Insights from "../../../components/admin/Insights";
import Orders from "../../../components/admin/Orders";
import '../../../assets/private/style.css'
import ProductInsights from "../../../components/admin/Product/insighst";
import ProductTable from "../../../components/admin/Product/tables";
import ProductFormAdd from "../../../components/admin/Product/add";
export default function  AdminProduct({userData , isLogged}){ const navigate = useNavigate()
  React.useEffect(()=>{
    if(!isLogged ){
      navigate('/signin')
    }
  },[isLogged])
console.log(userData[0])
const [close , setClose] = useState(false)
  const handleClose = () =>{
 setClose(!close)
}
const [insights , setInsights] = useState([{
  name: 'Shitjet Totale' , wins : '' ,
   icon: <i className="bx bx-calendar-check" />
 } ,
 
 { name: 'Porosit totale' , wins: '' , icon: <i className="bx bx-dollar-circle" /> }
 ])
 
return(
<>
  <Sidebar close={close} click={handleClose}/>
  <div className="content bg-[#fbfbfb] h-[100vh]" >
  <Navbar  click={handleClose}/>
  <main>
  <Header/>
   <div className="w-full flex items-center justify-end mt-8">
   <ProductFormAdd userData={userData} />
  </div>
  
  <ProductInsights insights={insights}/>
  <ProductTable userData={userData}/>
 
  </main>
  </div>
</>

)
}