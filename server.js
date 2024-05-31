const express = require("express");
const { connectionToDb } = require("./config/db");

const authRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const attendeeRoutes = require("./routes/attendeeRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(express.json());

const port = 8080;

app.get("/", (req, res) => {
  res.send("This is home");
});

app.use("/user", authRoutes);
app.use("/event", eventRoutes);
app.use("/ticket", ticketRoutes);
app.use("/attendee", attendeeRoutes);
app.use("/feedback", feedbackRoutes);

app.listen(port, async () => {
  await connectionToDb();
  console.log(`Server is running on port ${port}  `);
});
