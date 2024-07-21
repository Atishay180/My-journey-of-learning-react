import { createSlice } from '@reduxjs/toolkit'
import { quizQuestions } from "../hooks/questions.js"

export const initialState = {
    // questions,
    // questions: quizQuestions[quizIndex].questions,
    questions: [],

    selectedAns: Array(0).fill(null),

    isLoader: false,

    quizIndex: 0,

    quizStatus: {
        isUserReviewed: false,
        isUserStarted: false,
        isSubmitted: false,
    },

    authStatus: {
        user: null,
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
        setUser: (state, action) => {
            state.authStatus.user = {
                username: action.payload.username,
                email: action.payload.email,
                prfilePic: action.payload.prfilePic
            }
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
        },
        setQuizIndex: (state, action) => {
            state.quizIndex = action.payload
            state.questions = quizQuestions[action.payload].questions
        }
    }
})

export const {
    answer,
    setUser,
    setIsLoader,
    setIsUserStarted,
    setIsSubmitted,
    setIsUserReviewed,
    resetState,
    setIsUserLoggedIn,
    setQuizIndex
} = questionSlice.actions
export default questionSlice.reducer