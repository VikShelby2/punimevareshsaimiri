import React from "react";

export default function InsightsCard({icon   , wins , name}){

return(
<>
                    {icon}
                    <span className="info">
                        <h3>
                            {wins}
                        </h3>
                    <p>{name}</p>
                    </span>
            </>    
)


}