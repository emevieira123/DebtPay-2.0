import { Box } from "@chakra-ui/react";
import { Sidebar } from "./components/Menu/Sidebar";
import { ListDebts } from "./components/ListDebts";
import { useDebtState } from "../../hooks/useDebtState";
import { DebtDescription } from "./components/DebtDescription";
import { RegisterDebt } from "./components/Drawer/RegisterDebt";

export function Dashboard() {
  const { isOpen } = useDebtState();

  return (
    <Box bg="#141625" display="flex">
      <Sidebar />
      {
        !isOpen
        ? <ListDebts />
        : <DebtDescription />
      }
      <RegisterDebt />
    </Box>
  )
}
