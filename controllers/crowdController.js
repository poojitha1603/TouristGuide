import Crowd from "../models/Crowd.js";
import cacheService from "../services/cacheService.js";
import syncService from "../services/syncService.js";

// Placeholder for network status check - implement your own logic
const isOnline = () => {
  return true; // Change this based on your connectivity detection
};

export const addCrowd = async (req, res) => {
  try {
    if (isOnline()) {
      const newCrowd = new Crowd(req.body);
      const savedCrowd = await newCrowd.save();
      res.status(201).json(savedCrowd);
    } else {
      cacheService.saveCrowdData(req.body);
      res.status(201).json({ message: "Crowd report saved offline; will sync when online." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCrowds = async (req, res) => {
  try {
    const crowds = await Crowd.find();
    res.json(crowds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCrowdById = async (req, res) => {
  try {
    const crowd = await Crowd.findById(req.params.id);
    if (!crowd) return res.status(404).json({ message: "Crowd record not found" });
    res.json(crowd);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCrowd = async (req, res) => {
  try {
    const updatedCrowd = await Crowd.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCrowd);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCrowd = async (req, res) => {
  try {
    await Crowd.findByIdAndDelete(req.params.id);
    res.json({ message: "Crowd record deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sync cached offline crowd data to database
export const syncCrowdData = async (req, res) => {
  try {
    await syncService.syncCrowdDataWithDB();
    res.status(200).json({ message: "Cached crowd data synced with database." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
