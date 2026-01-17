
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletVersion } from "./PromptSlice";


const VersionDetails = () => {

    const navigate = useNavigate();//משתנה שבאמצעותו אני זזה לדפים אחרים
    const dispatch = useDispatch();//משתנה שבאמצעותו אני שולחת דברים לסלייס

    //שליפת הגירסא הנוכחית שלחצו עליו עי useSelector
    const currenV = useSelector(state => state.prompts.currentVersion);

    const VersionId=currenV.VersionId;
    const profession=currenV.profession;
    const purpose = currenV.purpose;
    
    const deletV = () => {
        
        dispatch(deletVersion({VersionId,profession,purpose}))
        {navigate("/promptList")}
    }

    return <>
        <h3>גירסא מספר {currenV.VersionId}</h3>
        <div className="Version-details">
            <p>תוכן הגרסא : {currenV.content}</p>
            <p>סיבת השינוי : {currenV.ReasonReplace}</p>
            <button onClick={() => deletV()}>מחיקת הגירסא</button>
        </div>
    </>

}

export default VersionDetails;