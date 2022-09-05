import express from 'express';
var router = express.Router();
import getHospitals from "../controllers/getHospitals.controllers.js"
/* GET users listing. */
router.get('/', getHospitals);

export default router;
