require('dotenv').config();

const softserver = require('./server.js');

const port = process.env.PORT || 9000;
softserver.listen(port, () => console.log(`Running on Port OVER ${port} !!! ... so Yay!`));
