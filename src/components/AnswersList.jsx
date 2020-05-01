import React from 'react';
import Answer from './Answer.jsx'

const AnswersList = (props) => {
 return(
 	<div className="c-grid__answer">
 	{props.answers.map((value, index) => {
		return(
			<Answer content= {value.content} key={index.toString()} nextId={value.nextId}　select={props.select}/> //同じコンポーネントを複数生成する時はkeyを渡す。
			)
 	})}
 	</div>


 	);
}

export default AnswersList;