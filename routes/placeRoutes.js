import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// GET all famous places
router.get("/", (req, res) => {
  const places = data.filter(item => item.type === "famous_place");
  res.json(places);
});

export default router;
