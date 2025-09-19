import mongoose from "mongoose";

const crowdSchema = new mongoose.Schema({
  locationType: { type: String, enum: ["Hotel", "Restaurant", "Place"], required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: "locationType" },
  level: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

const Crowd = mongoose.model("Crowd", crowdSchema);
export default Crowd;
