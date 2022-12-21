//import logo from './logo.svg';
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import SampleJsx from './Components/SampleJsx';
import NestedJsx from './Components/NestedJsx';
import ClassComponent from './Components/ClassComponent';
import JsxStyling from './Components/JsxStyling';
import JsxExpression from './Components/Jsxexpression';
import FunctionalComponent from './Components/FunctionalComponent';
import FunctionalProps from './Components/FunctionalProps';
import ClassProps from './Components/ClassProps';
import States from './Components/States';
import Login from './Components/Login';
import Events from './Components/Events';
import ToggleEvent from './Components/ToggleEvent';
import ComponentLifecycle from './Components/ComponentLifecycle';
import ReactUseState from './Components/ReactUseState';

  
function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route index element={<NestedJsx/>}></Route>
    //   <Route path='sample' element={<SampleJsx/>}></Route>
    //   <Route path='login' element={<ClassComponent/>}></Route>
    // </Routes>
    // </BrowserRouter>
    <div>
      <div>
        <Login/>
      </div>
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
      <div>
        <FunctionalProps fname="Arun" lname="sundar"/>
        <FunctionalProps fname="Divish" lname="Kumar"/>
        <FunctionalProps fname="Kavi" lname="arasu">This is child Prop</FunctionalProps>
      </div>
      <div>
        <ClassProps userName="Divish K"/>
      </div>
      <div>
        <States/>
      </div>
      <div>
        <Events/>
      </div>
      <div>
        <ToggleEvent/>
      </div>
      <div>
        <ComponentLifecycle/>
      </div>
      <div>
        <ReactUseState/>
      </div>
      </div>


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
