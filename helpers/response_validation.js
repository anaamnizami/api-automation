import { expect } from "chai";
import { EMAIL_FILTER } from "./constants.js";
import {
  STATUS_CODE_ERROR,
  EMAIL_VALIDATION_ERROR,
  EMPTY_RESPONSE_ERROR,
} from "./constants.js";

export function validate_response(res) {
  expect(res.statusCode).to.equal(200, STATUS_CODE_ERROR);
}

export function validate_body(res) {
  expect(res.body, EMAIL_VALIDATION_ERROR).to.not.be.empty;
}

export function validate_email(e) {
  const valid_email = String(e).search(EMAIL_FILTER) != -1;
  expect(valid_email, EMPTY_RESPONSE_ERROR).to.be.true;
}
