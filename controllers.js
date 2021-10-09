const pgp = require('pg-promise')()
const username = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_PORT

const local_uri = `postgres://${username}:${password}@${host}:${port}/library`
const uri = process.env.DATABASE_URL


console.log(uri)
const db = pgp(uri)

async function addBook(book){
    const result = await db.query('INSERT INTO books(${this:name}) VALUES(${this:csv})', book)
    return book;
}

module.exports = {
    addBook
}
