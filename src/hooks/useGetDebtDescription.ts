/* eslint-disable valid-typeof */
import { useQuery } from "react-query";
import { api } from "../services/api";
import { URLS } from "../services/URLS";

export default function useGetDebtDescription(debtId: string) {
  const result = useQuery(
    [URLS.DEBT_DESCRIPTION, debtId],
    () => getDebtDescription(debtId),
    {
      enabled: typeof debtId !== null,
      cacheTime: 0,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return result;
}

async function getDebtDescription(debtId: string) {
  const response = await api
    .get(URLS.DEBT_DESCRIPTION.replace("{debtId}", debtId))
    .then((resp) => resp.data);
  return response;
}
