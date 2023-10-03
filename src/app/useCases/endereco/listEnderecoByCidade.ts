import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';


export async function listEnderecoByCidade(req: Request, res: Response) {
	try {
		const {cidadeId} = req.params;
		const cidade = await Endereco.find().where('cidade').equals(cidadeId);

		res.json(cidade);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}