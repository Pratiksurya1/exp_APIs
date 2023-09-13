const asyncEroorHandler = require('../middleware/asyncErrorHandler');
const userModel = require("../schema/user");
const { uuid } = require('uuidv4');


const getAll = asyncEroorHandler(async (req, res) => {
    // throw new Error('Big problem......!');
    users = await userModel.find();
    res.json(users);
});

const addUser = asyncEroorHandler(async (req, res) => {
    const user = new userModel(req.body);

    user.uId = uuid();
    const adduser = await user.save();

    res.status(200).json(adduser);
});

const getUserByuId = asyncEroorHandler(async (uId) => {
    return (await userModel.find({ uId: uId }));
});

const updateUser = asyncEroorHandler(async (req, res) => {
    const uId = req.body.uId;

    const result = await userModel.updateOne({ uId }, req.body);
    res.send(result);

    res.status(500).send(error);

});

const deleteUserByuId = asyncEroorHandler(async (uId) => {
    return await userModel.deleteOne({ uId })
});

module.exports = {
    getAll,
    addUser,
    getUserByuId,
    updateUser,
    deleteUserByuId,
}