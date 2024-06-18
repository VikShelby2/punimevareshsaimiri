import React from "react";
import CollectionCard from "./Component/card";
export default function CollectionGrid(){
  return(
  <>
  <h2 className="mx-auto mt-4 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-4xl">
          Kataloget tan . Kerkooni produkte ne varsi te deshires tuaj
          </h2>
       
    <div className="w-full flex items-center justify-center">
     
         <CollectionCard/>
         <CollectionCard/>
         <CollectionCard/>
         <CollectionCard/>
   
   </div>  
   </>
  )
}