import supertest from "supertest";
import { baseurl } from "../config/test_env.js";
const request = supertest(baseurl);

export default request;
