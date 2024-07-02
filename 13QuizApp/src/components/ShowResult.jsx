import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsSubmitted, resetState, setIsUserReviewed, setIsLoader } from '../features/questionSlice';
import Loader from './Loader';

function ShowResult() {
    const result = useSelector(state => state.questions);
    const [showMessage, setShowMessage] = useState(false);
    const isLoading = useSelector(state => state.isLoader)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleReview = () => {
        dispatch(setIsLoader(true))
        setTimeout(() => {
            dispatch(setIsLoader(false))
        }, 500);
        dispatch(setIsUserReviewed(true));
        dispatch(setIsSubmitted(false));
        navigate(-1)
    };

    const handleHomePage = () => {
        dispatch(setIsLoader(true))
        setTimeout(() => {
            dispatch(setIsLoader(false))
        }, 500);
        setShowMessage(true);
        setTimeout(() => {
            dispatch(resetState());
        }, 1500);
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            {!showMessage && (
                <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary-light bg-primary-dark">
                                <th className="border border-gray-400 px-4 py-3 text-center">Ques No.</th>
                                <th className="border border-gray-400 px-4 py-3 text-center">Choosed</th>
                                <th className="border border-gray-400 px-4 py-3 text-center">Remarks</th>
                                <th className="border border-gray-400 px-4 py-3 text-center">✅ / ❌</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((data, id) => (
                                <tr key={id} className="text-primary-dark lg:text-lg xl:text-xl bg-primary-light">
                                    <td className="border border-gray-400 px-4 py-3 text-center">{id + 1}.</td>
                                    <td className="border border-gray-400 px-4 py-3 text-center">Option-{data.userAns}</td>
                                    <td className="border border-gray-400 px-4 py-3 text-center">{data.userAns === null ? "Not Attempted" : (data.ans === data.userAns ? "Correct" : "Incorrect")}</td>
                                    <td className="border border-gray-400 px-4 py-3 text-center">{data.userAns === null ? "-" : (data.ans === data.userAns ? "✅" : "❌")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            className="bg-primary-dark hover:bg-primary-darkHover text-white font-bold py-2 px-4 rounded shadow transition duration-200"
                            onClick={handleReview}
                        >
                            Review Answers
                        </button>
                        <button
                            className="bg-primary-dark hover:bg-primary-darkHover text-white font-bold py-2 px-4 rounded shadow transition duration-200"
                            onClick={handleHomePage}
                        >
                            Home Page
                        </button>
                    </div>
                </div>
            )}

            {showMessage && (
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-4 text-primary-dark">Thanks For Visiting</h1>
                </div>
            )}
        </div>
    );
}

export default ShowResult;
