const passportJwt = require('passport-jwt');
// const userController = require('../controllers/userController')
// const extractJwt = require('passport-jwt');

let jwtOptions = {

    secretOrKey: process.env.SECRET - KEY,
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = new passportJwt.Strategy(jwtOptions, (jwtPayload, next) => {
    
    // const user = 
    
    userController
        .signin({ id: jwtPayload.id })
        .then(usuario => {
            if (!usuario) {
                log.info(
                    `JWT token no es válido. Usuario con id ${jwtPayload.id} no existe.`
                );
                next(null, false);
                return;
            }

            log.info(
                `Usuario ${
                usuario.username
                } suministro un token valido. Autenticación completada.`
            );
            next(null, usuario);
        })
        .catch(err => {
            log.error('Error ocurrió al tratar de validar un token.', err);
            next(err);
        });
});
})