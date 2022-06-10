import express from 'express';
import cors from 'cors';

import router from './router';
import { handleErrorLogging, handleNotFound } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorLogging);
app.use(handleNotFound);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});