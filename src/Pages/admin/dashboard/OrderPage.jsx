import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Header from "../../../components/admin/Header";
import Insights from "../../../components/admin/Insights";
import Orders from "../../../components/admin/Orders";
import '../../../assets/private/style.css'; 
import {useNavigate} from 'react-router-dom'
import { useBreakpointValue } from "@chakra-ui/react";
import OrderCard from "../../../components/admin/Orders/components/card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
export default function  OrderAdmin({isLogged}){ 
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const [orders , setOrders] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "orders"));
            const ordersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(ordersData);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    fetchOrders();
}, []);
  
  
const navigate = useNavigate()
  React.useEffect(()=>{
    if(!isLogged ){
      navigate('/signin')
    }
  },[isLogged])
const [close , setClose] = useState(false)
  const handleClose = () =>{
 setClose(!close)
}
const [insights , setInsights] = useState([{
    name: 'Porosit Totale' , wins : '' ,
     icon:  <i className="bx bx-line-chart" /> 
   } ,
   
   { name: 'Fitimi i Porosive ne web' , wins: '' , icon: <i className="bx bx-dollar-circle" /> }
   ])
return(
<>
  <Sidebar close={close} click={handleClose}/>
  <div className="content bg-[#fbfbfb] h-[100vh]" >
  <Navbar click={handleClose} />
  <main>
  <Header></Header>
  {orders.length > 0 ? (
  orders.map(order => (
    <OrderCard key={order.id} order={order} />
  ))
) : (
  <div>No orders available</div>
)}

  
  </main>
  </div>
</>

)
}