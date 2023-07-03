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
  

const useProducts =() => useData<Product>("/products")


export default useProducts;