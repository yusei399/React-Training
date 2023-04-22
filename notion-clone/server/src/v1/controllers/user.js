const JWT = require("jsonwebtoken");
const CryptJS = require("crypto-js");
const User = require("../models/user");

exports.register = async (req, res) => {
	const password = req.body.password;
	try {
		req.body.password = CryptJS.AES.encrypt(password, process.env.SECRET_KEY);
		const user = await User.create(req.body);
		//JWTトークンを発行
		const token = JWT.sign({id: user._id}, process.env.TOKEN_SECRET_KEY, {expiresIn: "24h"});
		res.status(200).json({user, token});
	}catch(error) {
		return res.status(500).json(error);
	}
}


exports.login = async (req, res) => {
	const {username, password }= req.body;
	console.log("username", username);
	console.log("password", password);

	try {
		const user = await User.findOne({username}).select("password username");
		console.log("user", user);
		if(!user) {
			return res.status(401).json(
				{
					param: "username",
					message: "ユーザーが見つかりません"
			});
		}
		//パスワードの復号化
		const decryptedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_KEY
			).toString(CryptoJS.enc.Utf8);
		  //パスワード適合チェック
		console.log("decryptedPassword", decryptedPassword);
		console.log("password", password);
		if (decryptedPassword !== password) {
			res.status(401).json({
				errors: [
				{
					param: "username",
					msg: "ユーザー名かパスワードが無効です。",
				},
				],
			});
			}
		user.password = undefined;
		//JWTトークンを発行
		const token = JWT.sign({id: user._id}, process.env.TOKEN_SECRET_KEY, {expiresIn: "24h"});
		console.log("token", token);
		res.status(200).json({user, token});
	}catch(error) {
		console.log("catch_error");
		return res.status(500).json(error);
	}
}