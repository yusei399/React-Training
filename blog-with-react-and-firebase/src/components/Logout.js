import { signOut } from "firebase/auth";
import React from "react";
import { auth} from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({setIsAuth}) => {
	const navigate = useNavigate();
	const Googlelogout = () => {
		//ログアウト処理
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			console.log("ログアウトしました");
			navigate("/login");
		});
	};

	return (
	<div>
		<p>ログアウト</p>
		<button onClick={Googlelogout}>Googleログアウト</button>
	</div>
	);
}

export default Logout;