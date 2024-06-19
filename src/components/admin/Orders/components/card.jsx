import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure , Button
  } from '@chakra-ui/react'

function BasicUsage({order}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Shiko Mesazhin</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Mesazhi i lene</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {order.message}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default function OrderCard({order}){
 
 return(
    <div className="w-full bg-white rounded-[20px] grid grid-cols-1 items-center my-5">
     <div className="mx-5 flex items-center justify-between p-[1rem] ">
         <h1>Porosia nga : {order.name}</h1>
         <h1>Numri i tel: {order.phoneNumber}</h1>
         <h1>Emaili : {order.email}</h1>
     </div>
     <div className="mx-5 flex items-center justify-between p-[1rem] pt-0" >
         <h1>Ka porositur produktin: {order.product}</h1>
         <h1>Sasia:{order.quantity}</h1>
         <BasicUsage order={order}/>
     </div>
    </div>
 )
 
}