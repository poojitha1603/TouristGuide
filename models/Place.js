import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, min: 1, max: 5, default: 3 },
  crowdLevel: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  tags: [String] // e.g., ["historic", "nature"]
}, { timestamps: true });

const Place = mongoose.model("Place", placeSchema);
export default Place;
