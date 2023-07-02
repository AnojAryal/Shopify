import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Category {
  id: number;
  name: string;
}

interface FetchCategoriesResponse {
  count: number;
  results: Category[];
}

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchCategoriesResponse>("/categories", { signal: controller.signal })
      .then((response) => {
        setCategories(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { categories, error, isLoading };
};

export default useCategories;