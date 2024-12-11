import { AxiosResponse } from "axios";
import ENDPOINTS from "../../../constants/endpoints";
import RequestService from "../../../services/request";
import {
  ICreatePostCommand,
  IPost,
  IEditPostCommand,
} from "../interfaces/post";

export async function getPostsRequest(): Promise<AxiosResponse<IPost[]>> {
  return RequestService.axios.get<IPost[]>(`${ENDPOINTS.POSTS}`);
}

export function getPostByIdRequest(id: number): Promise<AxiosResponse<IPost>> {
  return RequestService.axios.get(`${ENDPOINTS.POSTS}/${id}`);
}

export async function createNewPostRequest(
  command: ICreatePostCommand
): Promise<AxiosResponse<number>> {
  return RequestService.axios.post<number>(`$${ENDPOINTS.POSTS}`, command);
}

export function editNewPostRequest(
  command: IEditPostCommand
): Promise<AxiosResponse<number>> {
  return RequestService.axios.put<number>(`$${ENDPOINTS.POSTS}`, command);
}

export function deleteByIdRequest(id: number): Promise<AxiosResponse<IPost>> {
  return RequestService.axios.delete(`${ENDPOINTS.POSTS}/${id}`);
}
