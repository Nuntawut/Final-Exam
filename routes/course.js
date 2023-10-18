var expressFunction = require("express");
const router = expressFunction.Router();
const auth = require("../config/authorize");
let courses = require("../data/course_data");

module.exports = router;
