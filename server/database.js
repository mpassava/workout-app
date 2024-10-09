import sql from "mssql";

// Errors will be handled within route handlers

export default class Database {
  config = {};
  pool = null;
  connected = false;

  constructor(config) {
    this.config = config;
    console.log(`database config: ${JSON.stringify(config)}`);

    process.on("SIGINT", () => {
      this.close();
      process.exit(0);
    });
  }

  // open connection
  async connect() {
    try {
      console.log("conneting to database...");
      if (this.connected === false) {
        this.pool = await sql.connect(this.config);
        this.connected = true;
        console.log("database connection esablished");
      } else {
        console.log("database already connected");
      }
    } catch (err) {
      console.error(`error connecting to database: ${err}`);
      throw err;
    }
  }

  // close connection
  async close() {
    try {
      if (!this.pool) return;
      this.pool.close();
      console.log("database connection closed");
    } catch (err) {
      console.error(`error closing database connection: ${err.message}`);
      throw err;
    }
  }

  // query DB
  async query(stmt) {
    await this.connect();
    const request = this.pool.request();
    const result = request.query(stmt);
    if (result.recordset) return result.recordset;
    if (result.recordsets) return result.recordsets;
    return result.rowsAfected;
  }

  // batch query
}
