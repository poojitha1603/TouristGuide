import express from "express";
import {
  addCrowd,
  getCrowds,
  getCrowdById,
  updateCrowd,
  deleteCrowd,
  syncCrowdData,
} from "../controllers/crowdController.js";

const router = express.Router();

router.post("/", addCrowd);
router.get("/", getCrowds);
router.get("/:id", getCrowdById);
router.put("/:id", updateCrowd);
router.delete("/:id", deleteCrowd);

// New endpoint for syncing cached crowd reports
router.post("/sync", syncCrowdData);

export default router;
