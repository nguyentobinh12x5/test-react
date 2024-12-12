import { handleCreatePosts } from "../services/handle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CreatePostScheme, ICreatePostForm } from "./create-post-scheme";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CreatePostForm = () => {
  const initialValues: ICreatePostForm = {
    title: "",
    content: "",
  };

  const mutation = handleCreatePosts();
  const handleSubmit = (values: ICreatePostForm) => {
    mutation.mutate({
      title: values.title,
      body: values.content,
      id: 0,
      userId: 0,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={CreatePostScheme}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field as={Input} type="text" id="title" name="title" />
              <ErrorMessage
                name="title"
                component="div"
                className=" text-danger"
              />
            </div>
            <div>
              <label htmlFor="content">Content:</label>
              <Field as={Textarea} id="content" name="content" />
              <ErrorMessage
                name="content"
                component="div"
                className=" text-danger"
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Create Post
            </Button>
          </Form>
        )}
      </Formik>
      {mutation.isPending && <p>Creating post...</p>}
      {mutation.isError && <p>Error creating post: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post created successfully</p>}
    </div>
  );
};

export default CreatePostForm;
