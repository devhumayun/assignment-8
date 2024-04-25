import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  author: {
    type: String,
    requried: true,
  },
  activeTime: {
    type: String,
    requried: true,
  },
  totalTime: {
    type: String,
    requried: true,
  },
  thumbnail: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
    requried: true,
  },
  category: {
    type: String,
    requried: true,
  },
  serves: {
    type: Number,
    requried: true,
  },
  rating: {
    type: Number,
    requried: true,
  },
  steps: {
    type: Array,
    requried: true,
  },
});

export const recipesModel =
  mongoose.models.recipes ?? mongoose.model("recipes", schema);
