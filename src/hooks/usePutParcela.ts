/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { api } from "../services/api";
import { URLS } from "../services/URLS";
import { useToast } from "@chakra-ui/react";
import { queryClient } from "../main";

type ParcelaType = {
  parcelaId: string;
  status: boolean;
};

export function usePutParcela() {
  const toast = useToast();

  async function putParcela(body: ParcelaType) {
    return await api
      .put(`${URLS.UPDATE_STATUS_PARCELAS.replace("{id}", body.parcelaId)}`, body)
      .then((resp: any) => {
        console.log(resp);
        queryClient.invalidateQueries(URLS.DEBT)
        queryClient.invalidateQueries(URLS.DEBT_DESCRIPTION);
        toast({
          title: "Status Atualizado!",
          description: "O status foi atualizado com sucesso!!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      })
      .catch((err: any) => {
        console.log(err.message);
        toast({
          title: "Error",
          description: "Não foi possível atualizar o status da parcela",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      });
  }

  return useMutation(putParcela);
}
