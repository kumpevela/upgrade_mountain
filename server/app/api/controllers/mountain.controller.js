const Mountain = require("../models/Mountain.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createMountain = async ( req, res, next) => {
    try {
        const newMountain = new Mountain();
        newMountain.name = req.body.name;
        newMountain.system = req.body.system;
        newMountain.altitude = req.body.altitude;
        const MountainDb = await newMountain.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { Mountain: MountainDb.name }
        }) 
    } catch (error) {
        return next(error);        
    }
}

const getAllMountain = async (req, res, next) => {
    try {
        const mountain = await Mountain.find();
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { mountain: mountain }
        });
    } catch (error) {
        return next(error)
    }
}

const getMountainById = async (req, res, next) => {
    try {
        const { mountainId } = req.params;
        const mountainById = await Mountain.findById(mountainId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { mountain: mountainById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createMountain, getAllMountain, getMountainById };