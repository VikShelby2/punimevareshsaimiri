import { collection, getDocs, where, query, updateDoc, doc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db, uploadPhotoAndStoreUrl } from "../../../../../firebase/firebase";
import { useDisclosure  } from '@chakra-ui/react';
import { Button, FormControl, FormLabel, Input, Select, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react";
import ModalProduct from "../../../Modals";
import { AlertDialogExample } from "../../../Alert.jsx/alert";
import { connectStorageEmulator } from "firebase/storage";
import { ToastExample } from "../../../Toast";

export default function Table({ currentOrders  , userData}) {
    const [selected, setSelected] = useState(null);
    const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [projectData, setProjectData] = useState({
    name: selected ? selected.name : '',
    description: '',
    price: '',
    priceat: '',
    status: '' ,
    ofert:'' , 

  });
  
  const handleInputChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatusChange = (e) => {
    setProjectData({
      ...projectData,
      status: e.target.value,
    });
  };
  const handleStatusChangeOfert = (e) => {
    setProjectData({
      ...projectData,
      status: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleUpdate = async (order) => {
        setSelected(order);
        try {
            setProjectData({
                name: order.name,
                description: order.description, // Assuming the order object has a description field
                price: order.price, // Assuming the order object has a price field
                priceat: order.priceat, // Assuming the order object has a priceat field
                status: order.status,
                ofert: order.ofert 
               
            });
        
          

            onOpen(); 
           
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };
   
    const handleOnUpdate = async() =>{
      const collectionPro = collection(db , 'product')
      const specPro = doc( collectionPro ,selected.id  )
      const photoUrls = await Promise.all(files.map(photo => uploadPhotoAndStoreUrl(userData[0].uid, photo)));
       photoUrls.push(...selected.photos)
      await updateDoc(specPro, { 
      ...projectData,
      status: projectData.status,
      photos: photoUrls
      });
      <ToastExample tittle={'Sukses'} des={'Produkti u ndryshua me sukses'} status={'success'}/> 
      onClose()
    }
    const shareOnInstagram = (product) => {
      const shareText = `${product.name}\n${product.description}\nPrice: ${product.price}`;
      const shareUrl = `https://www.instagram.com/`;
    
      // Copy shareText to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Product details copied to clipboard. Now paste them in your Instagram post.');
      }, (err) => {
        console.error('Failed to copy text to clipboard', err);
      });
    
      // Open Instagram
      window.open(shareUrl, '_blank');
    };
    console.log(selected ? selected.photos: '')
    const handleDelete = async (projectId) => {
        try {
            const projectsCollection = collection(db, 'product');
            const specificDocument = doc(projectsCollection, projectId);

            
                if (projectId) {
                    await deleteDoc(specificDocument);
                }
            

          
        } catch (error) {
            console.error('Error deleting project:', error.message);
        }
    };

   console.log(projectData.name)

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Actions</th> {/* Add a new column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((order) => (
                            <tr key={order.id} style={{ borderRadius: ".5rem" }} >
                                <td >
                                    <img style={{ borderRadius: ".5rem" }} src={order.photos[0]} alt={order.name} />
                                    <p>{order.name}</p>
                                </td>
                                <td onClick={() => handleUpdate(order)}><button className="ovl-pr-btn">Edito</button></td>
                                <td><span className="status completed">{order.status}</span></td>
                                <td>
                                 <AlertDialogExample ButtonClick={() => handleDelete(order.id)} />
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div> 
            
            <ModalProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={'Edito Product'} handleFormSubmit={handleOnUpdate}>
                {selected && (
                    <div>
                    <FormControl paddingBottom={15}>
              <FormLabel>Emri Produktit</FormLabel>
              <Input type="text" name="name" value={projectData.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pershkrimi</FormLabel>
              <Textarea name="description" value={projectData.description} onChange={handleInputChange} />
            </FormControl>
            <div className="mt-4 flex items-center justify-center gap-4">
              <FormControl paddingBottom={15}>
                <FormLabel>Cmimi i Shitjes</FormLabel>
                <Input type="number" name="price" value={projectData.price} onChange={handleInputChange} />
              </FormControl>
              <FormControl paddingBottom={15}>
                <FormLabel>Cmimi i Blerjes</FormLabel>
                <Input type="number" name="priceat" value={projectData.priceat} onChange={handleInputChange} />
              </FormControl>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <FormControl paddingBottom={15}>
                <FormLabel>Statusi</FormLabel>
                <Select name="status" value={projectData.status} onChange={handleStatusChange} placeholder='Select option'>
                  <option value='i shitur'>i shitur</option>
                  <option value='ne gjendje'>ne gjendje</option>
                </Select>
              </FormControl>
              <FormControl paddingBottom={15}>
                <FormLabel>Ofert</FormLabel>
                <Select name="status" value={projectData.ofert} onChange={handleStatusChangeOfert} placeholder='Select option'>
                 <option value='0%'>0%</option>   
                 <option value='10%'>10%</option>
                  <option value='20%'>20%</option>
                  <option value='30%'>30%</option>
                  <option value='40%'>40%</option>
                  <option value='50%'>50%</option>
                  <option value='60%'>60%</option>
                  <option value='70%'>70%</option>
                  <option value='90%'>80%</option>
                  <option value='100%'>100%</option>
               
                
                </Select>
              </FormControl>
            </div>
            <FormControl mt={4}>
              {files.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {previews.map((preview, index) => (
                    <div className='pr-gr' key={index}>
                      <div className='pr-in-gr'>
                        <div className='test'>
                          <img src={preview} alt={`preview ${index}`} style={{
                            position: 'absolute',
                            zIndex: '1',
                            display: 'block',
                            maxWidth: '100%',
                            maxHeight: '100%'
                          }} />
                        </div>
                        <div className='ovl-pr-gr'>
                          <div className='ovl-pr-div'>
                            <button onClick={() => { handleDeleteFile(index) }} className='ovl-pr-btn'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </button>
                          </div>
                          <span className='ovl-pr-spn'>
                            <span className='ovl-pr-spn-sc'></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='pr-up-gr'>
                    <div className='pr-up-div'>
                      <div className='pr-up-gri'>
                        <button className='pr-up-btn' onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('dropzone-file').click();
                        }}>
                          <span className='pr-up-spn'>Upload</span>
                        </button>
                        <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
                      </div>
                      <div className='pr-up-gri-src'>
                        <button className='pr-up-btn-src'>
                          <span className='pr-up-spn-src'>Select File</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 shadow-sm border-dashed rounded-lg cursor-pointer bg-[#fdfdfd] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mb-[.3rem] fill-white text-[#8c52fe]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        <div className='flex items-center justify-center gap-3'>
                          <div className='pr-up-gri' style={{ fontSize: '.75rem', fontWeight: '650' }}>
                            <button className='pr-up-btn' onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('dropzone-file').click();
                            }}>
                              <span className='pr-up-spn text-sm'>Upload</span>
                            </button>
                          </div>
                          <div className='pr-up-gri' style={{ fontSize: '.75rem', fontWeight: '650' }}>
                            <button className='pr-up-btn-src'>
                              <span className='pr-up-spn-src text-sm'>Select File</span>
                            </button>
                          </div>
                        </div>
                        <p className="text-xs mt-[.15rem] text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
                    </label>
                  </div>
                </div>
              )}
            </FormControl>
          
                    </div>
                )}
            </ModalProduct>
        </>
    );
}
