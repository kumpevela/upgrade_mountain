const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MountainSchema = new Schema(
    {
        name: {type: String, require: true},
        system: { type: String, require: true},
        altitude: {type: Number, require: true}
    },
    { timestamps: true }
);

const Mountain = mongoose.model("mountain", MountainSchema);
module.exports = Mountain;