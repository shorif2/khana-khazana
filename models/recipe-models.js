import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  activeTime: {
    required: true,
    type: String,
  },
  totalTime: {
    required: false,
    type: String,
  },
  thumbnail: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
  serves: {
    required: false,
    type: String,
  },
  rating: {
    required: false,
    type: String,
  },
  steps: {
    required: false,
    type: Array,
  },
});

export const recipeModel =
  mongoose.models.recipes ?? mongoose.model("recipes", schema);
