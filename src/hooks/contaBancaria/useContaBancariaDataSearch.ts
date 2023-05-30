import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ContaBancariaData } from "../../interface/ContaBancariaData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (ContaBancaria: string): AxiosPromise<ContaBancariaData[]> => {
  const response = axios.get(`${API_URL}/contas/buscar?conta=${ContaBancaria}`);
  return response;
};

export function useContaBancariaDataSearch(ContaBancaria: string) {
  const query = useQuery({
    queryFn: () => fetchData(ContaBancaria),
    queryKey: ["contaBancaria-data", ContaBancaria],
    retry: 2,
  });

  return {
    ...query,
    dataContaBancaria: query.data?.data,
  };
}
