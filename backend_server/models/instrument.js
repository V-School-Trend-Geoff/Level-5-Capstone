const mongoose = require("mongoose");

const InstrumentSchema = new mongoose.Schema({
    Volume: {
        type: String,
        required: true
    },
    Book: {
        type: String,
        required: true
    },
    Page: {
        type: String,
        required: true
    },
    RecDt: {
        type: Date,
        required: false
    },
    InstType: {
        type: String,
        enum: ['DEED', 'LIEN', 'PLAT'],
        required: true
    },
    Grantee: {
        type: String,
        required: false
    },
    Grantor: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Instrument", InstrumentSchema);