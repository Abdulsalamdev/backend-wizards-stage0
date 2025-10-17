const express = require("express");
const axios = require("axios");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();
app.use(cors());

const CAT_FACT_API_URL = process.env.CAT_FACT_API_URL;

// Root endpoint
app.get("/", (req, res) => {
  res.send("🚀 Backend Wizard API is live on Netlify!");
});

// /me endpoint
app.get("/me", async (req, res) => {
  try {
    const user = {
      email: "abdulsalamakinyoola@gmail.com",
      name: "Abdulsalam Akinyoola",
      stack: "Node.js/Express",
    };

    const timestamp = new Date().toISOString();
    const { data } = await axios.get(CAT_FACT_API_URL, { timeout: 5000 });

    res.status(200).json({
      status: "success",
      user,
      timestamp,
      fact: data.fact,
    });
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      return res.status(504).json({ error: "Request to Cat Facts API timed out." });
    }

    if (error.response) {
      return res
        .status(error.response.status)
        .json({ error: `Failed to fetch cat fact: ${error.response.status}.` });
    }

    res.status(500).json({ error: "Something went wrong." });
  }
});

// Export handler
module.exports.handler = serverless(app);
