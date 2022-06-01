import React from 'react';

import './App.css';
import Accordion from "../src/components/Accordeon/Accordion"
import {Rating} from "./components/Rating/Rating";

const App = () => {
    return (
        <div className="App">
            Hi React
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}


// function Tree() {
//     return (
//
//         <div className="Tree">
//             <div>tree</div>
//             <div>tree</div>
//             <div>tree</div>
//         </div>
//     )
//
// }

export default App;

