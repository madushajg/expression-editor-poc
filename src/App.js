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
  const [expression, setExpression] = useState(["expression"]);

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
      <button value="var1" onClick={(e)=>props.expressionHandler([e.target.value])}>var1</button>
      <button value="var2" onClick={(e)=>props.expressionHandler([e.target.value])}>var2</button>
      <button value="var3" onClick={(e)=>props.expressionHandler([e.target.value])}>var3</button>
      <ComparisonButton exprs = {props.expressionHandler} />
      <LogicalButton exprs = {props.expressionHandler} />
    </div>
  );
}

function ExpressionTemplate(props) {
  const data = props.expression

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      {data.map(name => (  
          <button className="button1 App-expression-component">{name}</button>
      ))}
    </div>
  );
}


function ComparisonButton (props) {
  const template = ["expression1", ">", "expression2"]

  return (
    <button onClick={()=>props.exprs(template)}>Comparison</button>
  )
}

function LogicalButton (props) {
  const template = ["expression1", "==", "expression2"]

  return (
    <button onClick={()=>props.exprs(template)}>Logical</button>
  )
}

export default App;
