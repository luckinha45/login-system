import {Router} from "express";
import cors from 'cors';
import * as controllers from 'controllers/authControllers'

export const router = Router();

router.use(
	cors({
		credentials: true,
 		origin: 'http://localhost:5173'
 	})
);

router.get('/', controllers.home);
router.get('/login', controllers.login);
