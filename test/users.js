import request from "../config/common.js";
import {
  validate_response,
  validate_email,
  validate_body,
} from "../helpers/filter_response.js";
import { DESIRED_USER } from "../helpers/constants.js";
let GLOBAL_VARIABLE;
let list = [];

describe("api flow", () => {
  it("Get /users", (done) => {
    request.get("users").end((err, res) => {
      validate_response(res);
      validate_body(res);
      const desiredUser = res.body.find(
        (user) => user.username === DESIRED_USER
      );
      GLOBAL_VARIABLE = desiredUser.username;
      done();
    });
  });

  it("GET POSTS", (done) => {
    request.get("posts").end((err, res) => {
      validate_response(res);
      validate_body(res);
      res.body.forEach((element) => {
        list.push(element);
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
          validate_email(element.email);
        });
      });
    });
    done();
  });
});
