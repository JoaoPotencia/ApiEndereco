import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';


export async function listEnderecos(req: Request, res: Response) {
	try {
		const endereco = await Endereco.find();

		res.json(endereco);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}