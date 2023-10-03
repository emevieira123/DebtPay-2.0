/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { api } from "../services/api";
import { URLS } from "../services/URLS";

export default function useGetDebts() {
  const result = useQuery(
    [URLS.DEBT],
    getDebts,
    {
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return result;
}

function getDebts() {
  return api.get(URLS.DEBT).then((resp: any) => resp.data);
}
