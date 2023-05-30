import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { TimeData } from "../../interface/TimeData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (Time: string): AxiosPromise<TimeData[]> => {
  const response = axios.get(`${API_URL}/times/buscar?time=${Time}`);
  return response;
};

export function useTimeDataSearch(Time: string) {
  const query = useQuery({
    queryFn: () => fetchData(Time),
    queryKey: ["time-data", Time],
    retry: 2,
  });

  return {
    ...query,
    dataTime: query.data?.data,
  };
}
