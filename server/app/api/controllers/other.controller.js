const other = require("../models/other.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createOther = async (req, res, next)=> {
    try {
        const newOther = new other();
        newOther.name = req.body.name;
        newOther.description = req.body.description;
        newOther.city = req.body.city;
        const OtherDb = await newOther.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { other: OtherDb }
        })
    } catch (error) {
        return next(error);
    }
};

const getAllOthers = async (req, res, next) => {
    try {
        const others = await other.find().populate("city");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { others: others }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createOther, getAllOthers }