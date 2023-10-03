/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Link, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { useDebtState } from "../../../../hooks/useDebtState";
import { RiArrowLeftSLine } from 'react-icons/ri';
import { TextDebtStatus } from "../DebtStatus/TextDebtStatus";
import { DescriptionDebtInfo } from "./DescriptionDebtInfo";
import useGetDebtDescription from "../../../../hooks/useGetDebtDescription";
import { TableDebtDescription } from "../Table/TableDebtDescription";

export function MoneyFormat(value: any) {
  return Number(value).toFixed(2).replace('.', ',');
}

export function DebtDescription() {
  const { debtId, setOpen } = useDebtState();
  const { data: DebtDescriptionData, isLoading } = useGetDebtDescription(debtId);

  const valorParcela = DebtDescriptionData?.parcelas
    ?.slice(0, 1)
    .map((parce: any) => parce.valor_parcela);

  const totalParcelas = DebtDescriptionData?.parcelas?.map(
    (parce: any) => parce.valor_parcela,
  ).length;

  const parcelasPagas = DebtDescriptionData?.parcelas?.filter(
    (parce: any) => parce.status === true,
  ).length;

  const diaVencimento = DebtDescriptionData?.parcelas
    ?.slice(0, 1)
    .map((parce: any) => parce.dia_vencimento);

  const Total = valorParcela * totalParcelas;

  return (
    <Box w="100%" padding="3rem 10%" minH="100vh" color="#FFFFFF" marginLeft="5rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <RiArrowLeftSLine color="#7C5DF9" />
        <Link onClick={() => setOpen(false, "")}>Voltar</Link>
      </Box>

      <Box h="5rem" bg="#1E2139" borderRadius="5px" display="flex" alignItems="center" marginTop="2rem" padding="0 2rem">
        <Box display="flex" alignItems="center">
          <Text marginRight="-1.5rem">Status</Text>
          {
            isLoading
              ? <Skeleton width="120px" height="3rem" startColor='gray.600' endColor="#2A2D52" borderRadius="5px" ml="3rem" />
              : (
                <TextDebtStatus
                  status={
                    parcelasPagas > 0 && parcelasPagas === DebtDescriptionData?.parcelas?.length
                      ? "Pago"
                      : (
                        parcelasPagas > 0 && parcelasPagas !== DebtDescriptionData.parcelas.length
                          ? "Andamento"
                          : (
                            DebtDescriptionData?.parcelas?.length > 0 && parcelasPagas !== DebtDescriptionData?.parcelas?.length
                              ? "Pendente"
                              : "Sem Valor"
                          )
                      )
                  }
                />
              )
          }
        </Box>
      </Box>

      {
        isLoading
          ? (
            <Box h="75%" bg="#1E2139" borderRadius="5px" display="flex" alignItems="center" justifyContent="center" mt="2rem">
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='purple.500'
                size='xl'
              />
            </Box>
          )
          : (
            <Box minH="75%" bg="#1E2139" borderRadius="5px" display="flex" flexDirection="column" gap="1rem" p="2rem" m="2rem 0">
              <Box display="grid" gridTemplateColumns="1fr 1fr 1fr">
                <DescriptionDebtInfo title="Empresa" content={DebtDescriptionData?.name_debt} />
                <DescriptionDebtInfo title="Produto" content={DebtDescriptionData?.produto} />
                <DescriptionDebtInfo title="Parcelas" content={totalParcelas <= 0 ? '-' : `${parcelasPagas}/${totalParcelas}`} />
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr 1fr">
                <DescriptionDebtInfo title="Total do débito" content={`R$ ${valorParcela <= 0 ? '-' : MoneyFormat(Total)}`} />
                <DescriptionDebtInfo title="Valor da parcela" content={`R$ ${valorParcela <= 0 ? '-' : MoneyFormat(valorParcela)}`} />
                <DescriptionDebtInfo
                  title="Vencimento"
                  content={`Dia ${diaVencimento <= 0
                    ? '-'
                    : String(diaVencimento).padStart(2, '0')}`}
                />
              </Box>

              <TableDebtDescription dataSource={DebtDescriptionData?.parcelas} />

            </Box>
          )
      }
    </Box>
  );
}
