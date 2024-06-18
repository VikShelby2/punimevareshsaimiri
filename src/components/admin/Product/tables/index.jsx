import React, { useEffect, useState } from "react";
import Table from "./components/table";
import testimg from '../../../../assets/private/profile-1.jpg'
import { db } from "../../../../firebase/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; // Import onSnapshot
export default function ProductTable({userData}){

    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="bottom-data">
                    <div className="orders">
                        <Table currentOrders={currentOrders} userData={userData}/>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-3">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                </span>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="inline-flex mt-2 xs:mt-0">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}   className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                        Prev
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
