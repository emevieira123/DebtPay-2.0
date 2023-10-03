/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text, Input, Button, Link, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/hooks/useAuth";
import { LogoDebtPay } from "../../assets/LogoDebtPay";
import { Register } from "../Register";
import useModalRegister from "../../hooks/useModalRegister";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { show } = useModalRegister();

  const auth = useAuth();
  const navigate = useNavigate();

  async function SignIn(data: any) {
    try {
      setIsLoading(!isLoading);
      await auth.authenticated(data.email, data.password);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Box bg="#141625" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        bg="transparent"
        w="25rem"
        h="30rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mb={4} display="flex" gap="1rem" justifyContent="center">
          <Heading color="#FFF">DebtPay</Heading>
          <LogoDebtPay />
        </Box>
        <Text color="white" fontSize='3xl' fontWeight="bold" marginBottom="1.5rem">Login</Text>
        <form onSubmit={handleSubmit(SignIn)} style={{ width: "25rem", display: "flex", flexDirection: "column" }}>
          <Input
            type="text"
            {...register("email", { required: true })}
            placeholder="E-mail"
            h="3.5rem"
            color="white"
            borderBottomRightRadius="0"
            borderBottomLeftRadius="0"
            borderColor="gray.600"
          />
          <Input
            type="password"
            {...register("password", { required: true })}
            placeholder="Senha"
            h="3.5rem"
            color="white"
            borderTopRightRadius="0"
            borderTopLeftRadius="0"
            borderColor="gray.600"
          />
          {(errors?.email || errors?.password) && <Text color="red">Os campos de E-mail e Senha são obrigatórios</Text>}
          <Button
            type="submit"
            bg="#7C5DF9"
            _hover={{ bg: "#9278FF" }}
            color="#FFF"
            marginTop="1.5rem"
            isLoading={isLoading}
          >
            Entrar
          </Button>
        </form>

        <Link color="white" marginTop="0.75rem" textAlign="center" onClick={show}>Cadastre-se</Link>
      </Box>

      <Register />
    </Box>
  );
}
