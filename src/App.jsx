import React from 'react';
import defaultDataSet from './dataset.js';
import './assets/style/style.css';
import {AnswersList, Chats} from "./components/index.js"



export default class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataSet,
      open: false,
    }
    // コールバック関数をpropsで渡す時はbindする。
    this.selectAnswer = this.selectAnswer.bind(this)
  }


  // nextQuestionIdを受け取りchatsに次の質問を入れる
  displyaNextQuestion(nextQuestionId){
    const chats = this.state.chats
    
    const chat = {
          text: this.state.dataset[nextQuestionId].question, //選択されたnextQuestionIdのquestion
          type: "question",
        }

     chats.push(chat)
     
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentaId: nextQuestionId
    });
  }


  //answerが選択されたら呼び出される
  selectAnswer(selectedAnswer, nextQuestionId){
    switch(true){
      case (nextQuestionId === 'init'):
        this.displyaNextQuestion(nextQuestionId)
        break;
      default:
        const chats = this.state.chats; //1回目は[]の配列
        const chat = {
          text: selectedAnswer, //選択されたanswer 引数selectAnswer
          type: "answer",
        }

        chats.push(chat);
        
        //pushして更新 reactでは必ずsetStateでstateを変えなければならない。this.state.chats.push(chat)はNG 配列のstateに対して直接stateを書き換えてはならない。
        //選択されたanswerをchatsに入れる。
        this.setState({
          chats: chats
        });

        this.displyaNextQuestion(nextQuestionId)
        break;
    }
  }




  //初期のrenderメソッドが仮想DOMに納入された時点で呼び出される。
   componentDidMount(){
     const initAnswer = "";
     this.selectAnswer(initAnswer, this.state.currentId)
  }


  render() {
    return (
      <section className="c-section">

        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select = {this.selectAnswer}/> {/*　初期render時は空のstateが入る。*/}
        </div>
      </section>
  );
  }
}

