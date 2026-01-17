import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPrompt } from "./PromptSlice";

const AddPrompt = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [profession , setProfession] = useState("")
    const [purpose , setPurpose] = useState("")
    const [content , setContent] = useState("")

    const add = () => {

        const p = {profession,purpose,content}

        dispatch(addPrompt(p))
        navigate("/promptList")
    }
    return <>
        <h1>הצעה לפרומפט</h1>

        <form>
            <input type="text" placeholder="מקצוע" onChange={(e) => setProfession(e.target.value)} />
            <input type="text" placeholder="מטרה" onChange={(e) => setPurpose(e.target.value)} />
            <input type="text" placeholder="תוכן הפרומפט" onChange={(e) => setContent(e.target.value)} />
            <button type="button" onClick={() => add()}>שלח הצעה</button>
        </form>
    </>

}

export default AddPrompt;
