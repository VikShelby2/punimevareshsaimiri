import React from "react";
import { Modal, ModalBody,useBreakpointValue, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay ,Button  } from "@chakra-ui/react";
export default function ModalProduct({children , isOpen, onOpen, onClose , header , handleFormSubmit}){
  const isMobile = useBreakpointValue({ base: true, sm: false });

return(
<Modal
closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={isMobile ? 'full' : 'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              {children}
          </ModalBody>
          <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleFormSubmit}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

)
}