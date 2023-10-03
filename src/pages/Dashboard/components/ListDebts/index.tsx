/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { Header } from "../Header";
import { DebtCard } from "../Cards/DebtCard";
import useGetDebts from "../../../../hooks/useGetDebts";
import { ListDebtsProps, ParcelasProps } from "./types";
import { LoadingDebts } from "../Loadings/LoadingDebts";
import { useDebtState } from "../../../../hooks/useDebtState";
import { MoneyFormat } from "../DebtDescription";

export function ListDebts() {
  const { data, isLoading } = useGetDebts();
  const { setOpen } = useDebtState();

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" padding="3rem 0" marginLeft="5rem">
      <Header countDebt={data?.length} loading={isLoading} />

      <Box w="80%" display="flex" flexDirection="column" gap="1rem">
        {
          isLoading
            ? (
              <LoadingDebts />
            )
            : (
              data?.map((debt: ListDebtsProps) => {
                const filterStatus = debt.parcelas.filter((item: ParcelasProps) => item.status === true).length;

                return (
                  <DebtCard
                    key={debt.id}
                    nameStore={debt.name_debt}
                    nameProduct={debt.produto}
                    price={debt?.parcelas?.length === 0 ? "-" : MoneyFormat(Number(debt?.parcelas?.[0]?.valor_parcela) * debt?.parcelas?.length)}
                    status={
                      debt.parcelas.length > 0 && filterStatus === debt.parcelas.length
                        ? "pago"
                        : (
                          filterStatus > 0 && filterStatus !== debt.parcelas.length
                            ? "andamento"
                            : (
                              debt.parcelas.length > 0 && filterStatus !== debt.parcelas.length
                              ? "pendente"
                              : "sem valor"
                            )
                        )
                    }
                    onClick={() => setOpen(true, debt.id)}
                  />
                )
              })
            )
        }
      </Box>
    </Box>
  );
}
