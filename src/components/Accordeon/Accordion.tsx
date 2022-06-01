import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return( <>
        if(props.collapsed === true){
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionEmptyBody/>
            </div>
        } else {
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        }
        </>
        );
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

        function AccordionBody() {
        return (

        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
        );
    }

        function AccordionEmptyBody() {
        return (
        <div>lol</div>
        );
    }

        export default Accordion;