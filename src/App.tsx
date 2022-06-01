import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "../components/Accordion/Accordion";

const App = () => {
    return (
        <div className="App">
            Hi React
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>

            <div>list of parameters 1</div>
            <div>list of parameters 2</div>
            <div>list of parameters 3</div>
            <div>list of parameters 4</div>
            <div>list of parameters 5</div>
            <div>list of parameters 6</div>
        </div>
    );
}




function Tree() {
    return (

        <div className="Tree">
            <div>tree</div>
            <div>tree</div>
            <div>tree</div>
        </div>
    )

}

export default App;

