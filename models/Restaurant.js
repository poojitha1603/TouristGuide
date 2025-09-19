import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 3 },
  priceRange: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
  cuisine: [String], // e.g., ["Indian", "Italian"]
  crowdLevel: { type: String, enum: ["Low", "Medium", "High"], default: "Low" }
}, { timestamps: true });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
