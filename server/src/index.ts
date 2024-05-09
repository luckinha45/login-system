import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import {router} from './routes/autRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/', router)

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});