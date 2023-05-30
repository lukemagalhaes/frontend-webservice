import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ProdutoData } from '../../interface/ProdutoData';

const API_URL = 'http://localhost:8080/api';

const postData = async (data: ProdutoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/produtos', data);
    return response;
}

export function useProdutoDataCreate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-data'])
        }
    })

    return mutate;
}