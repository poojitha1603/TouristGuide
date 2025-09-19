import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Read mockData.json (assuming avatars are part of it)
const dataPath = path.resolve("data/mockData.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// GET all avatars
router.get("/", (req, res) => {
  // Filter only items with an avatar field, or you can create a separate array
  const avatars = data
    .filter(item => item.avatar) // only items that have "avatar" key
    .map(item => ({
      id: item.id,
      name: item.name,
      avatar: item.avatar
    }));

  res.json(avatars);
});

export default router;
