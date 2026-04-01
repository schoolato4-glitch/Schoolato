import express from "express";
import School from "../models/School.js";

const router = express.Router();

/**
 * GET FILTERS
 * Query params:
 *  - state (optional)
 *  - district (optional)
 */
router.get("/filters", async (req, res) => {
  try {
    const { state, district } = req.query;

    // 1️⃣ Get all states
    if (!state) {
      const states = await School.distinct("state");

      return res.json({
        level: "state",
        data: states,
      });
    }

    // 2️⃣ Get districts based on state
    const stateData = await School.findOne({ state });

    if (!stateData) {
      return res.status(404).json({ error: "State not found" });
    }

    if (!district) {
      const districts = stateData.districts.map((d) => d.district);

      return res.json({
        level: "district",
        data: districts,
      });
    }

    // 3️⃣ Get schools based on district
    const selectedDistrict = stateData.districts.find(
      (d) => d.district === district
    );

    if (!selectedDistrict) {
      return res.status(404).json({ error: "District not found" });
    }

    const schools = selectedDistrict.schools.map((s) => s.name);

    return res.json({
      level: "school",
      data: schools,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;