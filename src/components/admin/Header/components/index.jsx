import React from "react";
import useLastRoute from "../../../../Hook/useLastRoute";

export default function Breadcom(){
    const lastRoute = useLastRoute();
    const capitalizeFirstLetter = (string) => {
        if (!string) return ''; // handle empty string or undefined input
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
    const routeName = capitalizeFirstLetter(lastRoute)  
    

return(
<div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                                Dashboard
                            </a></li>
                        /
                        <li><a href="#" className="active">{routeName}</a></li>
                    </ul>
                </div>
)
}