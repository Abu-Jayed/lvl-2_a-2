/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.services'

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
      status: 'fail',
      message: error.message || 'something went wrong',
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
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    await userServices.deleteUser(userId)

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
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
