import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { TimeData } from "../../interface/TimeData";

const API_URL = "http://localhost:8080/api";

const putData = async (id: number, data: TimeData): AxiosPromise<any> => {
  const response = axios.put(`${API_URL}/times/${id}`, data);
  return response;
};

export function useTimeDataUpdate() {
  const queryClient = useQueryClient();
  const mutation = useMutation((data: TimeData) => putData(data.id!, data), {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["time-data"]);
    },
  });

  return mutation;
}
