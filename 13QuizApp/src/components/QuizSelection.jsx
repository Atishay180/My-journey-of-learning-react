import React from 'react';
import { quizQuestions } from "../hooks/questions.js"
import { NavLink } from 'react-router-dom';
import Loader from './Loader.jsx';
import { setIsLoader, setQuizIndex } from '../features/questionSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import bg4 from './../images/bg4.jpg';

const QuizSelection = () => {
  const isLoading = useSelector(state => state.isLoader)

  const dispatch = useDispatch();

  const handleOnClick = (index) => {
    dispatch(setIsLoader(true))

    dispatch(setQuizIndex(index))

    setTimeout(() => {
      dispatch(setIsLoader(false))
    }, 500);
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className="h-full flex flex-col items-center">
      <img className='absolute -z-10 w-full h-full object-cover opacity-55 rotate-180' src={bg4} alt="" />

      <div className="w-full rounded-lg p-6">
        <h1 className="text-primary-dark text-3xl font-bold text-center mb-3">Welcome! Please Select a Quiz</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {quizQuestions.map((quiz, index) => (
            <div key={index} className="p-4 bg-primary-light text-primary-dark rounded-lg shadow hover:bg-primary-lightHover hover:shadow-lg transition-shadow duration-200">
              <img src={quiz.logo} alt={quiz.title} className="w-full h-32 object-contain rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
              <p className="mb-4">{quiz.description}</p>
              <NavLink to="/start" onClick={() => handleOnClick(index)} className="bg-primary-dark text-white py-2 px-4 rounded hover:bg-primary-darkHover transition-colors duration-200">
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
