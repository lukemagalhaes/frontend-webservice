import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProdutoData } from "../../interface/ProdutoData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (produto: string): AxiosPromise<ProdutoData[]> => {
  const response = axios.get(`${API_URL}/produtos/buscar?produto=${produto}`);
  return response;
};

export function useProdutoDataSearch(produto: string) {
  const query = useQuery({
    queryFn: () => fetchData(produto),
    queryKey: ["produto-data", produto],
    retry: 2,
  });

  return {
    ...query,
    dataProduto: query.data?.data,
  };
}
