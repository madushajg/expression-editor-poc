import React from "react";
import {LeftPane} from "./leftPane";
import {RightPane} from "./rightPane";

import './styles.css';

export function MainContainer() {
  return (
      <div className="App">
        <LeftPane />
        <RightPane />
      </div>
  );
}
