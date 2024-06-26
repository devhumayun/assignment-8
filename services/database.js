import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
    return connection;
  } catch (error) {
    console.log(error);
  }
};
