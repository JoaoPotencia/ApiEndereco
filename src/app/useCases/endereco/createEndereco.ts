import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';


export async function createEndereco(req: Request, res: Response) {
	try {
		const {nome, numero, bairro, cidade, complemento} = req.body;
		const endereco = await Endereco.create({nome, numero, bairro, cidade, complemento});
		
		res.status(201).json(endereco);

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}