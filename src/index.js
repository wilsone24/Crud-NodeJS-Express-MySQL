import express from 'express'
import logger from 'morgan'
import employeesRoutes from  './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import { PORT } from './config.js'



const app = express()
app.use(logger('dev')) // log requests to the console


app.use(express.json()) // parse requests of content-type - application/json
app.use(employeesRoutes) // define a simple route
app.use(indexRoutes) // define a simple route

app.listen(PORT) // listen on port 3000
console.log('Server listening on port ' + PORT)