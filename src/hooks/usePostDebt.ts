/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { URLS } from "../services/URLS";
import { api } from "../services/api";
import { queryClient } from "../main";
import { useToast } from "@chakra-ui/react";

export default function usePostDebt(onSuccess: () => void) {
  const toast = useToast();

  return useMutation(
    (value) => api.post(URLS.DEBT, value)
    .then((resp: any) => {
      console.log(resp);
      onSuccess();
      queryClient.invalidateQueries(URLS.DEBT);
      toast({
        title: "Cadastro Realizado!",
        description: "O Cadastro foi realizado com sucesso!!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
    }).catch((err: any) => {
      console.log(err.message);
      toast({
        title: "Error",
        description: "Não foi possível realizar o cadastro",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
    })
  );
}
