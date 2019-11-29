require('dotenv').config();

const app = require('./app');
require('./database');

async function main (){
    await app.listen(app.get('port'));
    console.log(`running on http://127.0.0.1:${app.get('port')}`);
    
}

main();