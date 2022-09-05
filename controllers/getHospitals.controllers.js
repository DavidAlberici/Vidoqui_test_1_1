import {createRequire} from "module"
const require = createRequire(import.meta.url);
const data = require("../data/data.json");

const getHospitals = (req,res) => { 
    const hospitals = res.send(data)
    return hospitals
}


export default getHospitals

