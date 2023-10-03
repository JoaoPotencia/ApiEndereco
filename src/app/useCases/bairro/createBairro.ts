import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';


export async function createBairro(req: Request, res: Response) {
	try {
		const {nome} = req.body;

		const b = await Bairro.create({ nome });
		res.status(201).json(b);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}