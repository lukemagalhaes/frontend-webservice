import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProdutoData } from "../../interface/ProdutoData";

const API_URL = "http://localhost:8080/api";

const putData = async (id: number, data: ProdutoData): AxiosPromise<any> => {
  const response = axios.put(`${API_URL}/produtos/${id}`, data);
  return response;
};

export function useProdutoDataUpdate() {
  const queryClient = useQueryClient();
  const mutation = useMutation((data: ProdutoData) => putData(data.id!, data), {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["produto-data"]);
    },
  });

  return mutation;
}
