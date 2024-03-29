import React from 'react';
import { useSelector } from 'react-redux';

function ShowResult({showOutput}) {
    const result = useSelector(state => state.data)

    return (
        <div className="overflow-x-auto">

            {showOutput && <table className="table-auto border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">Question no.</th>
                        <th className="border border-gray-400 px-4 py-2">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((data, id) => (
                        <tr key={id} className={id % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="border border-gray-400 px-4 py-2">{id + 1}.</td>
                            <td className="border border-gray-400 px-4 py-2">{data.ans === data.userAns ? "Correct" : "Incorrect"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default ShowResult;
