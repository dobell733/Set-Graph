import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function EditExercisePage({ exercise }) {
 
    const [name, setName]     = useState(exercise.name);
    const [reps, setReps]     = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit]     = useState(exercise.unit);
    const [date, setDate]     = useState(exercise.date.toLocaleString('en-US').slice(0,10));
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Exercise has been edited!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise in the collection</h2>
            <p id="create-paragraph">Change the inputs below and click save to edit your workout.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What changes would you like to make?</legend>
                    <label for="name">Exercise name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required />
                    <br></br>

                    <label for="reps">Reps performed:</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        min="0"
                        required />
                    <br></br>

                    <label for="weight">Weight:</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight"
                        min="0"
                        required />

                    <label for="unit">Unit:</label>
                    <select
                        name="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit"
                        required>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                    </select>
                    <br></br>

                    <label for="date">Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />
                    <br></br>

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    ><span>Save</span></button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;