import useData from "./useData";

export interface Category {
  id: number;
  name: string;
  background_image : string;
}

const useCategories = () => useData<Category>('/categories')
        

export default useCategories;