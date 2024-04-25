import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  fname: {
    type: String,
    requried: true,
  },
  lname: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
});

export const usersModel =
  mongoose.models.users ?? mongoose.model("users", schema);
