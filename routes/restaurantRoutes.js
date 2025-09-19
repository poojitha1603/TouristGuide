import express from "express";
const router = express.Router();
import fs from "fs";
import path from "path";

// Read mockData.json
const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);

// GET all restaurants
router.get("/", (req, res) => {
  const restaurants = data.filter(item => item.type === "restaurant");
  res.json(restaurants); // pretty JSON in browser
});

export default router;
