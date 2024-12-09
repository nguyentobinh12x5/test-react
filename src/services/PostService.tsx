const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    return response.json();
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const getPost = async (id: any) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const createPost = async (Post: any) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Post),
  });
  return response.json();
};

export const updatePost = async (Post: any) => {
  const response = await fetch(`${BASE_URL}/posts/${Post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Post),
  });
  return response.json();
};

export const deletePost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
