import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// GET all food spots
router.get("/", (req, res) => {
  const foodSpots = data.filter(item => item.type === "food_spot");
  res.json(foodSpots);
});

export default router;
