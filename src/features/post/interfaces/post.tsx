export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ICreatePostCommand {
  title: string;
  body: string;
  userId: number;
}

export interface IEditPostCommand {
  title: string;
  body: string;
  userId: number;
}
