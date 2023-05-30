import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { TimeData } from '../../interface/TimeData';

const API_URL = 'http://localhost:8080/api';

const postData = async (data: TimeData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/times', data);
    return response;
}

export function useTimeDataCreate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['time-data'])
        }
    })

    return mutate;
}