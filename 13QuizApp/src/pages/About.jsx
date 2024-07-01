import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary-dark">About Us</h1>
        <p className="mb-6 text-gray-700">
          Welcome to our quiz application! We are dedicated to providing the best quiz experience for users of all ages. Our mission is to make learning fun and engaging through interactive quizzes.
        </p>
        <div className="mb-6 p-6 bg-primary-light rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-primaryt-dark">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where learning is accessible and enjoyable for everyone. Through our platform, we aim to foster a love for knowledge and continuous improvement.
          </p>
        </div>
        <div className="mb-6 p-6 bg-primary-light rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-primaryt-dark">Our Team</h2>
          <p className="text-gray-700">
            Our team is composed of passionate educators, developers, and designers who are committed to creating a seamless and enjoyable learning experience. We believe in the power of quizzes to reinforce learning and make it a memorable experience.
          </p>
        </div>
        <div className="p-6 bg-primary-light rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-primaryt-dark">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or feedback, feel free to reach out to us at <a href="mailto:info@quizapp.com" className="text-primaryt-dark underline">info@quizapp.com</a>. We would love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
