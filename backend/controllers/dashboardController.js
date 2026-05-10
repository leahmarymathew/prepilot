const Dashboard = require("../models/Dashboard");
const jwt = require("jsonwebtoken");

const getUserId = (req) => {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
};

const getDashboard = async (req, res) => {
    try {
        const userId = getUserId(req);
        let dashboard = await Dashboard.findOne({ userId });

        if (!dashboard) {
            dashboard = await Dashboard.create({
                userId,
                problemsSolved: 142,
                currentStreak: 12,
                rank: "Top 15%",
                hoursThisWeek: 8.5,
                dsaTopics: [
                    { name: "Arrays & Hashing", pct: 85, tags: ["Easy", "Medium"] },
                    { name: "Two Pointers", pct: 62, tags: ["Medium"] },
                    { name: "Sliding Window", pct: 45, tags: ["Medium", "Hard"] },
                    { name: "Trees & Graphs", pct: 30, tags: ["Hard"] },
                    { name: "Dynamic Programming", pct: 18, tags: ["Hard"] }
                ]
            });
        }

        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboard };
