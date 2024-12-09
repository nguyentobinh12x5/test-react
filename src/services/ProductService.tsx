const BASE_URL = import.meta.env.VITE_BASE_URL;
const ProductService = {
  getProducts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    return response.json();
  },

  getProduct: async (id: number) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  },

  createProduct: async (product: any) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return response.json();
  },

  updateProduct: async (product: any) => {
    const response = await fetch(`${BASE_URL}/posts/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return response.json();
  },

  deleteProduct: async (id: number) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

export default ProductService;
