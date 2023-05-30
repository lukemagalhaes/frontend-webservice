import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { UsuarioData } from '../../interface/UsuarioData';

const API_URL = 'http://localhost:8080/api';

const fetchData = async (): AxiosPromise<UsuarioData[]> => {
    const response = axios.get(API_URL + '/usuarios');
    return response;
}

export function useUsuarioData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['usuario-data'],
        retry: 2
    })

    return {
        ...query,
        dataUsuario: query.data?.data
    }
}