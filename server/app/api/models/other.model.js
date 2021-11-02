const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otherSchema = new Schema({
    name: { type: String, require: true},
    description: { type: String, require: true},
    city: [{ type: Schema.Types.ObjectId, ref:"mountain", requir: true}]    
})

const other = mongoose.model("other", otherSchema);
module.exports = other;