import React, { useEffect, useState } from "react";
import { HoverEffect } from "../../../ui/card-hoover";
import img  from '../../../assets/private/bgsld.png'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { RatingStars } from "../../../ui/icons";
import { Link } from "react-router-dom";
export default function ProductGrid(){
  const [products  , setProducts] = useState([])
 
    useEffect(() => {
        // Fetch products from Firestore when the component mounts
        const fetchProducts = async () => {
            try {
                const productsSnapshot = await getDocs(collection(db , 'product'));
                const productsData = productsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const unsubscribe = onSnapshot(collection(db, 'product'), (snapshot) => {
            // Listen for changes in the 'product' collection
            const productsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsData);
        });

        // Unsubscribe from the snapshot listener when component unmounts
        return () => unsubscribe();
    }, []); 

return(
<>
<section className="py-12 bg-white sm:py-16 lg:py-20" style={{paddingTop:'10px'}}>
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Produktet Tona</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Kontrolloni per produktin e deshiruar dhe na kontaktoni per te porositur.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {products.map(product =>(
        <Link to={`/products/${product.id}`}>
        <div className="relative group" key={product.id}>
                <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-[.5rem] sm:max-h-[170px] md:max-h-[207px] lg:max-h-[160px]">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={product.photos[0]} alt="" />
                </div>
                
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                               {product.name}
                                <span className="absolute inset-0" aria-hidden="true" />
                            </a>
                        </h3>
                        <RatingStars/>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">${product.price}</p>
                    </div>
                </div>
            </div>
    </Link>
    ))}

          
        </div>
    </div>
</section>
    
 
  </>
)

}
