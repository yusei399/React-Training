import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
	const navigate = useNavigate();
	const Googlelogin = () => {
		console.log("Googleログイン");
		signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem("isAuth", true);
			setIsAuth(true);
			console.log(result);
			navigate("/");
		});
	};

	return (
	<div>
		<p>ログインして始める</p>
		<button onClick={Googlelogin}>Googleでログイン</button>
	</div>
	);
}

export default Login;