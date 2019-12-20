const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.get("Authorization");

    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Token inválida' })
            else req.decoded = decoded;
            next();
        })
    }
    else {
        res.send({
            message: 'Token no proveida'
        });
    }
}

module.exports = { verifyToken };