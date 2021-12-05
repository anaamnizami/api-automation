import chai, { expect } from "chai";
import jsonSchema from "chai-json-schema";
import { commentSchema, postSchema, userSchema } from "./schemas.js";
chai.use(jsonSchema);

export function validate_user_schema(user) {
  expect(user).to.be.jsonSchema(userSchema, "user schema is not valid");
}

export function validate_post_schema(post) {
  expect(post).to.be.jsonSchema(postSchema, "post schema is not valid");
}

export function validate_comment_schema(comment) {
  expect(comment).to.be.jsonSchema(
    commentSchema,
    "comment schema is not valid"
  );
}
