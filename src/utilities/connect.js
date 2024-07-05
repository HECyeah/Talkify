import pg from "pg"

export default function connect() {

    const dp = new pg.Pool({
        connectionString: process.env.DB_CONNECTION
    })

    return dp
}