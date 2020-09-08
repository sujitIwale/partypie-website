const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiries");

// @route   POST /api/getenquiries
// @desc    ENQUIRIES
// @access  private

router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ date: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
