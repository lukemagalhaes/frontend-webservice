import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ContaBancariaData } from "../../interface/ContaBancariaData";

const API_URL = "http://localhost:8080/api";

const putData = async (id: number, data: ContaBancariaData): AxiosPromise<any> => {
  const response = axios.put(`${API_URL}/contas/${id}`, data);
  return response;
};

export function useContaBancariaDataUpdate() {
  const queryClient = useQueryClient();
  const mutation = useMutation((data: ContaBancariaData) => putData(data.id!, data), {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["contaBancaria-data"]);
    },
  });

  return mutation;
}
