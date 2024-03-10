const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
    } = require("../controllers/people");

// Here path is path relative to the path used in app.js.So / means localhost:5000/api/people.
router.get("/", getPeople);

router.post("/", createPerson);

// METHOD - POST using postman
router.post("/postman", createPersonPostman);

// METHOD - PUT.
router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

//Another way of chaining the routes with same url.
// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;