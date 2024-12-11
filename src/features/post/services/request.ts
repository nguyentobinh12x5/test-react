import { AxiosResponse } from "axios";
import ENDPOINTS from "../../../constants/endpoints";
import RequestService from "../../../services/request";
import {
  ICreatePostCommand,
  IPost,
  IEditPostCommand,
} from "../interfaces/post";

export function getPostsRequest(): Promise<AxiosResponse<IPost[]>> {
  return RequestService.axios.get<IPost[]>(`${ENDPOINTS.POSTS}`);
}

export function getPostByIdRequest(id: string): Promise<AxiosResponse<IPost>> {
  return RequestService.axios.get<IPost>(`${ENDPOINTS.POSTS}/${id}`);
}

export function createNewPostRequest(
  command: ICreatePostCommand
): Promise<AxiosResponse<IPost>> {
  return RequestService.axios.post<IPost>(`${ENDPOINTS.POSTS}`, command);
}

export function editNewPostRequest(
  command: IEditPostCommand
): Promise<AxiosResponse<number>> {
  return RequestService.axios.put<number>(`$${ENDPOINTS.POSTS}`, command);
}

export function deleteByIdRequest(id: number): Promise<AxiosResponse<number>> {
  return RequestService.axios.delete(`${ENDPOINTS.POSTS}/${id}`);
}
