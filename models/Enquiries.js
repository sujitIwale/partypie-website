const mongoose = require("mongoose");

const Enquiries = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
  },
  eventType: {
    type: String,
  },
  eventVenue: {
    type: String,
  },
  eventDesc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enquiry", Enquiries);
