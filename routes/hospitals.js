import express from "express";
import app from "../app.js";
var router = express.Router();
import {
  getHospitals,
  getClosesHospital,
} from "../controllers/hospitals.controllers.js";

/* GET hospitals listing. */

router.get("/", getHospitals);

router.get("/:x/:y", getClosesHospital);

export default router;
