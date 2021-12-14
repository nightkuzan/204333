import { Router } from "express";

const router = Router();


router.get('/greeting',(req, res) =>{
    const name = req.query.name
    console.log(ืname)
    res.send("Hello world"+name)
})


router.post('/message',(req, res) =>{
    const payload = req.body
    res.send(payload)
})
export default router