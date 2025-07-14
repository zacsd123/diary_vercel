import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header"
import Button from "../components/Button";
import { DiaryDispatchConext, DiaryStateContext } from "../App";
import { useContext } from "react";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams()

  const data = useContext(DiaryStateContext)
  
  const { onEdit } = useContext(DiaryDispatchConext)
  
  const nav = useNavigate()

  const onChange = (input) => {
    onEdit(params.id, input.createdDate, input.emotionId, input.content)
    nav("/", {replace: true})
  }

  const currentData = data.filter((day) => {return day.id.toString() === params.id})[0]

  return (
    <div>
      <Header title={`${new Date(currentData.createdDate).toLocaleDateString()} 일기 수정페이지`}
      leftChild={<Button onClick={() => nav(-1)} text={"<"}/>}/>
      <Editor 
      onSubmit={onChange} 
      />
    </div>
  )
};

export default Edit;