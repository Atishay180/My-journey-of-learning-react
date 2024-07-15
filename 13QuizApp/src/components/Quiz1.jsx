import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { answer, setIsSubmitted, setIsLoader } from '../features/questionSlice';
import Loader from './Loader';
import ErrorPage from './ErrorPage';

function Quiz1() {
    const isUserLoggedIn = useSelector(state => state.authStatus.isUserLoggedIn);
    const questions = useSelector(state => state.questions);
    const [index, setIndex] = useState(0);
    const question = questions[index];
    const selectedAnswer = useSelector(state => state.selectedAns);
    const isUserReviewed = useSelector(state => state.quizStatus.isUserReviewed);
    const isSubmitted = useSelector(state => state.quizStatus.isSubmitted);
    const isLoading = useSelector(state => state.isLoader)


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
            dispatch(setIsLoader(true))
            setTimeout(() => {
                dispatch(setIsLoader(false))
            }, 500);
            dispatch(setIsSubmitted(true));
        } else if (isUserReviewed) {
            dispatch(setIsLoader(true))
            setTimeout(() => {
                dispatch(setIsLoader(false))
            }, 500);
            dispatch(setIsSubmitted(true));
        }
    };

    const handleQuestionClick = (index) => {
        setIndex(index)
    }

    if (!isUserLoggedIn) {
        return <ErrorPage />;
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='flex justify-center w-full h-screen bg-gray-100'>
            <div className="container bg-white p-6 md:p-8 mx-auto">
                <header>
                    <h1 className='text-3xl md:text-4xl border-b-2 border-black font-bold pt-3 pb-3 mb-6 text-center'>Quizify</h1>
                </header>
                <div className="flex flex-col md:justify-evenly md:flex-row">
                    {/* Quiz Section */}
                    <div className='md:w-3/5 p-4'>
                        <h1 className="text-xl md:text-3xl font-bold mt-6 mb-12">{index + 1}. {question.question}</h1>
                        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mb-10">
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}
                                    className={`p-4 md:p-5 text-lg border-2 rounded-lg shadow-sm cursor-pointer transition-transform duration-300 ease-in-out transform ${selectedAnswer[index] === optionIndex + 1 ? "bg-primary-light border-primary-dark" : "bg-white border-gray-300"} ${!isUserReviewed && 'hover:scale-105 hover:bg-gray-200'}`}
                                    onClick={() => checkAns(optionIndex + 1)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ol>
                        <div className="flex justify-between">
                            <button
                                className="bg-primary-dark hover:bg-primary-darkHover text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-300 disabled:text-gray-400"
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
                            {isSubmitted ? <Navigate to='/result' /> : ""}
                            <button
                                className="bg-primary-dark hover:bg-primary-darkHover text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-300 disabled:text-gray-400"
                                disabled={index >= questions.length - 1}
                                onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Tracking Table Section */}
                    <div className='md:w-1/5 p-1'>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Question Status</h2>
                        <table className="min-w-full min-h-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-2 border">Question</th>
                                    <th className="py-2 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((q, qIndex) => (
                                    <tr key={qIndex} onClick={() => handleQuestionClick(qIndex)} className={`${index === qIndex ? 'bg-blue-100' : ''}`}>
                                        <td className="py-2 px-4 border">{qIndex + 1}</td>
                                        <td className="py-2 px-4 border">
                                            {selectedAnswer[qIndex] ? 'Completed' : 'Incomplete'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz1;
