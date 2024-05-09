import { Response, Request } from "express"

export const home = (req:Request, res:Response) => {
	res.json({
		status_code: 200,
		msg: 'sucesso!'
	})
}

export const login = (req: Request, res: Response) => {
	res.json({
		status_code: 200,
		msg: 'login sucesso!'
	});
};