import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { UsuarioData } from "../../interface/UsuarioData";

const API_URL = "http://localhost:8080/api";

const createUsuarioData = async (
  data: UsuarioData
): AxiosPromise<UsuarioData> => {
  const response = axios.post(`${API_URL}/usuarios`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

export function useUsuarioDataCreate() {
    const queryClient = useQueryClient();
    const mutation = useMutation((data: UsuarioData) =>
      createUsuarioData(data)
    , {
      retry: 2,
      onSuccess: async () => {
        await queryClient.invalidateQueries(["usuario-data-validation"]);
      },
    });
  
    return mutation;
  }
  