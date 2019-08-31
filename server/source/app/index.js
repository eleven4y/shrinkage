import express from 'express';
import bparser from 'body-parser';

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: false }));

export default app;