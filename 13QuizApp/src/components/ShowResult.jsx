import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSubmitted, resetState } from '../features/questionSlice';

function ShowResult() {
    const result = useSelector(state => state.questions)
    const [ShowMessage, setShowMessage] = useState(false)

    const dispatch = useDispatch()

    const handleReview = () => {
        dispatch(setIsSubmitted(false))
    }
    
    const handleHomePage = () => {
        setShowMessage(true)
        setTimeout(() => {
            <h1 className=' text-white text-5xl font-bold'>Thanks for visiting</h1>
            dispatch(resetState())
        }, 1500);
    }

    return (
        <div className="overflow-x-auto w-screen flex flex-col items-center">
            {!ShowMessage && <table className="table-auto m-5 w-3/4 border-separate border border-gray-400 text-white-500">
                <thead>
                    <tr className=" text-lg sm:text-xl lg:text-2xl xl:text-3xl text-amber-500 bg-green-500 bg-opacity-20">
                        <th className="border border-white px-4 py-3 w-8 text-center">Ques No.</th>
                        <th className="border border-white px-4 py-3 text-center">Choosed</th>
                        <th className="border border-white px-4 py-3 text-center">Remarks</th>
                        <th className="border border-white px-4 py-3 text-center">✅ / ❌</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((data, id) => (
                        <tr key={id} className={'text-white lg:text-lg xl:text-xl bg-gray-500 bg-opacity-30'}>
                            <td className="border border-white px-4 py-3 w-8 text-center">{id + 1}.</td>
                            <td className="border border-white px-4 py-3 text-center">Option-{data.userAns}</td>
                            <td className="border border-white px-4 py-3 text-center">{data.userAns === null ? "Not Attempted" : (data.ans === data.userAns ? "Correct" : "Incorrect")}</td>
                            <td className="border border-white px-4 py-3 text-center">{data.userAns === null ? "-" : (data.ans === data.userAns ? "✅" : "❌")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}

            {!ShowMessage && <div>
                <button
                    className='bg-white duration-100 hover:bg-gray-200 hover:scale-95 text-zinc-800 text-xl font-bold py-2 px-5 m-5 rounded focus:outline-none focus:shadow-outline'
                    style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}
                    onClick={handleReview}
                    >
                    Review Answers
                </button>
                <button
                    className='bg-white duration-100 hover:bg-gray-200 hover:scale-95 text-zinc-800 text-xl font-bold py-2 px-5 m-5 rounded focus:outline-none focus:shadow-outline'
                    style={{ boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.272)" }}
                    onClick={handleHomePage}
                    >
                    Home Page
                </button>
            </div>}

            {ShowMessage && (
                <div className='overflow-hidden text-center'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-4 text-white'>Thanks For Visiting</h1>
                </div>
            )}

        </div>
    );
}

export default ShowResult;
