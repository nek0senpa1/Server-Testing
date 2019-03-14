// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './databee/DevDB.sqlite3'
    },
    useNullAsDefault: true,
  },

  
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './databee/TesDB.sqlite3',
    },
    useNullAsDefault: true,
  }

};
