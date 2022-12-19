# Set Graph

## Description

Set Graph is a Single Page Web App that I created in order to more easily keep logs of my workouts. The main technologies that I used to build this application are MongoDB, Express, React, and Node.js. In the future, I would like to create a feature that allows the user to see how much weight they've added over time for all of their workouts in the form of various graphs. However, for the time being, it is exactly what I needed to make my workout life easier and I hope it can do the same for you!

## Install

To start, you will need to create a MongoDB account and will need to create a database collection in order to obtain a connection string to use.

https://www.mongodb.com/home

Next, create a new cluster, database, and collection. I named my database, "exercises_database", and my collection, "exercises".

Finally, obtain the connection string of the cluster you created.

Create a .env file in both the exercises-api and exercises-ui directories. 

In the `exercises-api` `.env` file you will need two variables. The first variable should be `MONGODB_CONNECT_STRING` and should be set equal to your unique connection string obtained earlier. The second variable should be `PORT` and should be set equal to whatever Port you would like your Express server to listen on (I used 3000).

In the `exercises-ui` `.env` file you will need one variable. This variable will be `PORT` and should be set equal to whatever Port you would like your browser to run at. This Port has to be different than the Port used in `exercises-api` (I used 8000).

In the exercises-api and exercises-ui directories, run:

### `npm install`
To install all of the projects dependencies on your local machine

### `npm start`

To run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
