import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';


export async function listBairro(req: Request, res: Response) {
	try {
		const b = await Bairro.find();

		res.json(b);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}