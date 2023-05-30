import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ContaBancariaData } from "../../interface/ContaBancariaData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (id: number): AxiosPromise<ContaBancariaData> => {
  const response = axios.get(`${API_URL}/contas/${id}`);
  return response;
};

export function useContaBancariaDataId(id: number) {
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ["contaBancaria-data", id],
    retry: 2,
  });

  return {
    ...query,
    dataContaBancaria: query.data?.data,
  };
}
