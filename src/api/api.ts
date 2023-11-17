import { useQuery } from "react-query";
import { Products } from "../vite-env";

export const fetchData = (
  params: string
): {
  data?: Products;
  isError: boolean;
  isLoading: boolean;
} => {
  return useQuery("repoData", () =>
    fetch(`${import.meta.env.VITE_API_URL}/${params}`).then((res) => res.json())
  );
};
