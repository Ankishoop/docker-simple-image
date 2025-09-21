import express from "express";

// Initialize the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// A basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Example of a POST route

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
