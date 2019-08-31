import { connect as dbConnect } from './db';
import { connect as serverConnect } from './server';

dbConnect()
  .then(() => {
    serverConnect();
  });
