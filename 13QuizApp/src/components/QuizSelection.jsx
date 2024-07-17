import React from 'react';

const quizzes = [
  { id: 1, title: 'General Knowledge', description: 'Test your general knowledge.', imageUrl: 'path/to/image1.jpg' },
  { id: 2, title: 'Science Quiz', description: 'How much do you know about science?', imageUrl: 'path/to/image2.jpg' },
  { id: 3, title: 'Math Quiz', description: 'Challenge your math skills.', imageUrl: 'path/to/image3.jpg' },
];

const QuizSelection = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Select a Quiz</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="p-4 bg-primary-light text-primary-dark rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
              <img src={quiz.imageUrl} alt={quiz.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
              <p className="mb-4">{quiz.description}</p>
              <button className="bg-primary-dark text-white py-2 px-4 rounded hover:bg-opacity-75 transition-colors duration-200">
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;
