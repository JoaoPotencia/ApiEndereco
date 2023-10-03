import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listEnderecos } from './app/useCases/endereco/listEnderecos';
import { createEndereco } from './app/useCases/endereco/createEndereco';
import { listCidades } from './app/useCases/cidades/listCidades';
import { createCidade } from './app/useCases/cidades/createCidade';
import { listEnderecoByCidade } from './app/useCases/endereco/listEnderecoByCidade';
import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
export const router = Router();

//configuração do multer
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

//List categories
router.get('/listEnderecos', listEnderecos);

//Create category
router.post('/createEndereco', createEndereco);

//List products
router.get('/listCidades', listCidades);

//Create products
router.post('/createCidade', createCidade);

// //Get products by category
router.get('/enderecos/:cidadeId/cidades', listEnderecoByCidade);

//List orders
router.get('/listBairro', listBairro);

//Create orders
router.post('/createBairro', createBairro);

// //Delete/cancel order
// router.delete('/bairro/:bairroId', cancelBairro);
