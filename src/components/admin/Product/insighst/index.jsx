import React, { useState } from "react";
import InsightsCard from "./card/card";

export default function ProductInsights({props}){

const [insights , setInsights] = useState([{
 name: 'Shitjet Totale' , wins : '' ,
  icon: <i className="bx bx-calendar-check" />
} ,

{ name: 'Porosit totale' , wins: '' , icon: <i className="bx bx-dollar-circle" /> }
])


return(
<ul className="insights" >
{insights.map(data =>(
<li key={data.name}>
 <InsightsCard name={data.name} wins={data.wins} icon={data.icon}/>
 </li>
))}
</ul>

)

}