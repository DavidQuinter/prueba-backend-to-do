import userData from "../models/user.model.js";

export const getUser = async(req, res) =>{
    const data = await userData()
    res.json(data)
}