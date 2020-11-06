import React from "react";

export default function Header(props){
    const { theData } = props;

    return (
        <header>
            <h1>NASA Photo of The Day :)</h1>
            <h2>{theData.date}</h2>
        </header>
    );
}