import React from "react";

export default function Counter(props) {
    //Handle event on ReactJS
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            {props.children}
            {props.name} - {props.age}
        </div>
    );
}
