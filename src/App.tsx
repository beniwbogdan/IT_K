import React from 'react';

import './App.css';
import Accordion from "../src/components/Accordeon/Accordion"
import Rating from "./components/Rating/Rating";
type PageTitleAppPropsType={
    title:string
}
const App = () => {
    return (
        <div className="App">
           {/*<PageTitle title={"Hi React Title"}/>*/}
           {/* Article 1*/}
            <Rating value={2}/>
            <hr/>
            <Accordion
                title={"Hi Accordion title"}
                collapsed={true}
            />
            <Accordion
                title={"Hi Accordion title2"}
                collapsed={false}/>
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

function PageTitle(props:PageTitleAppPropsType) {
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

