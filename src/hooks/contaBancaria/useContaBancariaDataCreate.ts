import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ContaBancariaData } from '../../interface/ContaBancariaData';

const API_URL = 'http://localhost:8080/api';

const postData = async (data: ContaBancariaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/contas', data);
    return response;
}

export function useContaBancariaDataCreate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['contaBancaria-data'])
        }
    })

    return mutate;
}