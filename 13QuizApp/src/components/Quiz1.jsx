import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answer, setIsSubmitted } from '../features/questionSlice';

function Quiz1() {
    const questions = useSelector(state => state.questions);
    const [index, setIndex] = useState(0);
    const question = questions[index];
    const selectedAnswer = useSelector(state => state.selectedAns)

    const dispatch = useDispatch()

    const checkAns = (ans) => {
        dispatch(answer({ index, ans }))
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
        if (window.confirm("Are you sure want to submit ?")) {
            dispatch(setIsSubmitted(true))
        }
    }


    return (
        <div className="container bg-opacity-75 bg-amber-500 p-4 m-4 rounded-md shadow-md mx-auto" style={{ width: "80%"}} >
            <h1 className="text-2xl font-bold mb-4">{index + 1}. {question.question}</h1>
            <ol className="mb-4 flex flex-col">
                {question.options.map((option, optionIndex) => (
                    <li
                        key={optionIndex}
                        className={`bg-white p-2 border-2 text-lg text-gray-800 font-semibold border-white rounded-md cursor-pointer m-3 transition-transform duration-300 ease-in-out transform hover:scale-95 hover:bg-gray-300 ${selectedAnswer[index] === optionIndex + 1 ? "bg-gray-500" : "bg-white"}`}
                        onClick={() => checkAns(optionIndex + 1)}
                        style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}
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
    )
}

export default Quiz1
