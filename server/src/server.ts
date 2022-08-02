import express from 'express';
import cors from 'cors';

import config from './config';
import router from './router';
import { handleErrorLogging, handleNotFound } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json({limit : config.jsonSizeLimit}));

app.use(router);

app.use(handleNotFound);
app.use(handleErrorLogging);

const port = config.port;
app.listen(port, () => {
    console.log(`HTTP server running! Listening at port ${port}`);
});