import express, { Request, Response } from 'express'
import cors from "cors"
import userRouter from './module/user/user.router'
import authRoute from './module/auth/auth.route'
import trainerRouter from './module/trainer/trainer.route'
import classSchedulrouter from './module/classSchedule/classSchedule.route'
import bookingrouter from './module/booking/booking.route'

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/user', userRouter)
app.use('/api/trainer', trainerRouter)
app.use('/api/classSchedul', classSchedulrouter)
app.use('/api/booking', bookingrouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
