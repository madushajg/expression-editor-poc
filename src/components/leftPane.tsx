import React, { useState } from "react";

import './styles.css';

interface ExpressionType {
  kind: string,
  // type: BallerinaTypes,
  parent?: ExpressionType,
  template: string[]
  supportedExprs: ExpressionType[],
  // recursive?: boolean
}

// interface BallerinaTypes {
//     string:string,
//     boolean:string
// }

const conditionalExpr: ExpressionType = {
  kind: "ConditionalExpression",
  template: ["expression", "?", "expression", ":", "expression"], // conditional expr has two templates
  supportedExprs: [] // suggestions, in Ui we show the vars and functions
}
// enum ComparisonOperatorTypes {
//     GREATER_THAN = ">",
//     LESS_THAN = "<",
//     EQUALITY = "==",
//     NOT_EQUAL = "!=",
//   }
// const comparisonOperators = {
//     operators : [">","<",]
// }

const comparisonExpr: ExpressionType = {
  kind: "comparisonExpression",
  template: ["expression", "operator", "expression"], // how can we manage the operators
  supportedExprs: [conditionalExpr]
}

const logicalExpr: ExpressionType = {
  kind: "logicalExpression",
  template: ["expression", "operator", "expression"],
  supportedExprs: [comparisonExpr],
}

const ifElseExprType: ExpressionType = {
  kind: "ifElseExpression",
  template: ["expression"],
  supportedExprs: [comparisonExpr, logicalExpr],
  // recursive:true,
}

export function LeftPane() {
  const [selectedExpressionType, setSelectedExpressionType] = React.useState(ifElseExprType)
  // const expressionMap = {
  //   expression: [
  //     {
  //       name: "var1",
  //       template: ["var1"],
  //       context: "variable"
  //     },
  //     {
  //       name: "var2",
  //       template: ["var2"],
  //       context: "variable"
  //     },
  //     {
  //       name: "var3",
  //       template: ["var3"],
  //       context: "variable"
  //     },
  //     {
  //       name: "comparison",
  //       template: ["expression1", "==", "expression2"],
  //       context: "comprisonExpression"
  //     },
  //     {
  //       name: "logical",
  //       template: ["expression1", "&&", "expression2"],
  //       context: "logicalExpression"
  //     }],
  //   comprisonExpression: [
  //     {
  //       name: "var1",
  //       template: ["var1"],
  //       context: "variable"
  //     },
  //     {
  //       name: "var2",
  //       template: ["var2"],
  //       context: "variable"
  //     },
  //     {
  //       name: "var3",
  //       template: ["var3"],
  //       context: "variable"
  //     },
  //     {
  //       name: "arithmatic",
  //       template: ["expression1", ">", "expression2"],
  //       context: "arithmaticExpression"
  //     },
  //     {
  //       name: "string template",
  //       template: ["string  `", "expression", "`"],
  //       context: "stringTemplate"
  //     }
  //   ],
  //   logicalExpression: [
  //     {
  //       name: "var1",
  //       template: ["var1"],
  //       context: "variable"
  //     },
  //     {
  //       name: "arithmatic",
  //       template: ["expression1", ">", "expression2"],
  //       context: "arithmaticExpression"
  //     },
  //     {
  //       name: "string template",
  //       template: ["string  `", "expression", "`"],
  //       context: "stringTemplate"
  //     }
  //   ],
  //   stringTemplate: [
  //     {
  //       name: "string template",
  //       template: ["string  `", "expression", "`"],
  //       context: "stringTemplate"
  //     }
  //   ]
  // };

  // const [expressionTemplate, setExpressionTemplate] = useState({
  //   template: ["expression"],
  //   expressionContext: ""
  // });

  // const [expressions, setExpressions] = useState({
  //   parentExpressions: [],
  //   activeExpression: ""
  // });

  // const onClickSuggestion = (template: any, context: any) => {
  //   setExpressionTemplate({
  //     template: template,
  //     expressionContext: context
  //   });
  // };

  // console.log(expressions.parentExpressions);

  return (
    <div className="App-leftPane">
        <StatementPane exprItem={selectedExpressionType} onClick={setSelectedExpressionType} />
        <div className="App-context-sensitivePane">
        <h2 style={{ color: "green" }}>Suggestions</h2>
        {selectedExpressionType.supportedExprs.map(expression => (
            <button onClick={() => setSelectedExpressionType(expression)}>{expression.kind}</button>
          ))}
      </div>
    </div>
  );
}

function StatementPane(props: { exprItem: ExpressionType, onClick: (tree: ExpressionType) => void }) {
  return (
    <div className="App-statement-template">
      <h1>If statement</h1>
      <ExpressionTemplate exprItem={props.exprItem} onClick={props.onClick}
      />
    </div>
  );
}

function ExpressionTemplate(props: { exprItem: ExpressionType, onClick: (tree: ExpressionType) => void }) {
  // const data = props.expressionTemplate.template
  const { exprItem, onClick } = props;
  // const onClickExpression = (parentExpression: any, name: any) => {
  //   props.expressionHandler({
  //     parentExpressions: [...props.expressions.parentExpressions, parentExpression],
  //     activeExpression: name
  //   });
  // };
  // console.log(data);

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      {exprItem.template.map(templateItem => (
        <button className="button1 App-expression-component">{templateItem}</button>
      ))}

    </div>
  );
}
