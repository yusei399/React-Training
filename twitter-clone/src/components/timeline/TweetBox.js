import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import db from "../../firebase";

function TweetBox(){
	const [tweeetMessage, settweeetMessage] = useState("");
	const [tweeetImage, settweeetImage] = useState("");

	const sendtweet = (e) => {
		e.preventDefault();
		
		addDoc(collection(db, "posts"),{
			displayname:"react学習",
			username:"Shin_Engineer",
			verified:true,
			text: tweeetMessage,
			avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
			image: tweeetImage,
			timestamp: serverTimestamp(),

		});

		settweeetMessage("");
		settweeetImage("");
	};
	return <div className="tweetBox">
		<form>
			<div className="tweetBox--input">
				<Avatar/>
				<input 
				value={tweeetMessage}
				placeholder="今どうしてる？" 
				type="text"  
				onChange={(e) => settweeetMessage(e.target.value)}
				></input>
			</div>
			<input
			value={tweeetImage}
			className="tweetBox--imageInput" 
			placeholder="画像のurlを入力してください" 
			type="text" 
			onChange={(e) => settweeetImage(e.target.value)}
			></input>

			<Button className="tweetBox--tweetButton" type="sumit" 
			onClick={sendtweet}>ツイートする</Button>
		</form>
	</div>
}

export default TweetBox;