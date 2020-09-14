const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Enquiry = require("../models/Enquiries");

// @route   POST /api/enquiries
// @desc    ENQUIRIES
// @access  private

router.post(
  "/",
  [check("name", "Please Provide Your Name").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      eventDesc,
      eventVenue,
    } = req.body;

    try {
      const newEnquiry = new Enquiry({
        name,
        email,
        phone,
        eventDate,
        eventType,
        eventDesc,
        eventVenue,
      });

      const enquiry = await newEnquiry.save();
      const enquiryResponse= {
        enquiry:enquiry,
        enquiryStatus:true
      }
      res.status(200).json(enquiryResponse);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
