import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
}

const Product = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    // staleTime: 5000,
    // gcTime: 60000,
    // enabled: true,
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Product</h2>
      <ul>
        {data.map((product: Product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Product;

//Notes:
// We are using the useQuery hook to fetch the data from the API.
// When we reload or back to this page react query will check the key if it has fetched it before
// and automatically get the data from the cache.
// Faster and more efficient than the traditional way of fetching data.
// Reduce the number of requests to the server.
//Different between isLoading and isPending. Is Loading follow enable = false/ initial fetch, isPending follow enable = true
