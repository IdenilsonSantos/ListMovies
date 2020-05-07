const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_KEY, (err, decoded) => {
            if (err) {
                res.status(403).json({ message: "Invalid auth token provided.", error: err.message });
            }
            else {
                req.decoded = decoded;
                next();
            }


        });
    } else {
        res.status(401).json({
            message: "Unauthorized"
        });
    }
}

module.exports = verifyToken;