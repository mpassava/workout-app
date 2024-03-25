import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV.trim()}`, debug: true });
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();
const token = await credential.getToken("https://database.windows.net/.default");

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;
// const user = process.env.AZURE_SQL_USER;
// const password = process.env.AZURE_SQL_PASSWORD;

export const config = {
  server,
  database,
  port,
  authentication: {
    type: type,
    options: {
      token: token.token
    }
  },
  options: {
    encrypt: true,
  },
};

// export const config = {
//   server,
//   port,
//   database,
//   user,
//   password,
//   options: {
//     encrypt: true,
//   },
// };
