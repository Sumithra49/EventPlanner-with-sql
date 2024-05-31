const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Create a new event
router.post("/events", eventController.createEvent);

// Get all events
router.get("/events", eventController.getAllEvents);

// Get a single event by ID
router.get("/events/:id", eventController.getEventById);

// Update an event
router.put("/events/:id", eventController.updateEvent);

// Delete an event
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;
