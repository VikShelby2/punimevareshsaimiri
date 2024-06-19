import React, { useState } from "react";
import InsightsCard from "./card/card";

export default function ProductInsights({insights}){



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