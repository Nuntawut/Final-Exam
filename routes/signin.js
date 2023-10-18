const expressFunction = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = expressFunction.Router();
const key = "MY_KEY";
const students = require("../data/students_data");

module.exports = router;
