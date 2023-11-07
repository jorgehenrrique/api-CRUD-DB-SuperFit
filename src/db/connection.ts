import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();
const { DB_USER, DB_HOST, DB_NAME, DB_PASS, DB_PORT } = process.env;

function createDBClient() {
  return new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: Number(DB_PORT),
  });
}

export default createDBClient;
