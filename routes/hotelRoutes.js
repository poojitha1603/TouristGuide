import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Read mockData.json
const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// GET all hotels
router.get("/", (req, res) => {
  const hotels = data.filter(item => item.type === "hotel");
  res.json(hotels);
});

export default router;
