export const userSchema = {
  title: "User schema",
  type: "object",
  required: ["id", "name", "username", "email"],
  properties: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    username: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
};

export const postSchema = {
  title: "Post schema",
  type: "object",
  required: ["userId", "id", "title", "body"],
  properties: {
    userId: {
      type: "number",
    },
    id: {
      type: "number",
    },
    title: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },
};

export const commentSchema = {
  title: "Post schema",
  type: "object",
  required: ["postId", "id", "name", "email", "bodyx"],
  properties: {
    postId: {
      type: "number",
    },
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    bodyx: {
      type: "string",
    },
  },
};
