import * as Yup from "yup";

export const CreatePostScheme = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

export interface ICreatePostForm extends Yup.Asserts<typeof CreatePostScheme> {}
