import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import {router} from './routes/autRoutes';
import mongoose from "mongoose";


dotenv.config();

mongoose.connect(<string>process.env.DB_CONN_STRING)
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err))

const app = express();
const port = process.env.PORT;

app.use('/', router)

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});