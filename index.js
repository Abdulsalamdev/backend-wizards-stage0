const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());

const PORT = process.env.PORT || 5000;
const CAT_FACT_API_URL = process.env.CAT_FACT_API_URL;

app.get("/me", async (req, res) => {
  try {
    const user = {
      email: "abdulsalamakinyoola@gmail.com",
      name: "Abdulsalam Akinyoola",
      stack: "Node.js/Express",
    };
    const timestamp = new Date().toISOString();
    const {data} = await axios.get(CAT_FACT_API_URL, { timeout: 5000 });


    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      status: "success",
      user,
      timestamp,
      fact: data.fact,
    });
    console.log(fact)
  } catch (error) {
    // Handle timeout error
    if (error.code === "ECONNABORTED") {
      return res.status(504).json({
        error: "Request to Cat Facts API timed out.",
      });
    }

    // Handle other errors
    if (error.response) {
      return res.status(error.response.status).json({
        error: `Failed to fetch cat fact. API responded with status ${error.response.status}.`,
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
