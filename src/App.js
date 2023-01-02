//import logo from './logo.svg';
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import SampleJsx from './components/SampleJsx';
import NestedJsx from './components/NestedJsx';
import ClassComponent from './components/ClassComponent';
import JsxStyling from './components/JsxStyling';
import JsxExpression from './components/Jsxexpression';
import FunctionalComponent from './components/FunctionalComponent';
import FunctionalProps from './components/FunctionalProps';
import ClassProps from './components/ClassProps';
import States from './components/States';
import Login from './components/Login';
import Events from './components/Events';
import ToggleEvent from './components/ToggleEvent';
import ComponentLifecycle from './components/ComponentLifecycle';
import ReactUseState from './components/ReactUseState';
import ParentComp from './components/ParentComp';
import ConditionalRendering from './components/ConditionalRendering';
import Fragment from './components/Fragment';
import UseRef from './components/UseRef';
  
function App() {
  return (
    <div>
        {/* return ( */}
        <UseRef/>
        <ComponentLifecycle/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='ParentComp' element={<ParentComp/>}></Route>
    </Routes>
    </BrowserRouter>
      {/* <ParentComp/> */}
      {/* <Login/> */}
      {/* <UseRef/> */}
{/* <ComponentLifecycle/>
      <ConditionalRendering/>
      <ParentComp/>
      <Fragment/>
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
      </div> */}
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
