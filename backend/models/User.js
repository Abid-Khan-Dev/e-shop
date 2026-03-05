import express from 'express'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, lowercase: true, },
    password: {
        type: String,
    },
    cart: [],
},
    { timestamps: true }
)

const User = mongoose.model('User', userSchema);

export default User