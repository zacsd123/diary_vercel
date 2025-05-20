import { useState } from "react";

function Viewer({number}) {

    return (
        <>
        <div style = {{backgroundColor: "gray", padding: "20px", margin: "0px 0px 10px 0px"}}>
            <h3>현재 카운트:</h3>
            <h2>{number}</h2>
        </div>
        </>
    )
};


export default Viewer;