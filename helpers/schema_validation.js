import chai, { expect } from "chai";
import jsonSchema from "chai-json-schema";
import {
  COMMENTS_SCHEMA_ERROR,
  POST_SCHEMA_ERROR,
  USER_SCHEMA_ERROR,
} from "./constants.js";
import { commentSchema, postSchema, userSchema } from "./schemas.js";
chai.use(jsonSchema);

export function validate_user_schema(user) {
  expect(user).to.be.jsonSchema(userSchema, USER_SCHEMA_ERROR);
}

export function validate_post_schema(post) {
  expect(post).to.be.jsonSchema(postSchema, POST_SCHEMA_ERROR);
}

export function validate_comment_schema(comment) {
  expect(comment).to.be.jsonSchema(commentSchema, COMMENTS_SCHEMA_ERROR);
}
