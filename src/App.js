import logo from './logo.svg';
import './App.css';
import SampleJsx from './Components/SampleJsx';
import NestedJsx from './Components/NestedJsx';
import ClassComponent from './Components/ClassComponent';
import JsxStyling from './Components/JsxStyling';
import JsxExpression from './Components/Jsxexpression';
import FunctionalComponent from './Components/FunctionalComponent';

function App() {
  return (
    <body>
      <div>
        <h1>This is the Main App component</h1>
        <SampleJsx/>
      </div>
      <div>
        <NestedJsx/>
      </div>
      <div>
        <JsxStyling/>
      </div>
      <div>
        <JsxExpression/>
      </div>
      <div>
        <FunctionalComponent/>
      </div>
      <div>
        <ClassComponent/>
      </div>
      </body>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
