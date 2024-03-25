import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllText, removeText, editText } from '../slice/todoSlice';

function Show() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const [editedTexts, setEditedTexts] = useState({});

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [editBtnText, setEditBtnText] = useState("Edit");

    const edit = (todoId, newText) => {
        if (isTodoEditable === false) {
            setIsTodoEditable(true);
            setEditBtnText("Save");
        } else {
            setIsTodoEditable(false);
            setEditBtnText("Edit");
            dispatch(editText({ id: todoId, newText: newText }));
        }
    };

    console.log(isTodoEditable);

    return (
        <>
            <div className='show-container'>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <input
                            className='border border-pink-600'
                            type="text"
                            value={editedTexts[todo.id] !== undefined ? editedTexts[todo.id] : todo.text}
                            onChange={(e) => setEditedTexts({ ...editedTexts, [todo.id]: e.target.value })}
                            readOnly={!isTodoEditable}
                        />

                        <div className="btn-container">
                            <button className='remove-btn' onClick={() => dispatch(removeText(todo.id))}>Remove</button>
                            <button className='edit-btn' onClick={() => edit(todo.id, editedTexts[todo.id])}>{editBtnText}</button>
                        </div>
                    </div>
                ))}
            </div>
            <br /><br />
            <button className='remove-all-btn' onClick={() => dispatch(removeAllText())}>Remove All</button>
        </>
    );
}

export default Show;
