import React, { useState } from 'react'
import { data } from '../hooks/questions'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/resultSlice';

function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index])

    const dispatch = useDispatch()

    const handleNext = () => {
        const newIndex = index + 1;

        if (newIndex < data.length) {
            setIndex(newIndex)
            setQuestion(data[newIndex])
        }
        //if question gets completed
        else {
            setIndex(0);
            setQuestion(data[0])
        }
    }
    const handlePrevious = () => {
        const newIndex = index - 1;

        if (newIndex >= 0) {
            setIndex(newIndex)
            setQuestion(data[newIndex])
        }
        else {
            setIndex(0);
            setQuestion(data[0])
        }
    }

    const checkAns = (ans) => {
        const isCorrect = question.ans === ans
        dispatch(addTodo({question : question.question, userAnswer : ans, correctAnswer : question.ans, isCorrect}))
    }

    return (
        <div className="container bg-white p-4 rounded-md shadow-md max-w-5xl mx-auto">
            <h1 className="text-lg font-bold mb-4">{index + 1}. {question.question}</h1>
            <ol className="mb-4">
                <li className={`p-2 border rounded-md cursor-pointer m-3 hover:bg-gray-300`} onClick={() => { checkAns(1) }}>{question.option1}</li>
                <li className={`p-2 border rounded-md cursor-pointer m-3 hover:bg-gray-300`} onClick={() => { checkAns(2) }}>{question.option2}</li>
                <li className={`p-2 border rounded-md cursor-pointer m-3 hover:bg-gray-300`} onClick={() => { checkAns(3) }}>{question.option3}</li>
                <li className={`p-2 border rounded-md cursor-pointer m-3 hover:bg-gray-300`} onClick={() => { checkAns(4) }}>{question.option4}</li>
            </ol>

            <div className="flex justify-between px-3">
                {index > 0 && <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePrevious}>Previous</button>}

                {index < data.length - 1 && <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNext}>Next</button>}
            </div>


        </div>
    )
}

export default Quiz
