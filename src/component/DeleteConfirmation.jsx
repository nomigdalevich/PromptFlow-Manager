import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePrompt } from "./PromptSlice";

const DeleteConfirmation = () => {

    const dispatch = useDispatch();//משתנה שבאמצעותו אני שולחת דברים לסלייס
    const navigate = useNavigate();

    const currenP = useSelector(state => state.prompts.currentPrompt);

    const todeletePrompt = () => {
        dispatch(deletePrompt(currenP.id));
        navigate("/promptList")
    }

    const retToPrompt = () =>{
        navigate("/promptList")
    }

    return<>
    <p>מחיקת פרומפט</p>
    <p>האם אתה בטוח שברצונך למחוק את הפרומפט הזה</p>
    <button onClick= {() => todeletePrompt()}>אישור</button>
    <button onClick={() => retToPrompt()}>ביטול</button>
    </>

}

export default DeleteConfirmation;