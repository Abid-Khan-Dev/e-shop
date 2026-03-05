import mongoose, { modelNames } from 'mongoose';

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_lOCAL_URI)
        console.log("mongodb connected...");
    }
    catch (error) {
        console.log(error.message);
    }
}

export default dbConnect