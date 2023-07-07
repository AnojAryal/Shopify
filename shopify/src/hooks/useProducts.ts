import { Categories } from "./useCategories";
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
  

const useProducts =(selectedCategory : Categories | null ,selectedSize : Size | null) =>
 useData<Product>("/products", {
  params:{
   categories :selectedCategory?.id,
   sizes : selectedSize?.id}},
 [selectedCategory?.id ,selectedSize?.id])


export default useProducts;