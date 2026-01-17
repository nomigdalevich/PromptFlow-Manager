import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changCurrentP, updateP } from "./PromptSlice";

const UpdatePrompt = () => {

    const currenP = useSelector(state => state.prompts.currentPrompt);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [content, setContent] = useState(currenP.content);
    const [forUse, setForUse] = useState(currenP.forUse);
    const [reason, setReason] = useState("");

     const updatePr = () => {

        const p = {
            id: currenP.id,
            profession: currenP.profession,
            purpose: currenP.purpose,
            content: content,
            forUse: forUse , 
            createdAt: currenP.createdAt,
            versions: currenP.versions
        }

        dispatch(updateP({p,reason}))
        navigate("/promptList")
    }

    const toPrompt = () => {

        dispatch(changCurrentP(currenP))
        navigate("/promptDetails")
    }

    return <>
        <h3>עדכון פרומפט</h3>
        <form>
            <label>
                תוכן הפרומפט:
                <input value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <label>
                {currenP.forUse === false
                    ? <button type="button" onClick={() => setForUse(true)}>אשר שימוש</button>
                    : <button type="button" onClick={() => setForUse(false)}>בטל אפשרות שימוש</button>
                }
            </label>
            <label>
                סיבה לשינוי:
                <input type="text" onChange={(e) => setReason(e.target.value)} />
            </label>
            <button type="button" onClick={() => updatePr()}>עדכן</button>
            <button type="button" onClick={() => toPrompt()}>ביטול</button>
        </form>
    </>
}

export default UpdatePrompt;

