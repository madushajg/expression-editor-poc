import React, { useState } from "react";

import './styles.css';

interface Expression {
  // type: "string" | "int" | "boolean"
  expressionType: 
    | Comparison
    | TypeCheck
    | Conditional
    | StringLiteral
}

interface StringLiteral {
  value: string
}

interface Comparison {
  lhs: Expression
  operator: ">" | "<"
  rhs: Expression
}

interface TypeCheck {
  lhs: Expression
  operator: "is"
  rhs: "string" | "int" | "float" | "boolean"
}

interface Conditional {
  condition: Expression
  trueExpr: Expression
  falseExpr: Expression
}

const stLtExpr : StringLiteral = {
  value: "someName"
}

const Expr : Expression = {
  expressionType: stLtExpr
}

const compExpr : Comparison = {
  lhs: Expr,
  operator: "<",
  rhs: Expr
}


const boolExpr : Expression = {
  type: "boolean",
  expressionType: compExpr
}


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

const conditionalExpression: ExpressionType = {
  kind: "conditionalExpression",
  template: ["expression", "?", "expression", ":", "expression"], // conditional expr has two templates
  supportedExprs: [] // suggestions, in Ui we show the vars and functions
}

const comparisonExpression: ExpressionType = {
  kind: "comparisonExpression",
  template: ["expression", "operator", "expression"], // how can we manage the operators
  supportedExprs: [conditionalExpression]
}

const logicalExpression: ExpressionType = {
  kind: "logicalExpression",
  template: ["expression", "operator", "expression"],
  supportedExprs: [comparisonExpression],
}

const ifElseExpression: ExpressionType = {
  kind: "ifElseExpression",
  template: ["expression"],
  supportedExprs: [comparisonExpression, logicalExpression],
  // recursive:true,
}

export function LeftPane() {
  const [selectedExpressionType, setSelectedExpressionType] = useState(ifElseExpression)

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

function ExpressionTemplate(props: { exprItem: ExpressionType, onClick: any}) {
  const { exprItem, onClick } = props;

  return (
    <div className="App-statement-template-editor">
      <div className="App-expression-block-disabled">if</div>
      {exprItem.template.map(templateItem => (
        <button className="button1 App-expression-component" onClick={() => onClick(exprItem)}>{templateItem}</button>
      ))}

    </div>
  );
}
