import { useToast , Button } from '@chakra-ui/react'

export function ToastExample({tittle , des , status }) {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: {tittle},
            description: {des},
            status: {status},
            duration: 4000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }