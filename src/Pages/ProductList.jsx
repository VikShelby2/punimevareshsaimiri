import React, { useEffect, useState } from "react";
import Tabs from "../components/Public/Tabs";
import ProductGrid from "../components/Home/Product/grid";
import Footer from "../components/Public/Footer";
import { Link } from "react-router-dom";
import NavBar from "../components/Home/navbar";

export default function ProductList(){

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
  <div className="mt-[3rem] flex items-center justify-center w-full">
  <Tabs/>
  </div>
  
  <ProductGrid />
  <Footer/>
</>
)

}