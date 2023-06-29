import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Category {
  id: number;
  name: string;
}

interface FetchCategoriesResponse {
  count: number;
  results: Category[];
}

const ShopifyCategoriesGrid = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCategoriesResponse>("/categories")
      .then((response) => setCategories(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {categories.map((Category) => (
          <li key={Category.id}>{Category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopifyCategoriesGrid;
