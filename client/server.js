const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    // Demo credentials
    if (email === "admin@gmail.com" && password === "12345") {

        res.json({
            success: true,
            message: "Login Successful"
        });

    } else {

        res.status(401).json({
            success: false,
            message: "Invalid Email or Password"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});