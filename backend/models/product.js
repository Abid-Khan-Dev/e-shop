import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,

    category: [
        { type: String },
    ],

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},

    { timestamps: true }
)

const Product = mongoose.model('Product', productSchema);

export default Product