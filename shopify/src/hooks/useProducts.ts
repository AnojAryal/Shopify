import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Size {
  id : number,
  name : string,
  slug : string
}

export interface Product {
    id: number;
    name: string;
    background_image : string;
    sizes_list : Size[]
    metacritic : number;
  }
  
interface FetchProductsResponse {
    count: number;
    results: Product[];
  }

const useProducts =() => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading]=useState(false)
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

      apiClient
        .get<FetchProductsResponse>("/products",{signal :controller.signal})
        .then((response) => {
          setProducts(response.data.results)
          setLoading(false)
        })
        .catch((error) =>{
            if (error instanceof CanceledError )return
            setError(error.message)
            setLoading(false);
        });

      return ()=> controller.abort();
    },[]);

    return {products,error,isLoading};
}

export default useProducts;