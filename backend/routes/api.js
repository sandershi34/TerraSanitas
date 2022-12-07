const express = require("express");
const PatientInfo = require("../models/PatientInfo");

const router = express.Router();

router.get("/", (req, res) => {
  PatientInfo.find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch(() => {
      console.log("error");
    });
});

router.post("/save", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newPatient = new PatientInfo(data);
  console.log("andrewtest ");

  newPatient.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Interal Server Error" });
    } else {
      res.json({
        msg: "data recieved",
      });
    }
  });
});

module.exports = router;
