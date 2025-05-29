import express from 'express';
import { bookingController } from './booking.controller';
import auth from '../../middlewares/auth';

const bookingrouter = express.Router();

bookingrouter.post('/booked',auth("TRAINEE"),bookingController.bookSchedule);
bookingrouter.delete('/cancel/:id',auth("TRAINEE"),bookingController.cancelBooking);
bookingrouter.get('/:id', auth("TRAINEE"), bookingController.getMyBookings);

export default bookingrouter;
