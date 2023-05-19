# Understanding Asynchronous Code, and API's
01. What is the difference between `asynchronous` code and `synchronous` code?

  > Synchronous code runs top to bottom of a file. With the bossmonster project code ran from top to bottom and functions and one function at a time. Asynchronous means we can wait on a function to complete while we use another function, this week we have used asynchronous code to hit API's and use Pop.

02. What is an event listener?

  > An event listener listens for a certain event within the DOM or Javascript to run a function. A simple example would be an onsubmit listener. With appstate.on we can wait for values to change, or an event emitted to run a function. This is especially useful and powerful for the MVC as I can fire an event from my service, and my controller can take that event to run something such as a draw function for the rest of my app.

03. What does *REST* stand for, and in simple terms what does it mean??

  > Rest stands for restpresentational state transfer. Rest transfers the current state of a piece of information via an API. As of this week, we have grabbed pokemon, nasa, and codeworks sandbox information via that. The important part of it is that a restful api always responds with the state of data. The data can change and we will be able to get it from the API just fine, but we will have to continuously hit an API for the data to be "live".

04. What is a callback / higher order function?

  > A callback is a function that is placed inside another function. An example of this would be a controller firing a function such as drawboxes, and the drawboxes controller function calls the drawboxes function from the service.

05. What is a `promise`? How do you capture an error from a `promise`?

  > A promise has two states, resolve, and reject. So far we have used try catches, which tries something such as getting a confirmation from the user, and if that confirmation goes bad there is a catch statement. The catch statement will catch the error as a result of running the function and return that to us.

06. Name three processes used to make requests over `HTTP`?

  > So far we have used get, post, and delete. Get gets data such as a list of houses, post posts a house to a database, and delete deletes a value from a database. This is accomplished right now through the used of APIs

07. What does the `API` acronym stand for?

  > API stands for application programming interface

08. What must you do in order to `await` a promise inside of a function?

  > You need to have async in front of the function declaration.

09. What is the purpose of encapsulation in programming?

  > Encapsulation allows us to separate parts of our code into different parts based on role, responsibility, and privacy. For interacting with houses on an api, we have a controller that interacts with the service and model, and a service that interacts with the raw data stored in our appstate or an api.

10. What is `HTTP` response code for a successful request?

  > A ~200 code indicates a successful request

11. What is a 400 error?

  > A 400 error indicates that something is missing from the request, or that something is missing on the server. The 404 is the most common not found indicating that something on the server, or something on the client is missing. This means that a path cannot be resolved to find whatever information the request is looking for.
