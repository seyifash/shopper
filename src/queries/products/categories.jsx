import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = 'https://shopapi.buildeapp.org/api/v1';


const fetchCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`)
    return data.categories
}

export const useCategoriesQuery = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 5 * 60 * 1000
    })
}