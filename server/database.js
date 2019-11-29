const mongoose = require('mongoose');

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const iniciarBD = async ()=> {
    try {
        const bd = await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-lpsd0.mongodb.net/MERN?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log(`bd conectada satisfactoriamente`)
    } catch (error) {
        console.log(error)
    }

}

iniciarBD();

// mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-lpsd0.mongodb.net/MERN?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });
// .then(db => console.log('Conexion exitosa'))
// .catch(error => console.log(error));

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('bd conectada')
// })