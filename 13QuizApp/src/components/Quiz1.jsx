import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { answer, setIsSubmitted } from '../features/questionSlice';

function Quiz1() {
    const isUserLoggedIn = useSelector(state => state.authStatus.isUserLoggedIn);

    const questions = useSelector(state => state.questions);
    const [index, setIndex] = useState(0);
    const question = questions[index];
    const selectedAnswer = useSelector(state => state.selectedAns);
    const isUserReviewed = useSelector(state => state.quizStatus.isUserReviewed);
    const isSubmitted = useSelector(state => state.quizStatus.isSubmitted);

    const dispatch = useDispatch();

    const checkAns = (ans) => {
        if (!isUserReviewed) {
            dispatch(answer({ index, ans }));
        }
    };

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
        if (!isUserReviewed && window.confirm("Are you sure you want to submit?")) {
            dispatch(setIsSubmitted(true));
        } else if (isUserReviewed) {
            dispatch(setIsSubmitted(true));
        }
    };

    if (!isUserLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
            <div className="container bg-white p-6 md:p-8 m-4 rounded-lg shadow-lg max-w-3xl mx-auto">
                <header>
                    <h1 className='text-3xl md:text-4xl border-b-2 border-black font-bold pt-3 pb-3 mb-6 text-center'>Quiz App</h1>
                </header>
                <h1 className="text-xl md:text-2xl font-bold mb-4">{index + 1}. {question.question}</h1>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}
                            // className={`bg-white font-semibold p-2 border border-black text-lg text-black rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform ${selectedAnswer[index] === optionIndex + 1 ? " bg-sky-200 border-2 border-sky-500" : ""} ${!isUserReviewed && 'hover:scale-95 hover:bg-gray-300'}`}

                            className={`p-4 border-2 rounded-lg shadow-sm cursor-pointer transition-transform duration-300 ease-in-out transform ${selectedAnswer[index] === optionIndex + 1 ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"} ${!isUserReviewed && 'hover:scale-105 hover:bg-gray-200'}`}
                            onClick={() => checkAns(optionIndex + 1)}
                        >
                            {option}
                        </li>
                    ))}
                </ol>

                <div className="flex justify-between">
                    <button
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-300 disabled:text-gray-400"
                        disabled={index <= 0}
                        onClick={handlePrevious}>
                        Previous
                    </button>

                    <button
                        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 disabled:hidden'
                        disabled={index < questions.length - 1}
                        onClick={handleSubmit}>
                        Submit
                    </button>

                    {isSubmitted ? <Navigate to='/' /> : ""}

                    <button
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-300 disabled:text-gray-400"
                        disabled={index >= questions.length - 1}
                        onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quiz1;
