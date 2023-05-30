import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080/api";

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(`${API_URL}/produtos/${id}`);
  return response;
};

export function useProdutoDataDelete() {
  const queryClient = useQueryClient();
  const mutation = useMutation((id: number) => deleteData(id), {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["produto-data"]);
    },
  });

  return mutation;
}
