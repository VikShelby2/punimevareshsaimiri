import React from "react";
import Breadcom from "./components";

export default function Header({children}){

return(
<div className="header">
                <Breadcom/>
                {children}
            </div>
)
}