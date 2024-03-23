import dotenv from 'dotenv';
const nodeEnv = process.env.NODE_ENV.trim();
dotenv.config({ path: `.env.${nodeEnv}`, debug: true });

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;

export const config = {
  server,
  database,
  port,
  authentication: {
    type,
  },
  options: {
    encrypt: true,
  },
};
