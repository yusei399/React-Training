import { Search } from "@mui/icons-material";
import React from "react";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import"./Widgets.css";

function Widgets(){
	return <div className="widgets">
		<div className="widgets--input">
			<Search className="widgets--serachIcon"/>
			<input placeholder="キーワード検索"  type="text"/>
			</div>
			<div className="widgets--Container">
				<h2>今どうしてる？</h2>
				<TwitterTweetEmbed tweetId=""/>
				<TwitterTimelineEmbed
				sourceType="profile" 
				screenName="Shin_Engineer" 
				options={{height:400}}/>
				<TwitterShareButton
				url={"https://twitter.com/Shin_Engineer"}
				options={{text: "#React.js勉強中", via:"Shin_Engineer"}}
				/>

			
		</div>
	</div>
}

export default Widgets;