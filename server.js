import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Load mockData.json
const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// ---------------- Routes ---------------- //

// Hotels
app.get("/api/hotels", (req, res) => {
  const hotels = data.filter(item => item.type === "hotel");
  res.json(hotels);
});

// Restaurants
app.get("/api/restaurants", (req, res) => {
  const restaurants = data.filter(item => item.type === "restaurant");
  res.json(restaurants);
});

// Famous Places
app.get("/api/places", (req, res) => {
  const places = data.filter(item => item.type === "famous_place");
  res.json(places);
});

// Food Spots
app.get("/api/food", (req, res) => {
  const foodSpots = data.filter(item => item.type === "food_spot");
  res.json(foodSpots);
});

// Avatars (all items with avatar field)
app.get("/api/avatar", (req, res) => {
  const avatars = data
    .filter(item => item.avatar)
    .map(item => ({
      id: item.id,
      name: item.name,
      avatar: item.avatar
    }));
  res.json(avatars);
});

// ✅ New: Recommendations (for Flutter)
app.get("/api/recommendations", (req, res) => {
  const recommendations = [
    {
      title: "Taj Falaknuma",
      subtitle: "Luxury Hotel",
      lat: 17.3610,
      lng: 78.4700
    },
    {
      title: "Paradise Biryani",
      subtitle: "Famous Food Spot",
      lat: 17.3851,
      lng: 78.4867
    },
    {
      title: "Charminar",
      subtitle: "Historic Monument",
      lat: 17.3616,
      lng: 78.4747
    }
  ];
  res.json(recommendations);
});

// Basic test route
app.get("/", (req, res) => {
  res.send("Tourist Guide Backend Running 🚀");
});

// ---------------- Server ---------------- //
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `✅ Server running on port ${PORT}, accessible from other devices on the network`
  );
});
