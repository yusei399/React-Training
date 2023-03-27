import {React,  useEffect , useState} from "react";
import "./Home.css";
import { db } from "../firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

const Home = () => {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(collection(db, "posts"));
			console.log(data);
			setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		}
		getPosts();
	}, []);

	return (
		<div className="homepage">
		{postList.map((post) => {
			return (
					<div className="postContents">
						<div className="postHeader">
							<h1>{post.title}</h1>
						</div>
						<div className="postTextContainer">
							<p>{post.body}</p>
						</div>
						<div className="nameDeletebutton">
							<button className="deleteButton">削除</button>
						</div>
					</div>
				);
			})};
		</div>
	);
}

export default Home;
