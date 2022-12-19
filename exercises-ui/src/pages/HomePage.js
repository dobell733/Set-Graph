import React from 'react';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of exercises from MongoDB
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    } 

    // loadExercises() will be called once, only when the page is initially loaded
    useEffect(() => {
        loadExercises();
    }, []);
    
    // UPDATE an excercise
    const onEditExercise = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    // DELETE an exercise
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Could not delete excercise with id: ${_id}.`)
        }
    }

    // DISPLAY the exercises
    return (
        <>
            <article>
                <h2>Table of Excercises</h2>
                <p>Use this page to view your past workouts. You can also edit and delete past workouts from this page using the table below. Use the "Create" button above if you'd like to add a new exercise to the table.</p>
                <ExerciseTable
                    exercises={exercises} 
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;