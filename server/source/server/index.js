import express from 'express';
import bparser from 'body-parser';

import { server } from '../config';

import createHandler from './handlers';

const { name, host, port } = server;

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: false }));

/**
 * Try establish server connection
 * @public
 * @return {Object}
 */
export function connect() {
  const handler = createHandler(name, host, port);

  return app.listen(port, host, handler.connected);
}