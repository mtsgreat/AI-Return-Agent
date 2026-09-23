const express = require("express");
const runReturnAgent = require("../agents/return.agent");

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const { message } = req.body;

    const response =
      await runReturnAgent(message);

    return res.json(response);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;