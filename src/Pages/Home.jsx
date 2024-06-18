import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/public/button.css'
import Features from '../components/Home/Feauters';
import CollectionCard from '../components/Home/Collection';
import CollectionGrid from '../components/Home/Collection';
import ProductGrid from '../components/Home/Product/grid';
import Footer from '../components/Public/Footer';
import Materials from '../components/Home/Feauters/materials';
import FeautersOur from '../components/Home/Feauters/feauters';
import Hero from '../components/Home/Hero';
import Logo from '../assets/public/Untitled_design-removebg-preview.png'
import WhiteLogo from '../assets/public/whitlog.png'
import Stats from '../components/Home/Stats';
import NavBar from '../components/Home/navbar';
export default function Home() {

    const [scrolled , setScrolled] = useState(false)
    const [droped , setDroped] = useState(false)
    const click = true
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
    return (
      <div>
      <div>
     <NavBar click={click}/>
 <Hero/>
 <Stats/>
  <FeautersOur/>
 <ProductGrid/>
<Materials/>
<Footer/>
 </div></div>
    );
  }