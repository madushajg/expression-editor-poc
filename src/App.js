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
        template: ["var1"],
        context: "variable"
      },
      {
        name: "var2",
        template: ["var2"],
        context: "variable"
      },
      {
        name: "var3",
        template: ["var3"],
        context: "variable"
      },
      {
        name: "comparison",
        template: ["expression1", "==", "expression2"],
        context: "comprisonExpression"
      },
      {
        name: "logical",
        template: ["expression1", "&&", "expression2"],
        context: "logicalExpression"
      }],
    comprisonExpression: [
      {
        name: "var1",
        template: ["var1"],
        context: "variable"
      },
      {
        name: "var2",
        template: ["var2"],
        context: "variable"
      },
      {
        name: "var3",
        template: ["var3"],
        context: "variable"
      },
      {
        name: "arithmatic",
        template: ["expression1", ">", "expression2"],
        context: "arithmaticExpression"
      },
      {
        name: "string template",
        template: ["string  `", "expression", "`"],
        context: "stringTemplate"
      }
    ],
    logicalExpression: [
      {
        name: "var1",
        template: ["var1"],
        context: "variable"
      },
      {
        name: "arithmatic",
        template: ["expression1", ">", "expression2"],
        context: "arithmaticExpression"
      },
      {
        name: "string template",
        template: ["string  `", "expression", "`"],
        context: "stringTemplate"
      }
    ],
    stringTemplate: [
      {
        name: "string template",
        template: ["string  `", "expression", "`"],
        context: "stringTemplate"
      }
    ]
  };
  const [expressionTemplate, setExpressionTemplate] = useState({
    template: ["expression"],
    expressionContext: ""
  });
  const [expressions, setExpressions] = useState({
    parentExpressions: [],
    activeExpression: ""
  });

  const onClickSuggestion = (template, context) => {
    setExpressionTemplate({
      template: template,
      expressionContext: context
    });
  };

  console.log(expressions.parentExpressions);

  return (
    <div className="App-leftPane">
      <StatementPane 
        expressionTemplate = {expressionTemplate}
        expressionHandler = {setExpressions}
        expressions = {expressions}
      />
      <div className="App-context-sensitivePane">
      <h2 style={{color: "green"}}>Suggestions</h2>
      {expressionMap[expressionTemplate.expressionContext?expressionTemplate.expressionContext:"expression"].map((e, index) => (
        <button 
          key={index}
          onClick={() => onClickSuggestion(e.template, e.context)}>
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

function ExpressionTemplate(props) {
  const data = props.expressionTemplate.template
  const onClickExpression = (parentExpression, name) => {
    props.expressionHandler({
      parentExpressions: [...props.expressions.parentExpressions, parentExpression],
      activeExpression: name
    });
  };
  console.log(data);

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

export default App;
