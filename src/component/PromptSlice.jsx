
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {

    //מידע

    //מערך של פרומפטים
    prompt: [
        {
            id: 1,
            profession: "תכנות",
            purpose: "הפיכת הצאט למקצועי",
            content: "you must to tall only a good and polit language",
            forUse: true,
            createdAt: "2025-12-09",
            versions: [{ VersionId: 1, profession: "תכנות", purpose: "הפיכת הצאט למקצועי", content: "you must to write a clean word", createdAt: "2024-11-09", ReasonReplace: "לא מספיק יעיל" },]
        },
        {
            id: 2,
            profession: "אדריכלות",
            purpose: "הפניה לאתרים רלוונטיים",
            content: "you must to give a good link for what the user ask for you",
            forUse: false,
            createdAt: "2025-11-09",
            versions: []
        },]
    ,

    //מערך של מקצועות
    professions: [{ id: 1, prof: "תכנות" }]
    ,

    currentPrompt: null
    ,
    currentVersion: null
}

export const PromtSlice = createSlice({
    name: "prompts",
    initialState,
    reducers: {

        //פונקציות
        //מי הפרומפט הנוכחי שלחצו עליו
        changCurrentP: (state, action) => {
            const currentP = action.payload;
            state.currentPrompt = currentP;
        }
        ,
        //מי הגרסא הנוכחית שלחצו עליה
        changCurrentV: (state, action) => {
            const currentV = action.payload;
            state.currentVersion = currentV;
        }

        ,
        //הוספת הצעה לפרומפט
        addPrompt: (state, action) => {
            const newPromt = action.payload;
            newPromt.id = state.prompt[state.prompt.length - 1].id + 1;
            newPromt.forUse = false;
            newPromt.createdAt = new Date;
            newPromt.versions = [];
            state.prompt.push(newPromt);
        }

        ,
        //מחיקת פרומפט
        deletePrompt: (state, action) => {
            const id = action.payload;// id שמירת ה
            const index = state.prompt.findIndex(p => p.id == id);
            state.prompt.splice(index, 1);

        }

        ,
        //עדכון פרומפט
        updateP: (state, action) => {
            const promptToUpdate = action.payload.p; //שליפת הפרומפט המעודכן
            const index = state.prompt.findIndex(p => p.id == promptToUpdate.id);// מחפש את המיקם של האיידי של האוביקט
            const thisPrompt = state.prompt[index]; //שמירת הפרומפט הנוכחי

            if (!promptToUpdate.forUse) { // אם הפרומפטי בוטל לשימוש אז תעתיק אותו במקום הפרומפטי הנוכחי
                state.prompt[index] = { ...promptToUpdate, versions: thisPrompt.versions };
            }

            else { // במקרה שהפרומפטי כן מאושר לשימוש אבל נעשה איזשהו עדכון על הפרומפטי

                const newVersion = { //יצירת גירסא חדשה שהיא הפרומפט הנוכחי
                    VersionId: thisPrompt.versions.length + 1, content: thisPrompt.content, createdAt: thisPrompt.createdAt, ReasonReplace: action.payload.reason
                }
                state.prompt[index].versions.push(newVersion); //הוספת הגירסא החדשה למערך הגירסאות
                state.prompt[index] = { ...promptToUpdate, versions: thisPrompt.versions };//מעתיקים את הפרומפט החדש למיקום שמצאנו את האוביקט
            }
        }

        ,

        //אישור פרומפט
        confirmPrompt: (state, action) => {
            const id = action.payload; //שליפת האיידי שנשלח
            const index = state.prompt.findIndex(p => p.id === id);
            if (index !== -1) {
                state.prompt[index].forUse = true;
            }
        }

        ,
        //מחיקת גירסא
        deletVersion: (state, action) => {
            const { profession, purpose, versionId } = action.payload;

            const promptIndex = state.prompt.findIndex( //מוצאת את האינדקס שעונה על שתי התנאים
                p => p.profession === profession && p.purpose === purpose
            );

            const prompt = state.prompt[promptIndex];//שומרת במשתנה

            if (prompt.versions.length > 0) { //אם המערך גדול מאפס

                const versionIndex = prompt.versions.findIndex(v => v.VersionId === versionId); //מוצאת את האינדקס של הגירסא

                    prompt.versions.splice(versionIndex, 1);//מחיקת הגירסא
        }
    }

}

})

//בתוך הסוגריים אנחנו נייצא את כל הפונקציות שבסלייס
export const { changCurrentP, changCurrentV, addPrompt, deletePrompt, updateP, confirmPrompt ,deletVersion } = PromtSlice.actions;
export default PromtSlice.reducer