/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "../user/user.model";

const createTrainer = async (data: any) => {
    const trainer = await User.create({
        name: data.name,
        email: data.email,
        password: data.password,
        role: 'TRAINER',
    });
    return trainer;
};

const getAllTrainersS = async () => {
    const trainers = await User.find({ role: 'TRAINER' });
    return trainers;
};

export const trainerService = {
    createTrainer,
    getAllTrainersS,
};
