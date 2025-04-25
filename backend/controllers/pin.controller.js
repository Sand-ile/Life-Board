import Pins from '../models/pin.model.js'

export const getPins = async (req, res)=> {
 const pins = await Pins.find();

 res.status(200).json(pins);
}