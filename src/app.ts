/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Request, Response } from 'express'
import { userRoutes } from './routes/user.route'
import cors from "cors"
import User from './models/user.model'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Successfully server running',
  })
})



export default app
