import React, { useState } from "react";
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
  const [expression, setExpression] = useState("expression");

  return (
    <div className="App-leftPane">
      <StatementPane expression = {expression} />
      <ContextSensitivePane expressionHandler = {setExpression}/>
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

function StatementPane(props) {
  return (
    <div className="App-statement-template">
      <h1>If statement</h1>
      <ExpressionTemplate expression = {props.expression}/>
    </div>
  );
}

function ContextSensitivePane(props) {
  return (
    <div className="App-context-sensitivePane">
      <h2 style={{color: "green"}}>Suggestions</h2>
      <button value="var1" onClick={(e)=>props.expressionHandler(e.target.value)}>var1</button>
      <button value="var2" onClick={(e)=>props.expressionHandler(e.target.value)}>var2</button>
      <button value="var3" onClick={(e)=>props.expressionHandler(e.target.value)}>var3</button>
    </div>
  );
}

function ExpressionTemplate(props) {

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      <div className="App-expression-block">{props.expression}</div>
    </div>
  );
}

export default App;
