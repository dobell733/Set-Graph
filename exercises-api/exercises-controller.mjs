import 'dotenv/config';
import express from 'express';
import * as exercises from './exercises-model.mjs';
import { check, validationResult } from 'express-validator';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// CREATE controller ******************************************
// since we're creating a new exercise, the request will have a body including info on the new exercise
app.post ('/exercises', (req,res) => { 
    // model function
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit,
        req.body.date,
        )
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Invalid request :(' });
        });
});


// RETRIEVE controllers ****************************************************
// GET exercises filtered by name or date
app.get('/exercises', (req, res) => {
    let filter = {};
    // filter by name
    if(req.query.name !== undefined){
        filter = { name: req.query.name };
    }
    // filter by date
    if(req.query.date !== undefined){
        filter = { date: req.query.date };
    }
    // model function
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed :(' });
        });
});

// GET exercises by ID
app.get('/exercises/:_id', (req, res) => {
    const exercisesId = req.params._id;
    // model function
    exercises.findExercisesById(exercisesId)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed :(' });
        });

});

// UPDATE controller ************************************
// since we're updating an exercise, the request will have a body including info on the updated exercise
app.put('/exercises/:_id', [
        // added validation so that if an exercise is edited, it won't accept and populate the database with blank values. Mongoose doesn't do this automatically for updating.
        check('name').not().isEmpty().withMessage('input required'),
        check('reps').not().isEmpty().withMessage('input required').isNumeric(),
        check('weight').not().isEmpty().withMessage('input required').isNumeric(),
        check('unit').not().isEmpty().withMessage('input required'),
        check('date').not().isEmpty().withMessage('input required').isDate(),
    ],
    (req, res) => {
        const error = validationResult(req).formatWith(({ msg }) => msg);
        const hasError = !error.isEmpty();

        if (!hasError){
            // model function
            exercises.replaceExercise(
                req.params._id, 
                req.body.name, 
                req.body.reps, 
                req.body.weight,
                req.body.unit,
                req.body.date
            )
            .then(numUpdated => {
                if (numUpdated === 1) {
                    res.json({ 
                        _id: req.params._id, 
                        name: req.body.name, 
                        reps: req.body.reps, 
                        weight: req.body.weight,
                        unit: req.body.unit,
                        date: req.body.date
                    })
                }
                else {
                    res.status(404).json({ Error: 'Document not found' });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({ Error: 'Invalid Request' });
            });
        } else {
            res.status(400).json({ Error: 'Invalid Request' });
        }
});

// DELETE Controller ******************************
app.delete('/exercises/:_id', (req, res) => {
    // model function
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed :(' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});