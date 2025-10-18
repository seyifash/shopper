import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = 'https://shopapi.buildeapp.org/api/v1';

const fetchProducts = async () => {
    const {data} = await axios.get(`${BASE_URL}/products`);
    return data.products
}
export const useProductQuery = () =>  {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    })
}