const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Order = require("../models/order");
const Product = require("../models/product");

// Utility function to validate user credentials
async function validateAdmin(email, password) {
    return await User.findOne({ email, password, authority: "admin" }).select("email authority");
}

// Login route with admin authority check
router.get("/login", async (req, res) => {
    try {
        const { email, password } = req.query;
        const user = await validateAdmin(email, password);

        if (!user) return res.status(401).json({ error: "Invalid credentials or access denied" });

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Create Admin Route
router.post("/createAdmin", async (req, res) => {
    try {
        const { adminEmail, adminPassword, newAdminData } = req.body;

        // Validate requesting admin
        if (!(await validateAdmin(adminEmail, adminPassword))) {
            return res.status(403).json({ error: "Unauthorized action" });
        }

        // Validate new admin data
        const { email, password } = newAdminData || {};
        if (!email || !password) return res.status(400).json({ error: "Incomplete new admin data" });

        // Check if email already exists
        if (await User.exists({ email })) return res.status(409).json({ error: "User already exists" });

        // Create new admin
        const newAdmin = await User.create({ ...newAdminData, authority: "admin" });
        res.status(201).json({ message: "Admin created", newAdmin });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Admin home route
router.get("/allInfo", async (req, res) => {
    try {
        const orders = await Order.find().populate("products", "price name image");
        const products = await Product.find({}, "name price image");
        const users = await User.find({}, "email authority");

        // Calculate total sales & product stats
        const { totalOrders, totalSell, productStats } = orders.reduce(
            (acc, order) => {
                acc.totalOrders++;
                order.products.forEach((product, idx) => {
                    const productId = product._id.toString();
                    const sale = product.price * order.quantity[idx];
                    acc.totalSell += sale;

                    if (!acc.productSalesMap[productId]) {
                        acc.productSalesMap[productId] = {
                            name: product.name,
                            totalOrders: 0,
                            totalSell: 0,
                            image: product.image[0] || null,
                        };
                    }
                    acc.productSalesMap[productId].totalOrders++;
                    acc.productSalesMap[productId].totalSell += sale;
                });
                return acc;
            },
            { totalOrders: 0, totalSell: 0, productSalesMap: {} }
        );

        res.status(200).json({ totalSell, totalOrders, productStats: Object.values(productStats) });
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

// Get all orders
router.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find().populate("products userId", "name price email");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching orders" });
    }
});

// Update order status
const validStatuses = new Set(["Delivered", "Cancelled", "On The Way"]);

router.put("/orders/:orderId/status", async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if (!validStatuses.has(status)) return res.status(400).json({ error: "Invalid status" });

        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!order) return res.status(404).json({ error: "Order not found" });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: "Error updating status" });
    }
});

module.exports = router;
