import React from 'react';
import { useSelector } from 'react-redux';

function ShowResult() {
    const results = useSelector(state => state.results);

    return (
        // temporary
        <div>
            <h1>Quiz Results</h1>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <p><strong>Question:</strong> {result.question}</p>
                        <p><strong>Your Answer:</strong> {result.userAnswer}</p>
                        <p><strong>Correct Answer:</strong> {result.correctAnswer}</p>
                        <p><strong>Result:</strong> {result.isCorrect ? 'Correct' : 'Incorrect'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowResult;
