import { Avatar, Box, Divider } from "@chakra-ui/react";
import { AiOutlineLogout } from 'react-icons/ai';
import { useAuth } from "../../../../contexts/hooks/useAuth";
import { LogoDebtPay } from "../../../../assets/LogoDebtPay";
import { getUserLocalStorage } from "../../../../contexts/utils/localStorage";
import { PopoverUser } from "./components/Popover";

export function Sidebar() {
  const auth = useAuth();

  const user = getUserLocalStorage();

  const Logout = () => {
    auth.logout();
    window.location.reload();
  };

  return (
    <Box
      bg="#1F213A"
      h="100vh"
      w="5rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderTopRightRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
      position="fixed"
    >
      <Box
        bg="#7C5DF9"
        h="5rem"
        w="5rem"
        borderTopRightRadius="1.5rem"
        borderBottomRightRadius="1.5rem"
        fontSize="3rem"
        display="flex" alignItems="center" justifyContent="center"
      >
        <LogoDebtPay />
      </Box>

      <Box h="8rem">
        <Box h="3rem" display="flex" alignItems="center" justifyContent="center" fontSize="1.5rem">
          <AiOutlineLogout style={{ cursor: "pointer", color: "#FFF" }} onClick={Logout} />
        </Box>
        <Divider opacity="0.2" />
        <Box h="5rem" display="flex" alignItems="center" justifyContent="center">
          <PopoverUser>
            <Avatar name={user?.name} src={`https://github.com/${user?.github_user}.png`} />
          </PopoverUser>
        </Box>
      </Box>
    </Box>
  );
}
