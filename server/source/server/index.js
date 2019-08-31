import express from 'express';
import bparser from 'body-parser';

import { server } from '../config';

const { host, port } = server;

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: false }));

const handleSuccess = () => console.log('success');

/**
 * Try establish server connection
 * @public
 * @return {Object}
 */
export function connect() {
  return app.listen(port, host, handleSuccess);
}