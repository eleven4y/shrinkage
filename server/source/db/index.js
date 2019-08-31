import mongoose from 'mongoose';

import { database } from '../config';

import createHandler from './handlers';

const { name, host, port, base, options: connectionOptions } = database;

const connectionString = `${name}://${host}:${port}/${base}`;

const handler = createHandler(name, connectionString);

mongoose.connection
  .on('connecting', handler.connecting)
  .on('connected', handler.connected)
  .on('disconnected', handler.disconnected)
  .on('error', handler.error);

/**
 * Try establish database connection
 * @public
 * @return {Promise}
 */
export function connect() {
  return mongoose.connect(connectionString, connectionOptions);
}
