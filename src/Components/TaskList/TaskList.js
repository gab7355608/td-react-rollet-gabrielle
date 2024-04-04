import React from 'react';

export default function TaskList({ taskList, setTaskList, filter }) {

    const handleStateChange = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].state = updatedTaskList[index].state === "undone" ? "done" : "undone";
        setTaskList(updatedTaskList);
    }

    return (
        <ul data-cy="task-list" className="taskLists">
            {
                taskList.map((task, index) => (
                    (task.state === filter || filter === "all") && (
                        <li data-cy="task-item" onClick={() => handleStateChange(index)}  key={index} className={task.state === 'undone' ? 'not-completed' : 'completed'}>
                            {task.name}
                        </li>
                    )
                ))
            }
            
        </ul>
    )
}
