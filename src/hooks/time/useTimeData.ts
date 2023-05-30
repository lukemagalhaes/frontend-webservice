import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { TimeData } from '../../interface/TimeData';

const API_URL = 'http://localhost:8080/api';

const fetchData = async (): AxiosPromise<TimeData[]> => {
    const response = axios.get(API_URL + '/times');
    return response;
}

export function useTimeData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['time-data'],
        retry: 2
    })

    return {
        ...query,
        dataTime: query.data?.data
    }
}