import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Product {
  id: number;
  name: string;
}

interface FetchProductsResponse {
  count: number;
  results: Product[];
}

const ShopifyProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchProductsResponse>("/products")
      .then((response) => setProducts(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {products.map((Product) => (
          <li key={Product.id}>{Product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopifyProductGrid;
