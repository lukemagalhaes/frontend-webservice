import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { UsuarioData } from "../../interface/UsuarioData";

const API_URL = "http://localhost:8080/api";

const fetchUsuarioData = async (
  login: string,
  password: string
): AxiosPromise<UsuarioData> => {
  const response = axios.get(`${API_URL}/usuarios/validar`, {
    params: { login, password },
  });
  return response;
};

export function useUsuarioDataValidation(login: string, password: string) {
  const query = useQuery({
    queryFn: () => fetchUsuarioData(login, password),
    queryKey: ["usuario-data-validation", login, password],
    retry: 2,
  });

  return {
    ...query,
    dataUsuario: query.data?.data,
  };
}
