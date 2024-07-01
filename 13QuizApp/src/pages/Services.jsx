import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary-dark">Our Services</h1>
        <p className="mb-10 text-gray-700 text-center">
          Discover the range of services we offer to enhance your learning experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/interactive-quizzes.jpg" alt="Interactive Quizzes" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Interactive Quizzes</h2>
            <p className="text-gray-700">
              Engage with our interactive quizzes designed to test and improve your knowledge in various subjects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/custom-quiz-creation.jpg" alt="Custom Quiz Creation" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Custom Quiz Creation</h2>
            <p className="text-gray-700">
              Create your own quizzes with our easy-to-use tools, perfect for educators, trainers, and individuals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/progress-tracking.jpg" alt="Progress Tracking" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Progress Tracking</h2>
            <p className="text-gray-700">
              Monitor your progress with detailed analytics and reports to help you identify areas for improvement.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/community-support.jpg" alt="Community Support" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Community Support</h2>
            <p className="text-gray-700">
              Join our community to share knowledge, ask questions, and support each other's learning journeys.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/certification.jpg" alt="Certification" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Certification</h2>
            <p className="text-gray-700">
              Earn certifications for completing quizzes and demonstrating your knowledge.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/live-quiz-events.jpg" alt="Live Quiz Events" className="rounded-t-lg w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary-dark">Live Quiz Events</h2>
            <p className="text-gray-700">
              Participate in live quiz events to challenge yourself and compete with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
