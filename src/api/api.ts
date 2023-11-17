import { useQuery } from "react-query";
import { Products } from "../vite-env";

export const url =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/";

export const fetchData = (
  params: string
): {
  data?: Products;
  isError: boolean;
  isLoading: boolean;
} => {
  return useQuery("repoData", () =>
    fetch(`${url}${params}`).then((res) => res.json())
  );
};
