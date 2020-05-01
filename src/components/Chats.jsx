import React from 'react';
import List from '@material-ui/core/List';
import {Chat} from './index';
import {createStyles, makeStyles} from "@material-ui/core/styles";


// Material UIのカスタマイズs
const useStyles = makeStyles(() =>
    createStyles({
        "chats": {
            height: "400px", //全体がheight: 592pxに対してanswerのheightが192なので引いて400
            padding: "0",
            overflow: "auto" // height400を変えるとスクロールバーが出るようになる。
        }
    }),
);


const Chats = (props) => {
	const classes = useStyles();  ///引数忘れんといて function userStyles() {} ってなるのだからarrow関数でも同じ!
	//文字列keyを設定してあげるのが最良のkey 慣習みたいなもの
	return(
		<List className={classes.chats}>
			{props.chats.map((chat, index)=>{
				return(
					<Chat text={chat.text} type={chat.type} key={index.toString()}/> 
					)
				})}
	    </List>
		);
}


export default Chats;