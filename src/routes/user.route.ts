import express from 'express'
import { userController } from '../controllers/user.controller'

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:userId', userController.getSingleUser)
router.put('/:userId', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
