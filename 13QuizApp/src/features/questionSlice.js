import { createSlice } from '@reduxjs/toolkit'
import {quiz1Questions} from "../hooks/questions.js"

export const initialState = {
    // questions,
    questions: quiz1Questions[0],

    selectedAns: Array(0).fill(null),

    isLoader: false,

    quizStatus: {
        isUserReviewed: false,
        isUserStarted: true,
        isSubmitted: false,
    },
    
    authStatus: {
        isUserLoggedIn: false,
    }


}

initialState.selectedAns = Array(initialState.questions.length).fill(null);  //length of array


const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        answer: (state, action) => {
            const { index, ans } = action.payload
            state.questions[index].userAns = ans
            state.selectedAns[index] = ans;
        },
        setIsUserStarted: (state, action) => {
            state.quizStatus.isUserStarted = action.payload
        },
        setIsLoader: (state, action) => {
            state.isLoader = action.payload
        },
        setIsSubmitted: (state, action) => {
            state.quizStatus.isSubmitted = action.payload
        },
        setIsUserReviewed: (state, action) => {
            state.quizStatus.isUserReviewed = action.payload
        },
        resetState: () => initialState,
        setIsUserLoggedIn: (state, action) => {
            state.authStatus.isUserLoggedIn = action.payload
        }
    }
})

export const { answer, setIsLoader, setIsUserStarted, setIsSubmitted, setIsUserReviewed, resetState, setIsUserLoggedIn } = questionSlice.actions
export default questionSlice.reducer