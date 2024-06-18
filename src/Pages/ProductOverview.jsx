import React, { useEffect, useState } from "react";
import Example from "../components/Public/Grid/preview";
import Footer from "../components/Public/Footer";
import  {Link} from "react-router-dom" 
import NavBar from "../components/Home/navbar";
export default function ProductOverview(){
    const [scrolled , setScrolled] = useState(false)
    const [droped , setDroped] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          setScrolled(scrollPosition > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
return(
<>
<NavBar/>
<Example/>
<Footer/>
</>


)
}