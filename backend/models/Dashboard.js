const mongoose = require("mongoose");

const dsaTopicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pct: { type: Number, default: 0 },
    tags: { type: [String], default: [] }
});

const dashboardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    problemsSolved: { type: Number, default: 0 },
    currentStreak: { type: Number, default: 0 },
    rank: { type: String, default: "Unranked" },
    hoursThisWeek: { type: Number, default: 0 },
    dsaTopics: [dsaTopicSchema]
});

module.exports = mongoose.model("Dashboard", dashboardSchema);
