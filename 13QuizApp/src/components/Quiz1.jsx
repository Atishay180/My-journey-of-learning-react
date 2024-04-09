import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answer, setIsSubmitted, setIsLoader } from '../features/questionSlice';
import Loader from './loader/Loader';

function Quiz1() {
    const isLoader = useSelector(state => state.quizStatus.isLoader)
    const questions = useSelector(state => state.questions);
    const [index, setIndex] = useState(0);
    const question = questions[index];
    const selectedAnswer = useSelector(state => state.selectedAns)
    const isUserReviewed = useSelector(state => state.quizStatus.isUserReviewed)

    const dispatch = useDispatch()

    const checkAns = (ans) => {
        if (!isUserReviewed) {
            dispatch(answer({ index, ans }))
        }
    }

    const handleNext = () => {
        if (index < questions.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleSubmit = () => {
        if (!isUserReviewed && window.confirm("Are you sure want to submit ?")) {
            dispatch(setIsLoader(true))
            setTimeout(() => {
                dispatch(setIsSubmitted(true))
                dispatch(setIsLoader(false))
            }, 1000)
        }
        else if (isUserReviewed) {
            dispatch(setIsLoader(true))
            setTimeout(() => {
                dispatch(setIsSubmitted(true))
                dispatch(setIsLoader(false))
            }, 1000)
        }
        
    }


    return (
        <div className='w-screen h-full'>
            <div className="container bg-opacity-75 bg-amber-500 p-4 m-4 rounded-md shadow-md mx-auto" style={{ width: "80%" }} >
                <h1 className="text-2xl font-bold mb-4">{index + 1}. {question.question}</h1>
                <ol className="mb-4 flex flex-col">
                    {question.options.map((option, optionIndex) => (
                        <li
                            key={optionIndex}
                            className={`bg-white p-2 border-2 text-lg text-gray-800 font-semibold border-white rounded-md cursor-pointer m-3 transition-transform duration-300 ease-in-out transform ${!isUserReviewed && 'hover:scale-95 hover:bg-gray-300'} `}
                            onClick={() => checkAns(optionIndex + 1)}
                            style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)", backgroundColor: selectedAnswer[index] === optionIndex + 1 ? "rgb(14, 182, 228)" : "white" }}
                        >
                            {option}
                        </li>
                    ))}
                </ol>

                <div className="flex justify-between px-3">
                    <button
                        className="bg-gradient-to-tr duration-100 from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-700 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:from-white disabled:to-white disabled:text-gray-400"
                        disabled={index <= 0}
                        onClick={handlePrevious}
                        style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}>
                        Previous
                    </button>

                    <button
                        className='bg-white w-1/4 duration-100 hover:bg-gray-200 hover:scale-105 text-zinc-800 text-xl font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline disabled:hidden'
                        disabled={index < questions.length - 1}
                        onClick={handleSubmit}
                        style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}>
                        Submit
                    </button>


                    <button
                        className="bg-gradient-to-tl duration-100 from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-700 hover:scale-105 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline disabled:from-white disabled:to-white disabled:text-gray-400"
                        disabled={index >= questions.length - 1}
                        onClick={handleNext}
                        style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}>
                        Next
                    </button>
                </div>
            </div>
            {isLoader && <Loader />}
        </div>
    )
}

export default Quiz1
