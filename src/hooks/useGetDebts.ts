import { useQuery } from "react-query";
import { api } from "../services/api";
import { URLS } from "../services/URLS";

export default function useGetDebts() {
  const result = useQuery(
    [URLS.DEBT],
    getDebts,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return result;
}

function getDebts() {
  return api.get(URLS.DEBT).then((resp) => resp.data);
}
