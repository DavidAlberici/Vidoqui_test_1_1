import dataHospitals from "../data/dataHospitals.js";
/* import ambulanceLocation from "../data/ambulanceLocation.js"; */

//Get all hospitals and locations
export const getHospitals = (req, res) => {
  try {
    const hospitals = res.send(dataHospitals);

    return hospitals;
  } catch (err) {
    return res.status(404).send({ msg: "Sorry, there's benn a problem", err });
  }
};

export const getClosesHospital = (req, res) => {
  const x = req.params.x;
  const y = req.params.y;
  try {
    const hospitals = res.send(dataHospitals);
    return hospitals;
  } catch (err) {
    return res.status(404).send({ msg: "Sorry, there's benn a problem", err });
  }
};
