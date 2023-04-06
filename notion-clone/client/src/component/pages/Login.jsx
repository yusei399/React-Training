import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {LoadingButton} from "@mui/lab";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { useState } from "react";
import { set } from "mongoose";


const Login = () => {
	const navigate = useNavigate();
	const [usernameErrorText, setUsernameErrorText] = useState("");
	const [passwordErrorText, setPasswordErrorText] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUsernameErrorText("");
		setPasswordErrorText("");
		
		const data = new FormData(e.target);
		const username = data.get('username').trim();
		const password = data.get('password').trim();
		console.log(username);
		console.log(password);

		let error = false;

		if (username === "") {
			error = true;
			setUsernameErrorText("お名前を入力してください");
		}
		if (password === "") {
			error = true;
			setPasswordErrorText("パスワードを入力してください");
		}


		if (error) {
			return;
		}
		setLoading(true);

		try {
			const response = await authApi.Login({
				username,
				password,
				confirmPassword,
			});
			setLoading(false);
			localStorage.setItem('token', response.token);
			console.log("新規登録に成功しました");
			navigate("/");
		}catch (error) {
			setLoading(false);
			const errors = error.data.errors;
			console.log(errors);
			errors.forEach((error) => {
				if (error.param === "username") {
					setUsernameErrorText(error.msg);
				}
				if (error.param === "password") {
					setPasswordErrorText(error.msg);
				}
			});
		}
	};

		//新規登録APIを叩く

	return (
		<>
		<Box component="form" onSubmit={handleSubmit} noValidate>
			<TextField fullWidth id="username" label="お名前" margin="normal" name="username" required helperText={usernameErrorText} error={usernameErrorText !== ""} disabled={loading}/>
			<TextField fullWidth id="password" label="パスワード" margin="normal" name="password" required helperText={passwordErrorText} error={passwordErrorText !== ""} disabled={loading}/>
			<LoadingButton sx={{mt : 3, mb : 2 }} fullWidth type="submit" loading={loading} color="primary" variant="outlined">ログイン</LoadingButton>
		</Box>
		<Button component={Link} to="/register">
			アカウントを持っていませんか？新規登録
		</Button>
		</>
	);
}
export default Login;
