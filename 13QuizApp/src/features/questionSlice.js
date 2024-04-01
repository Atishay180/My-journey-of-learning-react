import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    questions: [
        {
            question: "What is the capital of India",
            options : ["Kolkata", "Mumbai", "Delhi", "Chennai",],
            ans: 3,
            userAns: null
        },
        {
            question: "What is the capital of MP",
            options : ["Jabalpur", "Indore", "Ujjain", "Bhopal",],
            ans: 4,
            userAns: null
        },
        {
            question: "What is the capital of Maharashtra",
            options : ["Mumbai", "Pune", "Nagpur", "None of These",],
            ans: 1,
            userAns: null
        },
        {
            question: "What is the capital of West Bengal",
            options : ["Asansol", "Kolkata", "Durgapur", "Siliguri",],
            ans: 2,
            userAns: null
        },
    ],
    quizStatus: {
        isUserStarted: false,
        isSubmitted: false
    }

}

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        answer: (state, action) => {
            const { index, ans } = action.payload
            state.questions[index].userAns = ans
        },
        setIsUserStarted: (state, action) => {
            state.quizStatus.isUserStarted = action.payload
        },
        setIsSubmitted: (state, action) => {
            state.quizStatus.isSubmitted = action.payload
        }
    }
})

export const { answer, setIsUserStarted, setIsSubmitted } = questionSlice.actions
export default questionSlice.reducer