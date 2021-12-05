import request from "../config/common.js";
import {
  validate_response,
  validate_email,
} from "../helpers/response_assertions.js";
import {
  validate_user_schema,
  validate_post_schema,
  validate_comment_schema,
} from "../helpers/schema_validation.js";
import { DESIRED_USER } from "../helpers/constants.js";

let user_object;
let list = [];

describe("api flow", () => {
  it("Get /users", (done) => {
    request.get("users").end((err, res) => {
      validate_response(res);
      validate_body(res);
      const desiredUser = res.body.find(
        (user) => user.username === DESIRED_USER
      );
      user_object = desiredUser.username;
      res.body.forEach((element) => {
        validate_user_schema(element);
      });
      done();
    });
  });

  it("GET POSTS", (done) => {
    request.get("posts").end((err, res) => {
      validate_response(res);
      validate_body(res);
      res.body.forEach((element) => {
        list.push(element);
        validate_post_schema(element);
      });
      done();
    });
  });

  it("email validation", (done) => {
    list.forEach((element) => {
      request.get(`posts/${element.id}/comments`).end((err, res) => {
        validate_response(res);
        validate_body(res);
        res.body.forEach((element) => {
          validate_email(element);
          validate_comment_schema(element);
        });
        done();
      });
    });
  });
});
