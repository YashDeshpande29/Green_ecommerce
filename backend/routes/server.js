require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('../models/product');
// const router = require('./auth');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());



const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
console.log(GEMINI_API_KEY);
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`

router.post('/recommend', async (req, res) => {
    try {
        const { prompt } = req.body;

        const products = await Product.find({});
        const context = `You are an AI assistant for an agricultural eCommerce store. 
        Suggest products based on user needs. Here is the product catalog: 
        ${JSON.stringify(products)}.`;

        const fullPrompt = `${context}\nUser: ${prompt}\nAI:`;

        const response = await axios.post(GEMINI_API_URL, { 
            contents: [{ role: "user", parts: [{ text: fullPrompt }] }] 
        });

        console.log("Gemini API Response:", response.data);

        // Extract AI-generated text from candidates[0].content.parts[0].text
        const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";

        res.json({ output: aiResponse }); // Send extracted text to frontend
    } catch (error) {
        console.error("Error from Gemini API:", error.response?.data || error.message);
        res.status(500).json({ error: "AI service error" });
    }
});



module.exports = router;
