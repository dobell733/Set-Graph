import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateExercisePage() {

    const [name, setName]     = useState('');
    const [reps, setReps]     = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit]     = useState('lbs');
    const [date, setDate]     = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p id="create-paragraph">Use the form below to input information about the exercise you would like to add.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What exercise would you like to add?</legend>
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
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    ><span>Add</span></button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;