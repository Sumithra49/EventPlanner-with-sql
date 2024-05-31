const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Create feedback for an event and attendee
router.post(
  "/events/:eventId/attendees/:attendeeId/feedback",
  feedbackController.createFeedback
);

// Get all feedback for a specific event
router.get(
  "/events/:eventId/feedback",
  feedbackController.getAllFeedbackForEvent
);

// Get all feedback given by a specific attendee
router.get(
  "/attendees/:attendeeId/feedback",
  feedbackController.getAllFeedbackByAttendee
);

module.exports = router;
