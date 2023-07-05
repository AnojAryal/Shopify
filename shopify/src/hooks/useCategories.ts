import useData from "./useData";

export interface Categories {
  id: number;
  name: string;
  background_image : string;
}

const useCategories = () => useData<Categories>('/categories')
        

export default useCategories;