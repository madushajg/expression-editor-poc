// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// #################################################################################################

// import React, { useState, Component } from "react";
// import './App.css';

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   return (
//     <div className="App">
//       <div className="App-leftPane">
//         <div className="App-statement-template">
//           <h1>If statement</h1>
//           <div className="App-statement-template-editor">
//             <h3>if expression</h3>
//           </div>
//         </div>
//         <div className="App-context-sensitivePane">
//           <h2 style={{color: "green"}}>Suggestions</h2>
//         </div>
//       </div>
//       <div className="App-rightPane">
//         <div className="App-shortcuts">
//           <h2>Shortcuts</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// #################################################################################################




import React, { useState, Component } from "react";
import './App.css';

class App extends Component {
  render () {return (
      <div className="App">
        <div className="App-leftPane">
          <div className="App-statement-template">
            <h1>If statement</h1>
            <div className="App-statement-template-editor">
              <h3>if expression</h3>
            </div>
          </div>
          <div className="App-context-sensitivePane">
            <h2 style={{color: "green"}}>Suggestions</h2>
          </div>
        </div>
        <div className="App-rightPane">
          <div className="App-shortcuts">
            <h2>Shortcuts</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
