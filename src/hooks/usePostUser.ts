/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { api } from "../services/api";
import { URLS } from "../services/URLS";
import { useToast } from "@chakra-ui/react";

export default function usePostUser(onSuccess: () => void) {
  const toast = useToast();

  async function postUser(value: any) {
    return await api
      .post(URLS.USERS, value)
      .then((resp: any) => {
        console.log(resp);
        onSuccess();
      toast({
        title: "Cadastro Realizado!",
        description: "O Cadastro foi realizado com sucesso!!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
      })
      .catch((err: any) => {
        console.log(err.message);
        toast({
          title: "Error",
          description: "Não foi possível realizar o cadastro",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        })
      });
  }

  return useMutation(postUser);
}
