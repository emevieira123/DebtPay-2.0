import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Box,
  Text,
  // PopoverAnchor,
} from '@chakra-ui/react'

interface PopoverProps {
  children: React.ReactNode;
}

export function StatusPopover({ children }: PopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent minW="350px" color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverArrow bg='blue.800' />
        <PopoverCloseButton />
        <PopoverHeader pt={4} fontWeight='bold' border="0">Descrição dos status</PopoverHeader>
        <PopoverBody>
          <Flex flexDirection="column" gap="1rem" mb={4}>
            <Flex align="center" gap="0.5rem">
              <Box w="10px" h="10px" bg="#DEE0F6" borderRadius="50%"></Box>
              <Text>Ainda não existe parcelas cadastradas</Text>
            </Flex>
            <Flex align="center" gap="0.5rem">
              <Box w="10px" h="10px" bg="orange" borderRadius="50%"></Box>
              <Text>Ainda não há nenhum parcela paga</Text>
            </Flex>
            <Flex align="center" gap="0.5rem">
              <Box w="10px" h="10px" bg="#0AAEFF" borderRadius="50%"></Box>
              <Text>Já possui 1 ou mais parcelas pagas</Text>
            </Flex>
            <Flex align="center" gap="0.5rem">
              <Box w="10px" h="10px" bg="#28D49E" borderRadius="50%"></Box>
              <Text>Todas as parcelas já foram pagas</Text>
            </Flex>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
