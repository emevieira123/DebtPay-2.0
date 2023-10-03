/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Button } from "@chakra-ui/react";
import { MoneyFormat } from "../DebtDescription";
import { ModalRegisterParcelas } from "../Modal/ModalRegisterParcelas";
import useModalParcelas from "../../../../hooks/useModalParcelas";
import { usePutParcela } from "../../../../hooks/usePutParcela";

interface TableDescriptionProps {
  dataSource: any[];
}

export function TableDebtDescription({ dataSource }: TableDescriptionProps) {
  const { show } = useModalParcelas();
  const { mutate: updateParcela } = usePutParcela();

  const QtdePago = dataSource?.filter((item) => item.status === true)?.length;
  const TotalPago = dataSource?.[0]?.valor_parcela * QtdePago;

  function onSubmit(parcelaId: string, status: boolean) {
    updateParcela({ parcelaId, status });
  }

  return (
    <Box>
      <Box overflowY="auto" bg="#232A45" h="40%" borderRadius="10px 10px 0 0" mt="2rem">
        <TableContainer>
          <Table variant='unstyled'>
            <Thead position="sticky" top={0} bg="#141625">
              <Tr>
                <Th color="#FFF">Nº da Parcela</Th>
                <Th color="#FFF">Valor da Parcela</Th>
                <Th color="#FFF">Vencimento</Th>
                <Th color="#FFF">Status</Th>
                <Th color="#FFF">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                dataSource?.map((p, index) => {
                  return (
                    <Tr key={p.id}>
                      <Td>{String(index + 1).padStart(2, '0')}</Td>
                      <Td>{`R$ ${p.valor_parcela <= 0 ? '-' : MoneyFormat(p.valor_parcela)}`}</Td>
                      <Td>{`Dia ${p.dia_vencimento <= 0
                        ? '-'
                        : String(p.dia_vencimento).padStart(2, '0')}`}</Td>
                      <Td color={p.status === true ? "#28D49E" : "orange"}>
                        {p.status === true ? "Pago" : "Pendente"}
                      </Td>
                      <Td>
                        {
                          p.status === true
                          ? <Button h="1.5rem" colorScheme="gray" onClick={() => onSubmit(p.id, !p.status)}>Desfazer</Button>
                          : <Button h="1.5rem" colorScheme="blue" onClick={() => onSubmit(p.id, !p.status)}>Pagar</Button>
                        }
                      </Td>
                    </Tr>
                  );
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        bg="#141625"
        h="4rem"
        borderRadius="0 0 10px 10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="0 2rem"
      >
        <Text>Total pago</Text>
        <Text fontSize="2xl" fontWeight="bold">R$ {!TotalPago ? "-" : MoneyFormat(TotalPago)}</Text>
      </Box>

      {
        (dataSource?.length === 0) &&
        <Box display="flex" justifyContent="center" mt="3rem">
          <Button colorScheme="blue" onClick={show}>Cadastrar Parcelas</Button>
        </Box>
      }

      <ModalRegisterParcelas />
    </Box>
  );
}
