import React, { useState, Component } from "react";
import './App.css';

class App extends Component {
  render () {return (
      <div className="App">
        <LeftPane />
        <RightPane />
      </div>
    );
  }
}

class  LeftPane extends Component {
  render() {
    return (
      <div className="App-leftPane">
        <StatementPane />
        <ContextSensitivePane />
      </div>
    );
  } 
}
 
class  RightPane extends Component {
  render() {
    return (
      <div className="App-rightPane">
        <div className="App-shortcuts">
          <h2>Shortcuts</h2>
        </div>
      </div>
    );
  }
}

class  StatementPane extends Component {
  render() {
    return (
      <div className="App-statement-template">
        <h1>If statement</h1>
        <div className="App-statement-template-editor">
          <h3>if expression</h3>
        </div>
      </div>
    );
  }
}

class  ContextSensitivePane extends Component {
  render() {
    return (
      <div className="App-context-sensitivePane">
        <h2 style={{color: "green"}}>Suggestions</h2>
      </div>
    );
  }
}

export default App;
