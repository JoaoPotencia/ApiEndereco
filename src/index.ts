import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

// realiza a conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		// tenta executar este codigo
		const app = express();
		const port = 3000;

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	// caso ocorra algum erro, exibe a mensagem de erro
	.catch(() => console.log('Erro ao conectar no mongoDb'));