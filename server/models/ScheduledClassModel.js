const mongoose = require("mongoose");

const scheduledClassSchema = new mongoose.Schema({
    degree: {
        type: String,
        trim: true,
        required: true,
    },
    paperName: {
        type: String,
        trim: true,
        required: true,
    },
    assignedStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: String, // e.g. "2025-05-07"
        required: true,
    },
    time: {
        type: String, // e.g. "14:30"
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("ScheduledClass", scheduledClassSchema);
