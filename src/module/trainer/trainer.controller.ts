import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { trainerService } from './trainer.service';
import sendResponse from '../../utils/sendResponse';



const createTrainerC = catchAsync(async (req, res) => {
    const result = await trainerService.createTrainer(req.body)

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.CREATED,
        message: 'Trainer created successfully',
        data: result,
    })
})

const getAllTrainers = catchAsync(async (req, res) => {
    const result = await trainerService.getAllTrainersS();

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.OK,
        message: 'All trainers fetched successfully',
        data: result,
    });
});

export const trainerController = {
    createTrainerC,
    getAllTrainers,
};
