const { Pool } = require('pg');

const pool = new Pool({
    user: 'oaitojqp',
    host: 'mahmud.db.elephantsql.com',
    database: 'oaitojqp',
    password: 'dxJ2L-Ljo1a9RzxBx17sj6w9fisafcdn',
    port: 5432, // The default PostgreSQL port
    // Other optional settings:
    // max: 20, // Maximum number of clients in the pool
    // idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
});

module.exports = pool;

