import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from '../../firebase';
import {collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";

function Timeline(){
	const [posts, setPosts] = useState([]);

	useEffect(()=>{
		const postData = collection(db, "posts");
		const q = query(postData, orderBy("timestamp", "desc"))
		// getDocs(q).then((querySnapshot) =>{
		// 	setPosts(querySnapshot.docs.map((doc) => doc.data()));
		// });
		onSnapshot(q, (querySnapshot) => {
			setPosts(querySnapshot.docs.map((doc) => doc.data()));
		})
	},[]);
	return (
	<div className="timeline">
		{/* Heder */}
		<div className="timeline--header">
			<h2>ホーム</h2>
			<TweetBox/>
			{posts.map((post) => (
				<Post
				key={post.text}
				displayname={post.displayname}
				username={post.username}
				verified={post.verified}
				text={post.text}
				avatar={post.avatar}
				image={post.image}
				/>
			))}
		</div>
	</div>
	);
}

export default Timeline;