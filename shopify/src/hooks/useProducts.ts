import { ShopQuery } from "../App";
import useData from "./useData";

export interface Size{
  id : number,
  name : string,
  slug : string
}

export interface Product {
    Size: Size;
    id: number;
    name: string;
    background_image : string;
    sizes_list : Size[]
    metacritic : number;
  }
  

const useProducts =( shopQuery : ShopQuery)=>
 useData<Product>("/products", {
  params:{
   categories :shopQuery.category?.id,
   selected_size : shopQuery.size?.id,
   sort_by : shopQuery.sortOrder},
  },
 [shopQuery])

export default useProducts;