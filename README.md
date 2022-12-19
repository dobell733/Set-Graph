# Set Graph

## Description

Set Graph is a Single Page Web Application that I created in order to more easily keep logs of my workouts. The main technologies that I used to build this application are MongoDB, Express, and Node.js for the backend and React for the frontend. In the future, I would like to create a feature that allows the user to see how much weight they've added over time for all of their workouts in the form of various graphs. However, for the time being, it is exactly what I needed to make my workout life easier and I hope it can do the same for you!

## Install

To start, you will need Node.js (v16.16.0 or above) installed on your machine and you will need to create a MongoDB account.

https://nodejs.org/en/download/

https://www.mongodb.com/home

Create a new cluster, database, and collection. I named my database, "exercises_database", and my collection, "exercises".

Obtain the connection string of the cluster you created and keep it handy.

Create a .env file in both the exercises-api and exercises-ui directories. 

In the `exercises-api` `.env` file you will need two variables. The first variable should be `MONGODB_CONNECT_STRING` and should be set equal to your unique connection string obtained earlier (replace <password> with your actual password). The second variable should be `PORT` and should be set equal to whatever port you would like your Express server to listen on (I used 3000).

In the `exercises-ui` `.env` file you will need one variable. This variable will be `PORT` and should be set equal to whatever port you would like your browser to run the app at. This port has to be different than the port used in `exercises-api` (I used 8000).

In the exercises-api and exercises-ui directories, run:

### `npm install`
To install all of the projects dependencies on your local machine.

### `npm start`

To run the app in the browser and start up the Express server.

Open [http://localhost:8000](http://localhost:8000) to view it in the browser (if you used my port recommendations above).

You should now have Set Graph up and running on your local machine. Enjoy! :muscle: :raised_hands:
