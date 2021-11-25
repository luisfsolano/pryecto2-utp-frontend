import React, { useEffect, useState } from 'react'
import { deleteTask, getTasks, saveTask, updateTask } from '../services/task';
//import { listTasks } from '../data.json'
import { Tasks } from './Tasks';



export const ListTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask) {
            saveTask({ detalle: newTask }).then((resp) => {
                setTasks([
                    ...tasks,
                    resp
                ]);
                setNewTask('');
            }).catch();
        }
    }
    useEffect(() => {
        getTasks().then((data) => {
            console.log(data);
            setTasks(data)
        }).catch(() =>
            setTasks([])
        );

    }, []);
    return (
        <>
            <Lista tasks={tasks} setTasks={setTasks} />
            <br />
            <label className="px-4">Nueva tarea:</label>
            <form className="px-4 d-flex" onSubmit={handleAddTask}>
                <input type="text" className="form-control me-3"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

export const Lista = React.memo(({ tasks, setTasks }) => {
    const handleCheckChange = ({ target }) => {
        console.log(target);
        updateTask({
            id: parseInt(target.value),
            estado: target.checked?'true':'false',
            detalle: tasks.find(e=> parseInt(e.id) === parseInt(target.value))?.detalle
        }).then(()=>{
                getTasks().then((data) => {
                    console.log(data);
                    setTasks(data)
                }).catch(() =>
                    setTasks([])
                );
        }).catch();

    }
    const handleDeleteTask = (id) => {
        deleteTask(id).then((resp => {
            if (resp === true) {
                getTasks().then((data) => {
                    console.log(data);
                    setTasks(data)
                }).catch(() =>
                    setTasks([])
                );
            }
        })).catch();
    }
    return (
        <ul className="list-group list-group-flush">
            {
                tasks.map((e) =>
                    <Tasks
                        key={e.id}
                        task={e}
                        handleCheckChange={handleCheckChange}
                        handleDeleteTask={handleDeleteTask}
                    ></Tasks>
                )
            }
        </ul>
    )
})
