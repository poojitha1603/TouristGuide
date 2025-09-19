import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }, 
  price: { type: Number, required: true },
  cuisine: String,
  popularity: { type: Number, default: 0 } // number of orders / likes
}, { timestamps: true });

const Food = mongoose.model("Food", foodSchema);
export default Food;
