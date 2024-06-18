import { Button, FormControl, FormLabel, Input, Select, Modal,useBreakpointValue, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import { db, uploadPhotoAndStoreUrl } from "../../../../firebase/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import '../../../../assets/private/product.css'
import { ToastExample } from "../../Toast/index.jsx";
import axios from "axios"; // Use
const ProductFormAdd = ({ userData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    price: '',
    priceat: '',
    status: '' ,
    ofert:''// Initialize status field
  });
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const [shareError, setShareError] = useState(null);

  const handleInstagramShare = async () => {
    try {
      // User Access Token obtained from authentication
      const userAccessToken = "YOUR_USER_ACCESS_TOKEN_HERE";

      // Prepare content to be shared (e.g., product name, description, and image URL)
      const content = {
        caption: `${projectData.name}: ${projectData.description}`,
        media_url: '<URL of the product image>',
      };

      // Make a POST request to Instagram's media endpoint to upload the image
      const uploadResponse = await axios.post(
        `https://graph.instagram.com/me/media?access_token=${userAccessToken}`,
        content
      );

      // Check if the upload was successful
      if (uploadResponse.data.id) {
        // If successful, share the uploaded media
        await axios.post(
          `https://graph.instagram.com/me/media_publish?media_id=${uploadResponse.data.id}&access_token=${userAccessToken}`
        );

        // Reset any previous errors
        setShareError(null);
        // Display success message or handle success scenario
        console.log("Product shared successfully on Instagram!");
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      // Handle errors
      console.error("Error sharing product on Instagram:", error.message);
      setShareError(error.message);
    }
  };
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (userData && userData.length > 0 && userData[0].id) {
      setProjectData({ ...projectData, userId: userData[0].id });
    }
  }, [userData]);

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
      ofert: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const projectCollection = collection(db, 'product');
    const photoUrls = await Promise.all(files.map(photo => uploadPhotoAndStoreUrl(userData[0].uid, photo)));
    await addDoc(projectCollection, {
      ...projectData,
      status: projectData.status,
      photos: photoUrls
    });
     <ToastExample tittle={'Sukses'} des={'Produkti u shtua me sukses'} status={'success'}/> 
    onClose();
  };

  return (
    <>
      <Button color={"black"} backgroundColor={"white"} onClick={onOpen}>Shto Produkt</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={isMobile ? 'full' : 'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Krijo Produkt</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                            <button onClick={() => { handleDelete(index) }} className='ovl-pr-btn'>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleFormSubmit}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductFormAdd;
