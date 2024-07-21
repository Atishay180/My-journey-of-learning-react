import React from 'react'

const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Profile</h2>
                
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="https://via.placeholder.com/150" // Placeholder for profile image
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <input
                        type="file"
                        className="mt-2"
                        aria-label="Upload profile picture"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        readOnly
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                        id="bio"
                        rows="4"
                        placeholder="Write a short bio"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm"
                    >
                        This is a short bio about the user.
                    </textarea>
                </div>

                <button
                    className="w-full py-2 px-4 bg-primary-dark text-white font-medium rounded-md shadow-sm hover:bg-primary-darkHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark mb-4"
                >
                    Save Changes
                </button>

                <button
                    className="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profile
