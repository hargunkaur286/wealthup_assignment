// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 5000; // Change this to your desired port

// const url="mongodb+srv://hargunkaur2863:dCzfjadhDtli737x@cluster0.k9quwwr.mongodb.net/?retryWrites=true&w=majority"

// app.use(express.json());

// async function connect(){
//   try{
//     await mongoose.connect(url);
//     console.log("Connected to MongoDB");
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// connect();
// // MongoDB connection
// // mongoose.connect('mongodb://localhost:27017/codeVerification', { useNewUrlParser: true, useUnifiedTopology: true });
// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB!');
// // });

// // Code Schema
// // const codeSchema = new mongoose.Schema({
// //   value: { type: String, unique: true },
// //   expiration: { type: Date },
// //   used: { type: Boolean, default: false },
// // });

// // const Code = mongoose.model('Code', codeSchema);

// // // API Routes
// // app.get('/api/codes', async (req, res) => {
// //   // Generate a new code
// //   const newCode = generateCode();
// //   const expiration = new Date();
// //   expiration.setSeconds(expiration.getSeconds() + 60); // 60 seconds expiry

// //   // Save the code to the database
// //   await Code.create({ value: newCode, expiration });

// //   res.json({ code: newCode });
// // });

// // app.post('/api/codes/use', async (req, res) => {
// //   const enteredCode = req.body.code;

// //   // Check if the code exists
// //   const code = await Code.findOne({ value: enteredCode });

// //   if (!code) {
// //     return res.status(400).json({ error: 'Enter a valid code' });
// //   }

// //   // Check if the code is already used
// //   if (code.used) {
// //     return res.status(400).json({ error: 'This code has already been used' });
// //   }

// //   // Check if the code is expired
// //   const now = new Date();
// //   if (now > code.expiration) {
// //     return res.status(400).json({ error: 'The code has expired' });
// //   }

// //   // Mark the code as used
// //   code.used = true;
// //   await code.save();

// //   res.json({ message: 'Code is correct' });
// // });

// // // Helper function to generate a random code
// // function generateCode() {
// //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //   const codeLength = 6;
// //   let result = '';
// //   for (let i = 0; i < codeLength; i++) {
// //     result += characters.charAt(Math.floor(Math.random() * characters.length));
// //   }
// //   return result;
// // }

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


import React from 'react'

const App = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default App

