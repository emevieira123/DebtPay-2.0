/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text } from "@chakra-ui/react";
import useDrawerRegisterDebt from "../../../../hooks/useRegisterDebt";
import { LogoDebtPay } from "../../../../assets/LogoDebtPay";
import { useForm } from "react-hook-form";
import usePostDebt from "../../../../hooks/usePostDebt";

export function RegisterDebt() {
  const { visible, hide } = useDrawerRegisterDebt();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { mutate: Save, isLoading } = usePostDebt(
    () => {
      reset(),
      hide()
    }
  );

  function SaveDebt(data: any) {
    console.log("register debt", data);
    Save(data)
  }

  return (
    <Drawer isOpen={visible} onClose={hide} placement="right" size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Registro de Débito</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          <Box display="flex" flexDirection="column" gap="3rem" mt={9}>
            <Box display="flex" gap="1rem" alignItems="center" justifyContent="center">
              <LogoDebtPay />
              <Text fontWeight="bold" fontSize="xl">DebtPay</Text>
            </Box>
            <Text fontWeight="bold" lineHeight="2rem">
              Empresa devedora
              <Input {...register("name_debt", { required: true })} name="name_debt" type="text" />
              {errors.name_debt && <Text color="red" fontWeight="normal">Campo obrigatório</Text>}
            </Text>
            <Text fontWeight="bold">
              Nome do produto
              <Input {...register("produto", { required: true })} name="produto" type="text" />
              {errors.produto && <Text color="red" fontWeight="normal">Campo obrigatório</Text>}
            </Text>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <form onSubmit={handleSubmit(SaveDebt)}>
            <Button colorScheme="red" mr={3} onClick={hide}>Cancelar</Button>
            <Button colorScheme="blue" type="submit" isLoading={isLoading} loadingText="Salvando...">
              Salvar
            </Button>
          </form>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
