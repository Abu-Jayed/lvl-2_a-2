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
      status: 'success',
      message: 'User created successfully',
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

export const userController = {
  createUser,
}
