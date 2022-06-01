import React from 'react';

import './App.css';
import Accordion from "../src/components/Accordeon/Accordion"
import Rating from "./components/Rating/Rating";

const App = () => {
    return (
        <div className="App">
           <PageTitle title={"Hi React Title"}/>
            Article 1
            <Rating value={2}/>
            <hr/>
            <Accordion title={"Hi Accordion title"}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log("PageTitle is rendering");
    return (
        <h1>
            {props.title}
        </h1>
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

