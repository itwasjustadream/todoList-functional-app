import React, {useState} from "react";
import './index.css';
import ToDoItem from "./ToDoItem";

const toDoBase = [
    {
        _id: 1,
        name: 'Купить Макбук',
        isChecked: true,
    },
    {
        _id: 2,
        name: 'Купить молоко',
        isChecked: false,
    },
];

const ToDo = () => {
    const [name, setName] = useState('');
    return (
        <>
            {toDoBase.map(todo => (
                <ToDoItem key={`_todo_${todo._id}`} todo={todo} />
            ))}

            <input 
                type="text" 
                value={name} 
                onchange={e => setName(e.target.value)}
                placeholder='Введите имя нового таска'
            />
        </>
    );
};

export default ToDo;