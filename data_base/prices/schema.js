const mongoose = require("../db");

const { COLLECTIONS } = require("../config");

const pricesSchema = mongoose.Schema(
    {
        data:{
            type:[]
        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at' }
    }
);

module.exports = mongoose.model(COLLECTIONS.PRICES, pricesSchema);