const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5050;
require("dotenv").config();

//DB接続
try {
	mongoose.connect(
		process.env.MONGODB_URL,
		);
	console.log("DB接続成功");
}catch(error) {
	console.log("DB接続失敗");
}

//http://localhost:5050
app.get("/", (req, res) => {
	res.send("Hello World");
});

//ユーザー登録API

//ユーザーログインAPI

app.listen(PORT, () => {
	console.log("サーバ起動中")
});
