import {Router} from "express"; //export comun sin default
import { uploader } from "../utils.js";


const route = Router();
const userBBDD = [];

route.post('/', uploader.single('avatar'), (req, res) => {
    res.json({ message: "endpoint de user - metodo post" })
})




export default route;