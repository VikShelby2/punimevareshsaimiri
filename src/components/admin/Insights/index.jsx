import React, { useState } from "react";
import InsightsCrad from "./components/card";

export default function Insights({props}){

const [insights , setInsights] = useState([{
 name: 'Shitjet Totale' , wins : '' ,
  icon: <i className="bx bx-calendar-check" />
} ,
{ name:'Shikimet e faqes' , wins: '',
  icon: <i className="bx bx-show-alt" />
} ,
{ name: 'Kerkime' , wins: '' , icon: <i className="bx bx-line-chart" /> } ,
{ name: 'Porosit totale' , wins: '' , icon: <i className="bx bx-dollar-circle" /> }
])


return(
<ul className="insights" >
{insights.map(data =>(
<li key={data.name}>
 <InsightsCrad name={data.name} wins={data.wins} icon={data.icon}/>
 </li>
))}
</ul>

)

}