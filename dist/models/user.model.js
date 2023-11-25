"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, "a unique identifier required"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    fullName: {
        firstName: {
            type: String,
            required: [true, "First name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
        },
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true, // Ensure email is stored in lowercase
    },
    isActive: {
        type: Boolean,
        required: [true, "Active status is required"],
    },
    hobbies: {
        type: [String],
        default: [],
    },
    address: {
        street: {
            type: String,
            required: [true, "Street is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
        },
        country: {
            type: String,
            required: [true, "Country is required"],
        },
    },
    orders: [
        {
            productName: {
                type: String,
                required: [true, "Product name is required"],
            },
            price: {
                type: Number,
                required: [true, "Price is required"],
            },
            quantity: {
                type: Number,
                required: [true, "Quantity is required"],
            },
        },
    ],
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
