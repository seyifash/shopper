import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = 'https://shopapi.buildeapp.org/api/v1';

const fetchProducts = async (page) => {
    const {data} = await axios.get(`${BASE_URL}/products?page=${page}`);
    return data
}
export const useProductQuery = (page) =>  {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts(page),
    })
}

const fetchSingleProducts = async (id) => {
    const {data} = await axios.get(`${BASE_URL}/product/${id}`);
    return data
}
export const useSingleProductQuery = (id) =>  {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchSingleProducts(id),
    })
}