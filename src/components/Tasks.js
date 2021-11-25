import react from 'react'
import React from 'react'

export const Tasks = react.memo(({ task, handleCheckChange, handleDeleteTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="d-flex">
                <input type="checkbox" className="form-check-input me-1"
                    value={task.id} onChange={handleCheckChange}
                    checked={task.estado==='true'}
                />
                <span>
                {
                    task.estado==='false' ? <strike>{task.detalle}</strike> : task.detalle

                }
                </span>
            </div>
            <button
                type="button"
                className="btn bi bi-trash-fill text-danger"
                onClick={() => handleDeleteTask(task.id)}
            ></button>
        </li>
    )
})
