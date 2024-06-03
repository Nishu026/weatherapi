import express from "express";
import cors from "cors";
const app = express();
import weatherRoutes from "./routes/weather.routes.js";

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/weather", weatherRoutes);



export default app;