const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socailnetwork',
    user: 'postgres',
    password: '191100',
});

pool.query(`
    UPDATE posts 
    SET loc = POINT(lng, lat)
    WHERE loc IS NULL;
`)
    .then(() => console.log("update complete"))
    .catch((err) => console.error(err.message));