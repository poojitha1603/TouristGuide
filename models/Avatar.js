import mongoose from "mongoose";

const avatarSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  avatarImage: { type: String }, // URL or base64 string
  preferredCity: { type: String }, 
  favorites: {
    hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }],
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
    places: [{ type: mongoose.Schema.Types.ObjectId, ref: "Place" }]
  }
}, { timestamps: true });

const Avatar = mongoose.model("Avatar", avatarSchema);
export default Avatar;

