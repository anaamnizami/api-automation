## API JavaScript Test Automation Framework

## Overview

- Mocha and chai based api automation test.
- [Api details](https://jsonplaceholder.typicode.com/)
- **Languages:** Node.JS
- **SCM:** Git
- **CI/CD:** Integration with [CircleCI](https://app.circleci.com/pipelines/github/anaamnizami)

## Setup

- Clone [Api Automation](https://github.com/anaamnizami/api-automation) the project
- Run `$ npm install`
- Run Tests `$ npm test`

## Sample Test Scenarios

1.  Search for the user with username “Delphine”.
2.  Use the details fetched to make a search for the posts written by the user.
3.  For each post, fetch the comments and validate if the emails in the comment section are in the proper format.
4.  Think of various scenarios for the test workflow, all the things that can go wrong. Add them to test coverage

    √ Get User (415ms) ✔

    √ Get Posts (391ms) ✔

    √ Email Validation 3 passing (846ms) ✔
