import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";
import { useContext } from "react";
import Button from "../components/Button";

const Diary = () => {
    const params = useParams()

    const nav = useNavigate()

    const data = useContext(DiaryStateContext)

    const currentData = data.filter((day) => {return day.id.toString() === params.id})[0]

  return (
    <div>
      <Header title={`${new Date(currentData.createdDate).toLocaleDateString()}`} 
      leftChild={<Button onClick={() => nav(-1)} text={"<"} />}/>

      <div>
        {currentData.content}
      </div>
    </div>
  )
};

export default Diary;