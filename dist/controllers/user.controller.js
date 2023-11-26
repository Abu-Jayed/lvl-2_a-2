"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_services_1 = require("../services/user.services");
const mongoose_1 = __importDefault(require("mongoose"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        // befor code was like this
        // const result = await User.create(userData)
        // service code here
        const result = yield user_services_1.userServices.createUser(userData);
        res.status(201).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'something went wrong',
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.getAllUsers();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'something went wrong',
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        console.log('wrong userId: ' + userId);
        if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
            // If userId is not a valid ObjectId, handle it accordingly
            console.error('Invalid ObjectId:', userId);
            return res.status(500).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
        const result = yield user_services_1.userServices.getSingleUser(userId);
        if (result) {
            console.log('result form controller', result);
            res.status(200).json({
                success: true,
                message: 'User fetched successfully!',
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const userId = req.params.userId;
        if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
            // If userId is not a valid ObjectId, handle it accordingly
            console.error('Invalid ObjectId:', userId);
            return res.status(500).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
        const result = yield user_services_1.userServices.updateUser(userId, userData);
        res.status(200).json({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            // If userId is not a valid ObjectId, handle it accordingly
            console.error('Invalid ObjectId:', id);
            return res.status(500).json({
                status: 'fail',
                message: 'unable to delete Something went wrong',
            });
        }
        console.log('controller id', id);
        yield user_services_1.userServices.deleteUser(id);
        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        });
    }
});
exports.userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
