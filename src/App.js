//import logo from './logo.svg';
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import SampleJsx from './components/SampleJsx';
import NestedJsx from './components/review1/NestedJsx';
import ClassComponent from './components/review1/ClassComponent';
import JsxStyling from './components/JsxStyling';
import JsxExpression from './components/Jsxexpression';
import FunctionalComponent from './components/review1/FunctionalComponent';
import FunctionalProps from './components/review1/FunctionalProps';
import ClassProps from './components/review1/ClassProps';
import States from './components/review1/States';
import Login from './components/review1/Login';
import Events from './components/review1/Events';
import ToggleEvent from './components/review1/ToggleEvent';
import ComponentLifecycle from './components/review1/ComponentLifecycle';
import ReactUseState from './components/ReactUseState';
import ParentComp from './components/ParentComp';
import ConditionalRendering from './components/review1/ConditionalRendering';
import Fragment from './components/Fragment';
import UseRef from './components/UseRef';
import GetAxios from './components/GetAxios';
  
function App() {
  return (
    <div>
      {/* <GetAxios/> */}
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
