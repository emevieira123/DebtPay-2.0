import { Box, Button, Skeleton, Text } from "@chakra-ui/react";
import useDrawerRegisterDebt from "../../../../hooks/useRegisterDebt";
import { IoMdAddCircle } from 'react-icons/io';
import { IoAlertCircleOutline } from "react-icons/io5";
import { StatusPopover } from "../Popover/StatusPopover";

export function Header(props: { countDebt: number, loading?: boolean }) {
  const { show } = useDrawerRegisterDebt();

  return (
    <Box w="80%" display="flex" flexDirection="column">
      <Box h="5rem" display="flex" alignItems="center" justifyContent="space-between" marginBottom="2rem">
        <Box color="#FFF">
          <Text fontSize="2rem" fontWeight="bold">Débitos</Text>
          {
            props.loading
              ? <Skeleton height='20px' width="200px" startColor='gray.600' endColor="#2A2D52" borderRadius="5px" />
              : (
                <Text>
                  {
                    props.countDebt > 1
                      ? `Existem ${props.countDebt} débitos no total`
                      : `Existe ${props.countDebt} débito no total`
                  }
                </Text>
              )
          }
        </Box>
        <Box>
          <Button
            bg="#7C5DF9"
            _hover={{ bg: "#9278FF" }}
            color="#FFF"
            borderRadius="20px"
            onClick={show}
          >
            <IoMdAddCircle size="24" />
            <Text marginLeft="0.5rem">Novo Débito</Text>
          </Button>
        </Box>
      </Box>

      <Box mb="1rem" p="0.5rem 0" bg="gray.700" color="#FFF" display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr 0.01fr" alignItems="center" borderRadius="10px">
        <Text textAlign="center" fontWeight="bold">Empresa</Text>
        <Text textAlign="center" w="90%" fontWeight="bold">Produto</Text>
        <Text textAlign="center" w="90%" fontWeight="bold">Valor Total</Text>
        <Text display="flex" gap="0.5rem" alignItems="center" justifyContent="center" fontWeight="bold" w="180px">
          Status
          <StatusPopover>
            <Box cursor="pointer">
              <IoAlertCircleOutline size={16} />
            </Box>
          </StatusPopover>
        </Text>
        <Text textAlign="center" paddingRight="1rem" color="#7C5DF9"></Text>
      </Box>

    </Box>
  );
}
