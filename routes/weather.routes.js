import express from 'express';

import { Weather } from '../model/weather.model.js';

const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { city,temperature } = req.body; // to get field names from frontend
        const weather = await Weather.create({ city: city, temperature: temperature });//1st name from frontend
        res.status(200).json(weather); 
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

router.get('/getweather' , async(req,res)=>{
    try {
        const getWeather = await Weather.find({});
        res.status(200).json(getWeather);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

router.get('/getweather/:city' , async(req,res)=>{
    try {
        const {city} = req.params;
        const getWeather = await Weather.findOne({city:city});
        res.status(200).json(getWeather);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

export default router