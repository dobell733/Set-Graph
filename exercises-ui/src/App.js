import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <>
      <Router>

          <header>
            <h1>Set Table</h1>
            <p>An app for everday gym goers to keep a clear and concise log of their workouts</p>
          </header>

          <Navigation />

          <main>
            <div id="main-wrapper">
              <Route path="/" exact>
                <HomePage setExerciseToEdit={setExerciseToEdit} />
              </Route>

              <Route path="/create-exercise">
                <CreateExercisePage />
              </Route>
              
              <Route path="/edit-exercise">
                <EditExercisePage exercise={exerciseToEdit} />
              </Route>
            </div>
          </main>

          <footer>
          <p>&copy; 2022 Dominic Bell</p>
          <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/1784/dumbbell">Dumbbell</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
          </footer>

      </Router>
    </>
  );
}

export default App;