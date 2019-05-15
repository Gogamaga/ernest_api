const mongoose = require("../db");

const { COLLECTIONS } = require("../config");

const availableSchema = mongoose.Schema(
    {
        LWO: {
            type: []
        },
        FCO: {
            type: []
        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at' }
    }
);

module.exports = mongoose.model(COLLECTIONS.AVAILABLE, availableSchema);