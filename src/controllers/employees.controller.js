
import { pool } from "../db.js"

export const getEmployees = (req, res) => {
    res.send('Obteniendo empleados') // send a response to the client
}

export const createEmployees = (req, res) => {
    const {name, salary} = req.body
    const consult = 'INSERT INTO employee (name, salary) VALUES (?,?)'
    pool.query(consult, [name, salary])
    console.log("Adding a employee")
}

export const updateEmployees = (req, res) => {
    res.send('Actualizando empleados') // send a response to the client
}

export const deleteEmployees = (req, res) => {
    res.send('Eliminando empleados') // send a response to the client
}
