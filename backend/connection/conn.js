const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yashdeshpande29:dxIRClIY8owkgb57@blogweb0.byqwix8.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
    
};

module.exports = { connectDB };



