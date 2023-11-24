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
  code: { type: String, unique: true},
  used: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.model('Code', codeSchema);

function generateCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}


app.get('/api/codes', async (req, res) => {
  try {
    let newCode;
    let isCodeUnique = false;

    // Ensure the generated code is unique
    while (!isCodeUnique) {
      newCode = generateCode();
      console.log('Generated Code:', newCode); // Log the generated code

      const existingCode = await Code.findOne({ code: newCode });

      if (!existingCode) {
        isCodeUnique = true;
      }
    }

    // Save the unique code to the database
    const codeDocument = new Code({ code: newCode });
    await codeDocument.save();
    console.log('New Code Saved:', codeDocument);

    // Respond with the unique code
    res.json({ code: newCode });
  } catch (error) {
    if (error.code === 11000) {
      console.error('Duplicate key error:', error);
      res.status(500).json({ error: 'Duplicate key error' });
    } else {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});




app.post('/api/codes/use', bodyParser.json(), async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { code } = req.body;

    console.log('Received code:', code);

    if (!code) {
      return res.status(400).json({ error: 'Code is missing in the request' });
    }

    const existingCode = await Code.findOne({ code: code });

    console.log('Existing Code:', existingCode); // Add this line for logging


    if (!existingCode) {
      return res.status(400).json({ error: 'Enter a valid code' });
    }

    if (existingCode.used) {
      console.log('Code has already been used'); // Add this line for logging
      return res.status(400).json({ error: 'This code has already been used' });
    }

    const now = new Date();
    const codeExpiration = new Date(existingCode.createdAt.getTime() + 60 * 1000);

    if (now > codeExpiration) {
      return res.status(400).json({ error: 'The code has expired' });
    }

    existingCode.used = true;
    await existingCode.save();

    // Generate a new code without saving it immediately
    const newCode = generateCode();

    res.json({ message: 'Code is correct', newCode });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
