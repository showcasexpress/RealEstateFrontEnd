import {House} from '../types/house'
import axios, {AxiosError} from "axios"
import {useQuery, } from "@tanstack/react-query"
import config from '../config'

const useFetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () => 
            axios.get(`${config.baseAPIurl}/houses`).then((response) => response.data),
    });
}

export default useFetchHouses;
