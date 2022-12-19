import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.toLocaleString('en-US').slice(0,10)}</td>
            <td className='edit-icon'><MdModeEditOutline onClick={() => onEdit(exercise)} /></td>
            <td className='delete-icon'><RiDeleteBin2Fill onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default ExerciseRow;

