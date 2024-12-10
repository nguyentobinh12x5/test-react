import { APP_CONFIG } from "../constants/app.Config";
import ENDPOINTS from "../constants/endpoints";
export const getPosts = async () => {
  try {
    const response = await fetch(`${APP_CONFIG.BASE_URL}/${ENDPOINTS.POSTS}`);
    return response.json();
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const getPost = async (id: any) => {
  try {
    const response = await fetch(
      `${APP_CONFIG.BASE_URL}/${ENDPOINTS.POSTS}/${id}`
    );
    return response.json();
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const createNewPost = async (Post: any) => {
  const response = await fetch(`${APP_CONFIG.BASE_URL}/${ENDPOINTS.POSTS}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Post),
  });
  return response.json();
};

export const updatePost = async (Post: any) => {
  const response = await fetch(
    `${APP_CONFIG.BASE_URL}/${ENDPOINTS.POSTS}/${Post.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Post),
    }
  );
  return response.json();
};

export const deletePost = async (id: number) => {
  const response = await fetch(`${APP_CONFIG.BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
