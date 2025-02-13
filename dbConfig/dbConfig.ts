import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI as string);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Mongo Db connected")
        })
        connection.on('error', () => {
            console.log('Mongo DB connection error');
            process.exit()
        })
    } catch (error) {
        console.log('Something went wrong while connecting with Mongo DB');
        console.log(error)
    }
}