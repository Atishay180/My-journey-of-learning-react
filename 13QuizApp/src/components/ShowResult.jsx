import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsSubmitted, resetState, setIsUserReviewed, setIsLoader } from '../features/questionSlice';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import bg3 from './../images/bg3.jpg';

function ShowResult() {
    const result = useSelector(state => state.questions);
    const [showMessage, setShowMessage] = useState(false);
    const isLoading = useSelector(state => state.isLoader);
    const isSubmitted = useSelector(state => state.quizStatus.isSubmitted);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleReview = useCallback(() => {
        dispatch(setIsLoader(true));
        setTimeout(() => {
            dispatch(setIsLoader(false));
        }, 500);
        dispatch(setIsUserReviewed(true));
        dispatch(setIsSubmitted(false));
        navigate(-1);
    }, [dispatch, navigate]);

    const handleHomePage = useCallback(() => {
        setShowMessage(true);
        setTimeout(() => {
            dispatch(resetState());
            setShowMessage(false);
            navigate('/');
        }, 1500);
    }, [dispatch, navigate]);

    if (!isSubmitted) {
        return <ErrorPage />;
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start">
            <img className="absolute -z-10 w-full h-full object-cover rotate-180" src={bg3} alt="" />

            {!showMessage && (
                <div className="w-full max-w-6xl p-6 rounded-lg">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary-dark border-b-2 border-gray-800">
                                <th className="px-4 py-3 text-center">Ques No.</th>
                                <th className="px-4 py-3 text-center">Choosed</th>
                                <th className="px-4 py-3 text-center">Remarks</th>
                                <th className="px-4 py-3 text-center">✅ / ❌</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((data, id) => (
                                <tr key={id} className="hover:bg-gray-100 transition-colors duration-200 text-primary-dark lg:text-lg xl:text-xl border-b-2 border-gray-300">
                                    <td className="px-4 py-3 text-center">{id + 1}.</td>
                                    <td className="px-4 py-3 text-center">Option-{data.userAns}</td>
                                    <td className="px-4 py-3 text-center">{data.userAns === null ? "Not Attempted" : (data.ans === data.userAns ? "Correct" : "Incorrect")}</td>
                                    <td className="px-4 py-3 text-center">{data.userAns === null ? "-" : (data.ans === data.userAns ? "✅" : "❌")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex justify-around">
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

        <style>
                {`
            @keyframes text {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-text {
            animation: text 1s ease-in-out;
          }
        `}
        </style>

            {showMessage && (
                <div className="flex w-full h-screen items-center justify-center">
                    <h1 className="animate-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-4 text-primary-dark">Thanks For Visiting</h1>
                </div>
            )}
        </div>
    );
}

export default ShowResult;
