
import { useDispatch, useSelector } from "react-redux";
import VersionCard from "./VersionCard";
import { useNavigate } from "react-router-dom";
import {changCurrentP, confirmPrompt } from "./PromptSlice";


const PromptDetails = () => {

    const navigate = useNavigate();//משתנה שבאמצעותו אני זזה לדפים אחרים
    const dispatch = useDispatch();//משתנה שבאמצעותו אני שולחת דברים לסלייס

    //שליפת הפרומפט הנוכחי שלחצו עליו עי useSelector
    const currenP = useSelector(state => state.prompts.currentPrompt);

    const deletP = () => {

        dispatch(changCurrentP(currenP))
        { navigate("/deleteConfirmation") }
    }

    const update = () => {

        dispatch(changCurrentP(currenP))
        navigate("/updatePrompt")
    }

    const confirm = () => {

        dispatch(confirmPrompt(currenP.id))
        navigate("/promptList")
    }

    return <>
        <div className="prompt-details">
            <p>מקצוע : {currenP.profession}</p>
            <p>מטרה : {currenP.purpose}</p>
            <p>תוכן הפרומפט : {currenP.content}</p>
            {currenP.versions != null
                ? currenP.versions.map(v => <VersionCard v={v} />) :
                <p>אין גרסאות נוספות</p>}
            {currenP.forUse == false
                ? <button onClick={() => confirm()}>אשר פרומפט</button>
                : null
            }

            <div className="bDiv">
            <button onClick={() => deletP()}>מחיקה</button>
            <button onClick={() => update()}>עדכון</button>
            </div>
        </div>
    </>

}

export default PromptDetails;