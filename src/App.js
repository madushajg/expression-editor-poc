import React, { useState, Component } from "react";
import './App.css';

function App() {
  return (
      <div className="App">
        <LeftPane />
        <RightPane />
      </div>
  );
}

function LeftPane() {
  return (
    <div className="App-leftPane">
      <StatementPane />
      <ContextSensitivePane />
    </div>
  );
}
 
function RightPane() {
  return (
    <div className="App-rightPane">
      <div className="App-shortcuts">
        <h2>Shortcuts</h2>
      </div>
    </div>
  );
}

function StatementPane() {
  return (
    <div className="App-statement-template">
      <h1>If statement</h1>
      <ExpressionTemplate />
    </div>
  );
}

function ContextSensitivePane() {
  return (
    <div className="App-context-sensitivePane">
      <h2 style={{color: "green"}}>Suggestions</h2>
    </div>
  );
}

function ExpressionTemplate() {
  return (
    <div className="App-statement-template-editor">
      <h3>if expression</h3>
    </div>
  );
}

export default App;
