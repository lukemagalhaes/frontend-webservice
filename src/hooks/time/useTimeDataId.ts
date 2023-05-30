import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { TimeData } from "../../interface/TimeData";

const API_URL = "http://localhost:8080/api";

const fetchData = async (id: number): AxiosPromise<TimeData> => {
  const response = axios.get(`${API_URL}/times/${id}`);
  return response;
};

export function useTimeDataId(id: number) {
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ["time-data", id],
    retry: 2,
  });

  return {
    ...query,
    dataTime: query.data?.data,
  };
}
