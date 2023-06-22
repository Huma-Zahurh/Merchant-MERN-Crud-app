const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const nodemon = require("nodemon");
const URI = process.env.URI;

const port = 3001;
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// scheme
const schema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Education: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
});

//      model
const Merchant = mongoose.model("Merchant", schema);

//====================================== Routes ============================================

// Route1: Get all merchants
app.get("/api/get-merchants", async (req, res) => {
  try {
    const merchants = await Merchant.find();
    res.json(merchants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route2: Get single merchant
app.get("/api/merchant/:id", async (req, res) => {
  try {
    const merchants = await Merchant.findById(req.params.id);
    res.json(merchants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route3: Adding a new merchant
app.post("/api/add-merchants", async (req, res) => {
  const { Name, Email, Education, Age, Gender } = req.body;
  try {
    const merchant = new Merchant({ Name, Email, Education, Age, Gender });
    const savedMerchant = await merchant.save();
    res.status(200).json(savedMerchant);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route4: Delete merchants
app.delete("/api/delete-merchants/:id", async (req, res) => {
  try {
    const merchants = await Merchant.findByIdAndDelete(req.params.id);
    res.json(merchants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route5: update merchants
app.put("/api/merchants/:id", async (req, res) => {
  let id = req.params.id;
  let { Name, Email, Education, Age, Gender } = req.body;
  try {
    const savedMerchant = await Merchant.findByIdAndUpdate(id, {
      Name,
      Email,
      Education,
      Age,
      Gender,
    });
    res.status(200).json(savedMerchant);
  } catch (error) {
    res.status(500).send(error);
  }
});

//===============================  Database (MonhoDB)  ===================================

// database Connection

mongoose
  .connect(URI)
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to Connect with MongoDB", error);
    process.exit(0);
  });

app.listen(port, () => {
  console.log(`Server started successfully at port ${port}`);
});
