import './App.css'
import Likebutton from './components/Likebutton'
import { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from "./components/Controller";

function App() {

    let title = "리엑트 마스터 도전!"

    let [number, setNumber] = useState(0)

    const changeNumber = (value) => {
        setNumber(number +  value)
    }

    return (
        <>
            {/* 과제 */}
            <h1>Simple Counter</h1>
            <Viewer number = {number}/>
            <Controller change = {changeNumber} number = {number} />

            {/* 스터디 */}
            <Likebutton title = {title}></Likebutton>
        </>
    )
}

export default App
