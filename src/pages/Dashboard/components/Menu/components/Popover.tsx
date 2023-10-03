import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  Button,
  Text,
  // PopoverFooter,
  // PopoverAnchor,
} from '@chakra-ui/react'
import { getUserLocalStorage } from '../../../../../contexts/utils/localStorage';

interface PopUserProps {
  children?: React.ReactNode;
}

export function PopoverUser({ children }: PopUserProps) {
  const user = getUserLocalStorage()
  return (
    <Popover placement="right-end">
      <PopoverTrigger>
        <Button w="2rem" bg="transparent" _hover={{ bg: "none" }}>{children}</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverArrow bg='blue.800' />
        <PopoverCloseButton />
        <PopoverHeader pt={4} fontWeight='bold' fontSize="lg" border='0'>
          Dados do usuário!
        </PopoverHeader>
        <PopoverBody pb={4}>
          <Text fontWeight='bold' display="flex" gap="0.5rem">
            Nome: <Text fontWeight='normal'>{user?.name}
          </Text></Text>
          <Text fontWeight='bold' display="flex" gap="0.5rem">
            E-mail: <Text fontWeight='normal'>{user?.email}
          </Text></Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
