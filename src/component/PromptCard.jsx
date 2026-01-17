
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changCurrentP } from "./PromptSlice";


const PromptCard = ({ p }) => {

    const navigate = useNavigate();//משתנה שבאמצעותו אני זזה לדפים אחרים
    const dispatch = useDispatch();//משתנה שבאמצעותו אני שולחת דברים לסלייס

    const toDetails = () => {

        dispatch(changCurrentP(p))
        { navigate("/promptDetails") }
    }

    const { profession, purpose } = p;
    return <>
        <div className="card">
            <p>מקצוע : {profession}</p>
            <p>מטרה : {purpose}</p>
            <button onClick={() => toDetails()}>פרטים</button>
        </div>
    </>

}

export default PromptCard;