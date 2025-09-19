import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 3 },
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  crowdLevel: { type: String, enum: ["Low", "Medium", "High"], default: "Low" }
}, { timestamps: true });

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
