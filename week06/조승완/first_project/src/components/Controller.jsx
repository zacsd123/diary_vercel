function Controller({change}) {

    return (
        <>
        <div style = {{backgroundColor: "gray", padding: "20px", margin: "0px"}}>
            <button onClick = {() => change(-1)}>-1</button>
            <button onClick = {() => change(-10)}>-10</button>
            <button onClick = {() => change(-100)}>-100</button>
            <button onClick = {() => change(+100)}>+100</button>
            <button onClick = {() => change(+10)}>+10</button>
            <button onClick = {() => change(+1)}>+1</button>
        </div>
        </>
    )
};



export default Controller;