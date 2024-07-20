import React from 'react';
import { quizQuestions } from "../hooks/questions.js";
import { NavLink } from 'react-router-dom';
import Loader from './Loader.jsx';
import { setIsLoader, setQuizIndex } from '../features/questionSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import bg4 from './../images/bg4.jpg';

const QuizSelection = () => {
  const isLoading = useSelector(state => state.isLoader);

  const dispatch = useDispatch();

  const handleOnClick = (index) => {
    dispatch(setIsLoader(true));
    dispatch(setQuizIndex(index));

    setTimeout(() => {
      dispatch(setIsLoader(false));
    }, 500);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-full flex flex-col items-center relative">
      {/* Background */}
      <img className='absolute -z-10 w-full h-full object-cover opacity-35' src={bg4} alt="" />

      <style>
        {`
          @keyframes welcomeAnimation {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-welcome {
            animation: welcomeAnimation 1.5s ease-out;
          }

          @keyframes cardAnimation {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-card {
            animation: cardAnimation 1s ease-out;
          }
        `}
      </style>

      <div className="w-full h-full p-6 flex flex-col items-center justify-center text-primary-dark">
        <h1 className="text-5xl font-bold mb-6 animate-welcome">Welcome! Please Select a Quiz</h1>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {quizQuestions.map((quiz, index) => (
            <div
              key={index}
              className="animate-card w-full md:w-1/3 lg:w-1/4 p-4 text-center bg-primary-light rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <img
                src={quiz.logo}
                alt={quiz.title}
                className="w-full h-48 object-contain rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <h2 className="text-2xl font-semibold mb-2">{quiz.title}</h2>
              <p className="mb-4">{quiz.description}</p>
              <NavLink
                to="/start"
                onClick={() => handleOnClick(index)}
                className="bg-primary-dark text-white py-2 px-4 rounded hover:bg-primary-darkHover transition-colors duration-200"
              >
                Start Quiz
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;
