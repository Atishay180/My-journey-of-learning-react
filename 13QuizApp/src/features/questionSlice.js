import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    questions: [
        {
            question: "What is the capital of India",
            option1: "Kolkata",
            option2: "Mumbai",
            option3: "Delhi",
            option4: "Chennai",
            ans: 3,
            userAns: null
        },
        {
            question: "What is the capital of MP",
            option1: "Jabalpur",
            option2: "Indore",
            option3: "Ujjain",
            option4: "Bhopal",
            ans: 4,
            userAns: null
        },
        {
            question: "What is the capital of Maharashtra",
            option1: "Mumbai",
            option2: "Pune",
            option3: "Nagpur",
            option4: "None of These",
            ans: 1,
            userAns: null
        },
        {
            question: "What is the capital of West Bengal",
            option1: "Asansol",
            option2: "Kolkata",
            option3: "Durgapur",
            option4: "Siliguri",
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