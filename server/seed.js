
const pool = require('./database'); 




async function createTables() {
    try {
        // Create accounts table
        //await pool.query(`
         //   CREATE TABLE accounts (
             //   username VARCHAR(50) NOT NULL,
             //   password VARCHAR(72) NOT NULL,
              //  CONSTRAINT accounts_password_key UNIQUE (password),
              //  CONSTRAINT accounts_username_key UNIQUE (username)
           // );
       // `);
     //
     //   console.log('Accounts table created in ElephantSQL.');

      

        // Create favorites table
        await pool.query(`
            CREATE TABLE favorites (
                username VARCHAR(50) NOT NULL,
                artworkid VARCHAR(500) NOT NULL,
                slug VARCHAR(255) NOT NULL,
                title VARCHAR(255) NOT NULL,
                image_url VARCHAR(500) NOT NULL,
                CONSTRAINT username_artwork_unique UNIQUE (username, artworkid),
                CONSTRAINT favorites_username_fkey FOREIGN KEY (username) REFERENCES accounts(username)
            );
        `);
        console.log('Favorites table created in ElephantSQL.');
    } catch (error) {
        console.error('Error creating tables:', error);
    } finally {
        pool.end();
    }
}

createTables();
