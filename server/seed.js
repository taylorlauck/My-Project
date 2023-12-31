
const pool = require('./database'); 




async function createTables() {
    try {
         //Create accounts table
        await pool.query(`
           CREATE TABLE accounts (
               username VARCHAR(50) NOT NULL,
                password VARCHAR(72) NOT NULL,
                CONSTRAINT accounts_password_key UNIQUE (password),
                CONSTRAINT accounts_username_key UNIQUE (username)
            );
        `);
     
        console.log('Accounts table created in ElephantSQL.');

      

// Create artworks table and sequence
await pool.query(`
CREATE SEQUENCE artworks_artwork_id_seq;
CREATE TABLE artworks (
    artwork_id VARCHAR(255) PRIMARY KEY NOT NULL DEFAULT nextval('artworks_artwork_id_seq'),
    slug VARCHAR(255) NOT NULL,
  
);
`);


        // Create favorites table
        await pool.query(`
            CREATE TABLE favorites (
                username VARCHAR(50) NOT NULL,
                artworkid VARCHAR(500) NOT NULL,
               slug VARCHAR(255) NOT NULL,
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
