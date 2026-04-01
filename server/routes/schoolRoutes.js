import express from "express";
import School from "../models/School.js";

const router = express.Router();

// ✅ GET ALL + FILTERED SCHOOLS
router.get("/schools", async (req, res) => {
  try {
    const { state, district, page = 1, limit = 10 } = req.query;

    let query = {};

    if (state) query.state = state;
    if (district) query.district = district;

    const skip = (page - 1) * limit;

    // ✅ Get paginated data
    const schools = await School.find(query)
      .skip(Number(skip))
      .limit(Number(limit))
      .lean();

    // ✅ Get total count
    const total = await School.countDocuments(query);

    res.json({
      data: schools,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET SINGLE SCHOOL
router.get("/schools/:id", async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }

    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET SINGLE SCHOOL BY NAME
router.get("/school/search", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) return res.status(400).json({ message: "Name is required" });

    // Search for first matching school
    const school = await School.findOne({ name: { $regex: name, $options: "i" } });

    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }

    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET STATES FOR FILTER DROPDOWN
router.get("/filters", async (req, res) => {
  try {
    const states = await School.distinct("state");

    res.json({ data: states });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;