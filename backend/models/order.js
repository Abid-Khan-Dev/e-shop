import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    name: String,
    date: Number,
    address: {
        type: String,
        lowercase: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }
},
    { timestamps: true }
)