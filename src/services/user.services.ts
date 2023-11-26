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

const deleteUser = async (userId: string): Promise<IUser | undefined | null> => {

  try {
  const result = await User.findByIdAndDelete(userId);
  console.log("result", result);
  return result; 
  } catch (error) {
    console.log("delet error");
  }
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
