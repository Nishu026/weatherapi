import { mongoose , Schema } from "mongoose";

const weatherSchema = new Schema({
    city: String,
    temperature: Number
},{timestamps: true})

export const Weather = mongoose.model('Weather', weatherSchema)