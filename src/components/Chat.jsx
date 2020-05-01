import React from 'react';
import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Torahack from '../assets/img/torahack.png';

const Chat = (props) => {
	const isQuestion = (props.type === "question"); // trueかfalseを格納  右か左かを選定
	
	const classes = isQuestion ? 'p-chat__row': 'p-chat__reverse';
	console.log(classes)
	return (
			<ListItem className={classes} >
	        	<ListItemAvatar>
		        	{isQuestion? (
		        		<Avatar alt="icon" src={Torahack} />
		        	) : (
		        		<Avatar alt="icon" src={NoProfile}/>
		        	)}
		        </ListItemAvatar>

		        <div className="p-chat__bubble">{props.text}</div>
		      </ListItem>
		);
}

export default Chat;