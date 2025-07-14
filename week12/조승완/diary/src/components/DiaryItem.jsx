import "./DiaryItem.css"
import { getEmotionImage } from "../util/get-emotion-image"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const DiaryItem = ({id, emotionId, createdDate, content}) => {

    const nav = useNavigate()

    const goDiaryPage = () => {
        nav(`/diary/${id}`)
    }
    const goEditPage = () => {
        nav(`/edit/${id}`)
    }

    return (
        <div className="DiaryItem">
            <div onClick={goDiaryPage} className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} />
            </div>
            <div onClick={goDiaryPage} className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div onClick={goEditPage} className="button_section">
                <Button text={"수정하기"}  />
            </div>
        </div>
    )
}

export default DiaryItem