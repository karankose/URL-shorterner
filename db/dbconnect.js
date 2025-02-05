import mongoose  from "mongoose";

export const connectMongo = async function(ulr){
    return mongoose.connect(ulr)

}