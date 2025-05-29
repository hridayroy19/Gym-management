import { Router } from 'express'
import { trainerController } from './trainer.controller'
import auth from '../../middlewares/auth'


const trainerRouter = Router()

trainerRouter.post('/create-tainer',auth('ADMIN'),trainerController.createTrainerC)
trainerRouter.get('/', trainerController.getAllTrainers)

export default trainerRouter
