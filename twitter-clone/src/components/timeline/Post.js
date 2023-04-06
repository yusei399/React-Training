import { ChatBubbleOutline,FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css"

function Post({displayname, username, verified, text, image, avatar}){
	return <div className='post'>
		<div className='post--avatar'>
			<Avatar src={avatar}/>
		</div>
		<div className='post--boby'>
			<div className='post--header'>
				<div className='post--headerText'>
					<h3>
						{displayname}
					<span className='post--headerSpecial'>
						<VerifiedUser className='post--badge'/>
						@{username}
					</span>
					</h3>
				</div>
				<div className='post--headerDescription'>
					<p>{text}</p>
				</div>
			</div>
			<img src={image}></img>
			<div className='post--footer'>
				<ChatBubbleOutline fontSize='small'/>
				<Repeat fontSize='small'/>
				<FavoriteBorder fontSize='small'/>
				<PublishOutlined fontSize='small'/>
			</div>
		</div>
	</div>
}

export default Post;