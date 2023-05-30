import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProdutoData } from "../../interface/ProdutoData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (id: number): AxiosPromise<ProdutoData> => {
  const response = axios.get(`${API_URL}/produtos/${id}`);
  return response;
};

export function useProdutoDataId(id: number) {
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ["produto-data", id],
    retry: 2,
  });

  return {
    ...query,
    dataProduto: query.data?.data,
  };
}
