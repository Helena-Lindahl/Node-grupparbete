const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;