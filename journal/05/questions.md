# Intro to Server side concerns with JavaScript
01. What do the letters of the acronym `CRUD` stand for?

  > Create, read, update, and delete.

02. Each action that `CRUD` represents maps to an HTTP request. What HTTP request does each `CRUD` action correspond to?

  > Post, get, put, delete.

03. What does `ORM` stand for? Which `ORM` do we use when interacting with MongoDB

  > ORM stands for object relational mapping. We use mongoose as our ORM with MongoDB.

04. Which two `HTTP` request types include a body?

  > POST and PUT both need to have a body. This is because we are sending a new object to the database, or updating the content of an object on the database.

05. In a/an _______ coding model, when you call a function, it returns only when the action has finished and stops your program for the time the action takes. Likewise in a/an _______ coding model, multiple things are allowed to happen at one time. When you perform an action, your program continues to run.  Fill in the blanks.

  > Synchronous, asynchronous.

06. What are the three types of data relationships? Provide an example of each.

  > The three types of data relationships are, one-to-one, one-to-many, and many-to-many.A good example of this would be having one colony to one planet, lets say a colony that hasn't discovered space travel. A one to many relationship would be a galaxy with millions of stars in it. A many to many relationship would be having multiple colonies of the same species on multiple different planets and even star systems.

07. What is middleware?

  > Middleware is what is used as a connection pipeline between two or more systems that need to communicate with each other. Express is a good example of middleware, which allows you to send HTTP methods to databases or servers. Since nodejs is the server, express bridges the client to the server, which communicates to the database. The data from the database gets send back to the server, which sends it back to the client.

08. The ______ pipeline delivers information from the client while the ______ pipeline returns it. Fill in the blanks. 

  > Client to server, server to client. This is done by HTTP requests and HTTP responses.

09. Demonstrate the pattern that is used to include a request query with the client's `HTTP` request providing the property `tag` and the value `winter`.

  > http://sandbox.com/api/countries/?tag=winter

10. What is a ***virtual property***?

  > A virtual property is a property an object gets via reference across schemas. There can be a planet with the virtual property of a specific colony, or a galaxy with the virtual property of all its children. 
