/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.services'
import mongoose from 'mongoose'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    // befor code was like this
    // const result = await User.create(userData)

    // service code here
    const result = await userServices.createUser(userData)

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userServices.getSingleUser(userId)

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const userId = req.params.userId
    const result = await userServices.updateUser(userId, userData)

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}


const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId


    if (!mongoose.Types.ObjectId.isValid(id)) {
      // If userId is not a valid ObjectId, handle it accordingly
      console.error('Invalid ObjectId:', id);
      return res.status(500).json({
        status: 'fail',
        message: 'unable to delete Something went wrong',
      })
    }


    console.log("controller id", id);
    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
