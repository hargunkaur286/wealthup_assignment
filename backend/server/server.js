const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const url = "mongodb+srv://hargunkaur2863:dCzfjadhDtli737x@cluster0.k9quwwr.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connect();

// Code schema
const codeSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  used: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.model('Code', codeSchema);

// Generate a new code
app.get('/api/codes', async (req, res) => {
  try {
    const newCode = new Code({ code: generateCode() });
    await newCode.save();
    res.json({ code: newCode.code });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Use a code
app.post('/api/codes/use', bodyParser.json(), async (req, res) => {
  try {
    const { code } = req.body;
    const existingCode = await Code.findOne({ code });

    if (!existingCode) {
      return res.status(400).json({ error: 'Enter a valid code' });
    }

    if (existingCode.used) {
      return res.status(400).json({ error: 'This code has already been used' });
    }

    const now = new Date();
    const codeExpiration = new Date(existingCode.createdAt.getTime() + 60 * 1000);

    if (now > codeExpiration) {
      return res.status(400).json({ error: 'The code has expired' });
    }

    existingCode.used = true;
    await existingCode.save();

    res.json({ message: 'Code is correct' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Generate a random code
function generateCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
