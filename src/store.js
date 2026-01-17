import { configureStore } from "@reduxjs/toolkit";
import promptsReducer from './component/PromptSlice'

export const store = configureStore ({

        reducer:{
       prompts:promptsReducer,
    },

})