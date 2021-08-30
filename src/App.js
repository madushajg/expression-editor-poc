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
  const expressionMap = {
    expression: [
      {
        name: "var1",
        template: ["var1"]
      },
      {
        name: "var2",
        template: ["var2"]
      },
      {
        name: "var3",
        template: ["var3"]
      },
      {
        name: "comparison",
        template: ["expression1", ">", "expression2"]
      },
      {
        name: "logical",
        template: ["expression1", "==", "expression2"]
      }]
  };
  const [expressionTemplate, setExpressionTemplate] = useState(["expression"]);
  const [context, setContext] = useState("");
  const [expressions, setExpressions] = useState({
    parentExpressions: [],
    activeExpression: ""
  });
  // console.log(expressionMap.expression);
  console.log(expressions.activeExpression);

  return (
    <div className="App-leftPane">
      <StatementPane 
        expressionTemplate = {expressionTemplate}
        expressionHandler = {setExpressions}
        expressions = {expressions}
      />
      {/* <ContextSensitivePane expressionHandler = {setExpression}/> */}
      <div className="App-context-sensitivePane">
      <h2 style={{color: "green"}}>Suggestions</h2>
      {expressionMap[expressions.activeExpression?expressions.activeExpression:"expression"].map((e, index) => (
        <button 
          key={index}
          onClick={()=>setExpressionTemplate(e.template)}>
          {e.name}
        </button>
      ))}
    </div>
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
      <ExpressionTemplate 
        expressionTemplate = {props.expressionTemplate}
        expressionHandler = {props.expressionHandler}
        expressions = {props.expressions}
      />
    </div>
  );
}

// function ContextSensitivePane(props) {
//   return (
//     <div className="App-context-sensitivePane">
//       <h2 style={{color: "green"}}>Suggestions</h2>
//       <button value="var1" onClick={(e)=>props.expressionHandler([e.target.value])}>var1</button>
//       <button value="var2" onClick={(e)=>props.expressionHandler([e.target.value])}>var2</button>
//       <button value="var3" onClick={(e)=>props.expressionHandler([e.target.value])}>var3</button>
//       <ComparisonButton exprs = {props.expressionHandler} />
//       <LogicalButton exprs = {props.expressionHandler} />
//     </div>
//   );
// }

function ExpressionTemplate(props) {
  const data = props.expressionTemplate
  const onClickExpression = (parentExpression, name) => {
    props.expressionHandler({
      parentExpressions: [...props.expressions.parentExpressions, parentExpression],
      activeExpression: name
    });
  };

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      {data.map((name, index) => (
          <button 
            key={index}
            className={"button1 App-expression-component " + (props.expressions.activeExpression === name ? "App-expression-component-active"
              : props.expressions.activeExpression === "" && index === 0 ? "App-expression-component-active" : "")}
            onClick={() => onClickExpression(data, name)}>
            {name}
          </button>
      ))}
    </div>
  );
}


// function ComparisonButton (props) {
//   const template = ["expression1", ">", "expression2"]

//   return (
//     <button onClick={()=>props.exprs(template)}>Comparison</button>
//   )
// }

// function LogicalButton (props) {
//   const template = ["expression1", "==", "expression2"]

//   return (
//     <button onClick={()=>props.exprs(template)}>Logical</button>
//   )
// }

export default App;
