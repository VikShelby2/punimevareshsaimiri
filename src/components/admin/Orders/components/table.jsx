import React, { useState } from "react";
import testimg from '../../../../assets/private/profile-1.jpg'
import { useBreakpointValue } from "@chakra-ui/react";

export default function Table({props}) {
const isMobile = useBreakpointValue({ base: true, sm: false });
    const [orders , setOrders] = useState([
        { name:'John Dow' , img: testimg , date:'14-08-2023' , status: 'E shitur'} ,
        { name:'John Dow' , img: testimg , date:'14-08-2023' , status: 'Ne pritje'} ,
        { name:'John Dow' , img: testimg , date:'14-08-2023' , status: 'Ne pritje'} ,
        
      ])
    return(
        <table>
        <thead>
                      <tr>
                          <th>User</th>
                          <th>Order Date</th>
                          <th>Status</th>
                      </tr>
                  </thead>
        <tbody>
         { orders.map(arr =>(
            <tr key={arr.name} >
            <><td>
                                    <img src={arr.img} />
                                    <p>{arr.name}</p>
                                </td>
                                <td>{arr.date}</td>
                                <td><span className="status completed">{arr.status}</span></td></>
            </tr>
         ))}
        </tbody>          

</table>
    )
}