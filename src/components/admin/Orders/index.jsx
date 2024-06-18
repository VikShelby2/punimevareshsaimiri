import React, { useEffect, useState } from "react";
import testimg from '../../../assets/private/profile-1.jpg'

import Reminders from "./components/reminder";
import ProductTable from "../Product/tables";
import Table from "../Product/tables/components/table";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
export default function Orders(){
    const [orders, setOrders] = useState([]);
   

    useEffect(() => {
        // Fetch products from Firestore when the component mounts
        const fetchProducts = async () => {
            try {
                const productsSnapshot = await getDocs(collection(db , 'product'));
                const productsData = productsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrders(productsData);
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
            setOrders(productsData);
        });

        // Unsubscribe from the snapshot listener when component unmounts
        return () => unsubscribe();
    }, []); 



return(
<div className="bottom-data">
                <div className="orders">
                    <div className="header">
                        <i className="bx bx-receipt" />
                        <h3>Produkte te reja</h3>
                     
                    </div>
                    
                    <Table currentOrders={orders.slice(0,5)} />
                </div>

                { /* Reminders */ }
              

                { /* End of Reminders*/ }

            </div>


)
}