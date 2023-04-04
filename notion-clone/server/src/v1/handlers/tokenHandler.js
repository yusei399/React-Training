const jwt = require("jsonwebtoken");
const User = require("../models/user");

//クライアントから渡されたJWTが正常であるかを検証するためのミドルウェア
const tokenDecoder = (req) => {
	const bearHeader = req.headers["authorization"];
	if (bearHeader)
	{
		const bearer = bearHeader.split(" ")[1];
		try {
			const decodedToken = jwt.verify(bearer, process.env.TOKEN_SECRET_KEY);
			return decodedToken;
		}
		catch (err) {
			return false;
		}
	}
	else {
		return false;
	}
}


//JWT認証を検証するためのミドルウェア
exports.verifyToken = async (req, res, next) => {
	const decodedToken = tokenDecoder(req);
	if (decodedToken) {
		const user = await User.findById(decodedToken.id);
		if (!user) {
			return res.status(401).json({error: "認証に失敗しました"});
		}
		req.user = user;
		next();
	}
	else {
		return res.status(401).json({error: "認証に失敗しました"});
	}
}
