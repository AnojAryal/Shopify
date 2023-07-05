import { Categories } from "./useCategories";
import useData from "./useData";

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
  

const useProducts =(selectedCategory : Categories | null) =>
 useData<Product>("/products", {params:{categories :selectedCategory?.id}},
 [selectedCategory?.id])


export default useProducts;

