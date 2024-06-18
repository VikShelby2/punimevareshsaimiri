
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"
import React from "react"


export function AlertDialogExample({ButtonClick}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Hiqe 
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Hiq produktin
                </AlertDialogHeader>
  
              <AlertDialogBody>
              Je i sigurt? Pas ksaj te dhenat e hequra nuk meren dot mbrapsht
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Anullo
                </Button>
                <Button colorScheme='red' onClick={() => {onClose() ;  ButtonClick()} } ml={3}>
                 Hiq
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }