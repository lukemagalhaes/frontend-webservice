import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ProdutoData } from '../../interface/ProdutoData';

const API_URL = 'http://localhost:8080/api';

const fetchData = async (): AxiosPromise<ProdutoData[]> => {
    const response = axios.get(API_URL + '/produtos');
    return response;
}

export function useProdutoData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['produto-data'],
        retry: 2
    })

    return {
        ...query,
        dataProduto: query.data?.data
    }
}