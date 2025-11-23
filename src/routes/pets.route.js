import { Router } from "express";

const route = Router();
const petsBBDD = []

route.post('/', (req, res) => {
    res.json({ message: "endpoint de user - metodo post" });
})




export default route;