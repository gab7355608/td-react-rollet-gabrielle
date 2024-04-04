import React, { useState } from 'react'

export default function TaskForm({taskList, setTaskList}) {
    const [newItem, setNewItem] = useState({
        name: "",
        state : ""
    });

    const handleInputChange = (event) => {
        setNewItem({
            name: event.target.value,
            state: "undone"
        })
    }

    const validateSubmit = () => {
        if(newItem.name.length >= 2){
            setTaskList([...taskList, newItem]);
            setNewItem({
                name: "",
                state : ""
            });
        }
    }

  return (
    <div data-cy="task-form">
        <input value={newItem.name} data-cy="task-input" placeholder='Rentrez une tâche...' onChange={handleInputChange}/>
        <button data-cy="add-task-btn" onClick={validateSubmit}>
            Ajouter la tâche
        </button>
    </div>
  )
}
