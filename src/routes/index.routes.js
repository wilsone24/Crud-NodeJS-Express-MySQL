import { Router } from "express";
import {pool} from '../db.js'
const router = Router();

router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT * FROM employee')
    res.send(result) // send a response to the client
 })

 export default router;