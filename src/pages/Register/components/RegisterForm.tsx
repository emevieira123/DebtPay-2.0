/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Input, Text, Tooltip } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegisterProps } from "../types/register.interface";
import { RegisterImg } from "../../../assets/RegisterImg";

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { LogoDebtPay } from "../../../assets/LogoDebtPay";

interface FormProps {
  register: UseFormRegister<RegisterProps>;
  errors?: FieldErrors<RegisterProps>
}

export function RegisterForm({ register, errors }: FormProps) {
  return (
    <Box display="flex" alignItems="center">
      <Box w="40%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="1rem" minHeight="25rem">
        <Box display="flex" gap="1rem" alignItems="center">
          <Text fontWeight="bold" fontSize="4xl">DebtPay</Text>
          <LogoDebtPay />
        </Box>
        <RegisterImg width="400" height="273" />
      </Box>
      <Box w="60%" height="21rem" display="grid" gridTemplateColumns="1fr 1fr" gap="1rem" bg="#1F213A" p="1rem 2rem" borderRadius="2rem">
        <Text fontWeight="bold">
          Nome *
          <Input {...register("name", { required: true })} type="text" />
          {errors?.name && <Text color="red" fontWeight="normal">{errors?.name?.message}</Text>}
        </Text>
        <Text fontWeight="bold">
          E-mail *
          <Input {...register("email", { required: true })} type="text" />
          {errors?.email && <Text color="red" fontWeight="normal">{errors?.email?.message}</Text>}
        </Text>
        <Text fontWeight="bold">
          Senha *
          <Input {...register("password", { required: true })} type="password" />
          {errors?.password && <Text color="red" fontWeight="normal">{errors?.password?.message}</Text>}
        </Text>
        <Text fontWeight="bold">
          Confirmar Senha *
          <Input {...register("confirm_password", { required: true })} type="password" />
          {errors?.confirm_password && <Text color="red" fontWeight="normal">{errors?.confirm_password?.message}</Text>}
        </Text>
        <Text fontWeight="bold">
          Usuário do GitHub
          <Input {...register("github_user")} type="text" />
        </Text>

        <Tooltip label="Necessário para usarmos o avatar do github" placement='right'>
          <Box w="20px" h="25px" mt="1rem" display="flex" alignItems="center">
            <AiOutlineInfoCircle size={20} />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  )
}
