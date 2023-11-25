import mongoose from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData)
  return result
}

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find()
  return result
}

const getSingleUser = async (userId: string): Promise<IUser | null> => {
  const result = await User.findById(userId)
  return result
}

const updateUser = async (userId: string, userData: IUser): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {new: true,runValidators: true})
  return result
}

const deleteUser = async (id: string): Promise<IUser | null> => {
  console.log('userId:', id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // If userId is not a valid ObjectId, handle it accordingly
    console.error('Invalid ObjectId:', userId);
    return null;
  }

  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
