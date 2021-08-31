import React, { useState } from "react";

import './styles.css';

export function LeftPane() {
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
  
    const onClickSuggestion = (template: any, context: any) => {
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
        {expressionMap[expressionTemplate.expressionContext?expressionTemplate.expressionContext:"expression"].map((e: { template: any; context: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
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

function StatementPane(props: { expressionTemplate: any; expressionHandler: any; expressions: any; }) {
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
  
function ExpressionTemplate(props: { expressionTemplate: { template: any; }; expressionHandler: (arg0: { parentExpressions: any[]; activeExpression: any; }) => void; expressions: { parentExpressions: any; activeExpression: string; }; }) {
  const data = props.expressionTemplate.template
  const onClickExpression = (parentExpression: any, name: any) => {
    props.expressionHandler({
      parentExpressions: [...props.expressions.parentExpressions, parentExpression],
      activeExpression: name
    });
  };
  console.log(data);

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      {data.map((name: {} | null | undefined, index: React.Key | null | undefined) => (
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
  