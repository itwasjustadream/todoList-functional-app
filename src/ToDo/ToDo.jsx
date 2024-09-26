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
            <h1>ToDo приложение</h1>
            {toDoBase.map(todo => (
                <ToDoItem key={`_todo_${todo._id}`} name={todo.name} 
                isChecked={todo.isChecked} />
            ))}

            <input 
                type="text" 
                value={name} 
                onchange={e => setName(e.target.value)}
                placeholder='Название..'
            />
        </>
    );
};

export default ToDo;