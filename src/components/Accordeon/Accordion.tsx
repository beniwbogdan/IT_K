import React from "react";
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionEmptyBody from "./AccordionEmptyBody/AccordionEmptyBody";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

        if(props.collapsed){
            return(
            <>
                <AccordionTitle title={props.title}/>
                <AccordionEmptyBody/>
            </>);
        } else {
            return(
            <>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </>);
        }


//     return(
//     <>
//             if(props.collapsed===true){
//                 <div>
//                     <AccordionTitle title={props.title}/>
//                     <AccordionEmptyBody/>
//                 </div>
//             }else {
//
//                 <div>
//                     <AccordionTitle title={props.title}/>
//                     <AccordionBody/>
//                 </div>
//         }
// </>);
    }

        type AccordionTitlePropsType = {
        title: string
    }

        function AccordionTitle(props: AccordionTitlePropsType) {
        return (

        <h2>{props.title}</h2>

        );
    }

        export default Accordion;