
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changCurrentV } from "./PromptSlice";


const VersionCard = ({v}) => {

    const navigate = useNavigate();//משתנה שבאמצעותו אני זזה לדפים אחרים
    const dispatch = useDispatch();//משתנה שבאמצעותו אני שולחת דברים לסלייס

    const toDetails = () => {
        
        dispatch(changCurrentV(v))
        {navigate("/VersionDetails")}
    }

    const {VersionId,ReasonReplace} = v;
    return <>  
        <div className="cardV">      
           <p>גירסא : {VersionId}</p>
           <p>סיבת השינוי : {ReasonReplace}</p> 
           <button onClick={() => toDetails()}>פרטים</button> 
           </div>      
    </>

}

export default VersionCard;