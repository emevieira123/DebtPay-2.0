import { Text } from "@chakra-ui/react";
import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoEllipsisHorizontalCircle } from 'react-icons/io5';

export function TextDebtStatus({status}: {status: string}) {
  return (
    <Text
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="120px"
      h="3rem"
      marginLeft="3rem"
      borderRadius="5px"
      color={
        status === "Pago"
        ? "#28D49E"
        : (
          status === "Pendente"
          ? "orange"
          : (
            status === "Andamento"
            ? "#0AAEFF"
            : "#DEE0F6"
          )
        )
      }
      bg={
        status === "Pago"
        ? "rgba(40, 212, 158, 0.10)"
        : (
          status === "Pendente"
          ? "rgba(250, 140, 6, 0.10)"
          : (
            status === "Andamento"
            ? "rgba(64, 123, 255, 0.10)"
            : "rgba(222, 224, 246, 0.10)"
          )
        )
      }
    >
      {
        status === "Pago"
        ? <AiOutlineCheckCircle style={{ marginRight: "0.5rem" }} />
        : (
          status === "Pendente"
          ? <AiOutlineClockCircle style={{ marginRight: "0.5rem" }} />
          : (
            status === "Andamento"
            ? <IoEllipsisHorizontalCircle style={{ marginRight: "0.5rem" }} />
            : <AiOutlineCloseCircle style={{ marginRight: "0.5rem" }} />
          )
        )
      }
      {status}
    </Text>
  );
}
