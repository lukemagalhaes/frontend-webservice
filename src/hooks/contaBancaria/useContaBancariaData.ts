import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ContaBancariaData } from '../../interface/ContaBancariaData';

const API_URL = 'http://localhost:8080/api';

const fetchData = async (): AxiosPromise<ContaBancariaData[]> => {
    const response = axios.get(API_URL + '/contas');
    return response;
}

export function useContaBancariaData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['contaBancaria-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}