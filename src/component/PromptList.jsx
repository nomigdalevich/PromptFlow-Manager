
import { useSelector } from "react-redux";
import PromptCard from "./PromptCard";
import { useNavigate } from "react-router-dom";

const PromptList = () => {

    const navigate = useNavigate();//משתנה שבאמצעותו אני זזה לדפים אחרים

    //מוציאים את המערך של הפרומפטים מתוך הסלייס עי useSelector
    const prompt = useSelector(state => state.prompts.prompt);

    const toAddPrompt = () => {

        { navigate("/addPrompt") }
    }
    return <>
    <div className="div1">
        <h3>פרומפטים מאושרים</h3>

        <div className="promt">
            {prompt
                .filter(p => (p.forUse == true))
                .map(p => <PromptCard p={p} />)}
        </div>

        <button onClick={() => toAddPrompt()}>הוסף פרומפט</button>

        <h3>הצעות לפרומפטים</h3>
        <div className="promt">
            {prompt
                .filter(p => (p.forUse == false))
                .map(p => <PromptCard p={p} />)}
        </div>
        </div>
    </>

}

export default PromptList;