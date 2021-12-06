import { expect } from "chai";
import { EMAIL_FILTER } from "./constants.js";

export function validate_response(res) {
  expect(res.statusCode).to.equal(200, "expected status code was 200");
}

export function validate_body(res) {
  expect(res.body, "Response body is empty").to.not.be.empty;
}

export function validate_email(e) {
  const valid_email = String(e).search(EMAIL_FILTER) != -1;
  expect(valid_email, "Email is invalid").to.be.true;
}
