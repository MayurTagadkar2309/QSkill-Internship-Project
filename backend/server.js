const express = require("express");
const cors = require("cors");
const translate = require("translate-google");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/translate", async (req, res) => {
  try {
    const { text, target } = req.body;

    const translatedText = await translate(text, {
      to: target,
    });

    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Translation Failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});