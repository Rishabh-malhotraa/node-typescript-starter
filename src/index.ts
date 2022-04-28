import express from 'express';
import { PORT } from './config/keys';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
