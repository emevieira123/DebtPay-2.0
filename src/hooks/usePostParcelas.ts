/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { URLS } from "../services/URLS";
import { api } from "../services/api";
import { queryClient } from "../main";
import { useToast } from "@chakra-ui/react";

interface TesteProps {
  dia_vencimento: number;
  qtde_parcelas: number;
  valor_parcela: number;
  id_debt: string;
}

export default function usePostParcelas(onSuccess: () => void) {
  const toast = useToast();

  async function postParcelas(value: any) {
    return await api.post<TesteProps>(URLS.PARCELAS, value)
    .then((resp) => {
      console.log(resp);
      onSuccess();
      queryClient.invalidateQueries(URLS.DEBT);
      queryClient.invalidateQueries(URLS.DEBT_DESCRIPTION);
      toast({
        title: "Cadastro Realizado!",
        description: "O Cadastro foi realizado com sucesso!!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
    }).catch((err) => {
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

  return useMutation(postParcelas);
}
