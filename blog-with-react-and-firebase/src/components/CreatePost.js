import {React, useState} from "react";
import "./CreatePost.css"
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost =  () => {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const navigation = useNavigate();

	const createPost = async () => {
		await addDoc(collection(db, "posts"), {
			title: title,
			body: body,
			auther : {
				username : auth.currentUser.displayName,
				id : auth.currentUser.uid
			}
		})
		navigation("/");
	}

	return (
	<div className="createPostPage">
		<div className="createPostPage__container">
			<h1>投稿する</h1>
			<div div className="inputPost">
				<input type="text" placeholder="タイトル" onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div div className="inputPost">
				<textarea placeholder="本文" onChange={(e) => setBody(e.target.value)}></textarea>
			</div>
			<button className="postbutton" onClick={createPost}>投稿する</button>
		</div>
	</div>
);
}

export default CreatePost;