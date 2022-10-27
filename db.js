import * as dotenv from 'dotenv'
dotenv.config()
import pg from 'pg'
const { Pool } = pg;

const { DBUSER, DATABASE_SERVER, MYDB, SECRETPASSWORD } = process.env

const pool = new Pool({
    user: DBUSER,
    host: DATABASE_SERVER,
    database: MYDB,
    password: SECRETPASSWORD,
})


export default pool