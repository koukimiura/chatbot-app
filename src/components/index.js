
//エトリーポイント
// 複数のモジュールをexportとしているため{}名前つきを使っている。
export {default as AnswersList} from './AnswersList.jsx'; // componentsフォルダからexportされたものをこのファイル経由でexport

export {default as Answer} from './Answer.jsx'; // componentsフォルダからexportされたものをこのファイル経由でexport

export {default as Chats} from './Chats.jsx';

export {default as Chat} from './Chat.jsx';