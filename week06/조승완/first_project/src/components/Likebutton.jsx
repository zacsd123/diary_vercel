import {useState} from 'react'

function Likebutton(props) {
    
    const [count, setCount] = useState(0)
    
    function Clicked() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    function Push() {
        return (
            <>
                <h1>제목: {props.title}</h1>
                <h2>좋아요 수: {count}</h2>
                <button onClick = {Clicked}>좋아요</button>
            </>
        )
    }
    
    function NotPush() {
        return (
            <>
                <h1>제목: {props.title}</h1> 
                <h2 style={{color: "red"}}>좋아요 수: {count}</h2>
                <h5>더 이상 누를 수 없어요.</h5>
                <button disabled>좋아요</button>
                <br/>
                <button onClick = {reset}>reset</button>
            </>
        )
    }


    return (
        <>
            {count >= 20 ? NotPush() : Push()}
        </>
    )
}

export default Likebutton