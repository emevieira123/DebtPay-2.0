import { Box, Text } from "@chakra-ui/react";
import { RiArrowRightSLine } from 'react-icons/ri';
import { TextDebtStatus } from "../DebtStatus/TextDebtStatus";

interface DebtCardProps {
  nameStore: string;
  nameProduct: string;
  price: string;
  status: string;
  onClick?: () => void;
}

export function DebtCard(props: DebtCardProps) {
  return (
    <Box
      h="5rem"
      bg="#1F213A"
      borderRadius="10px"
      color="#FFFFFF"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr 0.01fr"
      alignItems="center"
      cursor="pointer"
      transition="all 0.35s"
      _hover={{ bg: "#2A2D52" }}
      onClick={props.onClick}
    >
      <Text textAlign="center">{props.nameStore}</Text>
      <Text textAlign="center">{props.nameProduct}</Text>
      <Text textAlign="center">R$ {props.price}</Text>

      {
        props.status === "pago"
          ? <TextDebtStatus status="Pago" />
          : (
            props.status === "pendente"
              ? <TextDebtStatus status="Pendente" />
              : (
                props.status === "andamento"
                ? <TextDebtStatus status="Andamento" />
                : <TextDebtStatus status="Sem Valor" />
              )
          )
      }
      <Text textAlign="center" paddingRight="1rem" color="#7C5DF9"><RiArrowRightSLine /></Text>
    </Box>
  );
}
