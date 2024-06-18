import React from "react";

export default function Navbar({click}){

return(
<nav>
            <i className="bx bx-menu" onClick={()=>{click()}}/>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button className="search-btn" type="submit" ><i className="bx bx-search" /></button>
                </div>
            </form>
            
        </nav>

)

}