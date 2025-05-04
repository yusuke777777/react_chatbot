import React from 'react';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers: [],
      chats:[],
      currentId: "init",
      dataset:{defaultDataset},
      open: false
    }
  }
  render() {
    return (
    <div>
      <section className='.c-secction'>
        <div className='.c-box'>
          "this.state.currentId"
        </div>
      </section>
    </div>
    );
  }
}

