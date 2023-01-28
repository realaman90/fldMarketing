const Services = require('../models/fld.servisces');
const {StatusCodes} = require('http-status-codes');
const { default: mongoose } = require('mongoose');
const CustomError = require('../errors');

const createService = async (req, res) => {
    const data = req.body;
    

    const service = await Services.create(data);
    res.status(StatusCodes.CREATED).json(service);

};

const getAllServicesShort = async (req, res) => {
    const services = await Services.aggregate([{"$project":{
        "_id":1,
        "shortDescription":1,
    }}]);

    res.status(StatusCodes.OK).json({data:services});
};

const getServiceLong = async (req,res) =>{
    const {id} = req.params;
    
    const service = await Services.aggregate([
        {
            $match:{
                "_id": mongoose.Types.ObjectId(id)
            }
        },{
        $project:{
            "_id":1,
            "longDescription":1
        }
    },
    ]);
    res.status(StatusCodes.OK).json({data:service})
};

const editService = async(req,res) =>{
    console.log('hello')
    const {id} = req.params;
    const modifiedData = req.body;
    let modifiedResp = null;

    try {
        modifiedResp = await Services.updateOne({
            _id:id
        },{
            $set: modifiedData
        })
    } catch (error) {
        throw new CustomError.BadRequestError('Failed to update the service')
    }
    if(!modifiedResp.modifiedCount){
        throw new CustomError.BadRequestError('Something went wrong')
    };

    return res.status(StatusCodes.OK).json(modifiedResp);
};

const deleteService = async (req,res) => {
    const {id} = req.params;
    try {
        const service = await Services.deleteOne({
            _id: id
        })
    } catch (error) {
        throw new CustomError.BadRequestError('Failed')
    };
    res.status(StatusCodes.OK).json({msg:'deleted'})
};

module.exports = {
    createService,
    getAllServicesShort,
    getServiceLong,
    editService,
    deleteService,
}