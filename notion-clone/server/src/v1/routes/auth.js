const router = require("express").Router();
const { body } = require("express-validator");
const User = require("../models/user");
require("dotenv").config();
const validation = require("../handlers/validation");
const userController = require("../controllers/user");
const tokenHandler = require("../handlers/tokenHandler");



router.post("/register",
		body("username").isLength({min : 8}).withMessage("ユーザーネームは8文字いじょうである必要があります"),
		body("password").isLength({min : 8}).withMessage("パスワードは8文字以上である必要があります"),
		body("confirmPassword").isLength({min : 8}).withMessage("パスワードは8文字以上である必要があります"),
		body("username").custom((value) => {
			return User.findOne({username: value}).then((user) => {
				if(user) {
					return Promise.reject("ユーザーネームが既に存在しています");
				}
			})
		}),
		validation.validate,
		userController.register
);

//ログインAPI
router.post("/login",
			// console.log("ログインAPI"),
			body("username").isLength({min : 8}).withMessage("ユーザーネームは8文字いじょうである必要があります"),
			body("password").isLength({min : 8}).withMessage("パスワードは8文字以上である必要があります"),
			// validation.validate,
			userController.login
);

//JWT認証API
router.post("/verify-token",tokenHandler.verifyToken ,(req, res) => {
	return res.status(200).json({user: req.user});
});


module.exports = router;