import React from "react";

export function Rating() {
    console.log("Rating is rendering");
    return (
        <div>
            <Star selected={true} />
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props:any) {
    console.log("Star is rendering");

    if(props.selected==true){
        return (<span><b>star </b></span>);
    }else{
        return (<span>star</span>);
    }


}
export default Rating;