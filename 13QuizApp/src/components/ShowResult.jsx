import React from 'react';
import { useSelector } from 'react-redux';

function ShowResult() {
    const result = useSelector(state => state.data)
    const isSubmitted = useSelector(state => state.isSubmitted)

    return (
        <div className="overflow-x-auto w-screen border-white flex flex-col items-center">

            {isSubmitted ? <table className="table-auto text-xl w-3/4 border-collapse border border-gray-400 text-white-500">
                <thead>
                    <tr className=" bg-gradient-to-tr from-amber-600 to-amber-500">
                        <th className="border border-black px-4 py-3 w-8 text-center">Ques No.</th>
                        <th className="border border-black px-4 py-3 text-center">Choosed</th>
                        <th className="border border-black px-4 py-3 text-center">Remarks</th>
                        <th className="border border-black px-4 py-3 text-center">✅ / ❌</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((data, id) => (
                        <tr key={id} className={id % 2 === 0 ? ' bg-orange-200' : ' bg-amber-100'}>
                            <td className="border border-black px-4 py-3 w-8 text-center">{id + 1}.</td>
                            <td className="border border-black px-4 py-3 text-center">Option-{data.userAns}</td>
                            <td className="border border-black px-4 py-3 text-center">{data.userAns === null ? "Not Attempted" : (data.ans === data.userAns ? "Correct" : "Incorrect")}</td>
                            <td className="border border-black px-4 py-3 text-center">{data.userAns === null ? "-" : (data.ans === data.userAns ? "✅" : "❌")}</td>
                        </tr>
                    ))}
                </tbody>
            </table> : null}
        </div>
    );
}

export default ShowResult;
