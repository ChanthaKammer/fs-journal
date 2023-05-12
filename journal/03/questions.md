# Application Architecture, MVC Design Pattern
01. What are the Pillars of Object Oriented Programming (`OOP`)?
  
  > There are four pillars of object oriented programming. The first is abstraction. Abstraction is breaking up complex processes into many simple ones. A good example of this would be having a player class, with separate properties for name, skill, id, and so on. The second is encapsulation, which is splitting different responsibilities from a program into multiple files. The MVC is an excellent example of this because it showcases a model that is responsible for updating a component on the page, and a service emitting events that cause the model to update. Inheritance is the third pillar. Inheritance is being able to have a parent class that has a child class by inheriting properties from it. If you have an animal class with properties for name, type, and age. You can have two separate child classes such as Cat and Dog, that inherit the three properties that the animal class has. Polymorphism is the final pillar. Polymorphism refers to objects having the same methods as each other, but with different functionality. 

02. How does `export` differ from `export default`?
  
  > Normal export allows you to import different components of another javascript file via named imports such as: { setHTML, setText }. You can have a single default export per file. Just like exporting {Player} from a Player model. You can also skip defining the {Player} name when importing it and use your own name for it.

03. What is Encapsulation?
  
  > Encapsulation is categorizing your code based on role, responsibility, and privacy. Certain code does not need to interact with code. Such as an apple interacting with the methods to a checkout button of a website. The apple and the checkout button both fire in the act of buying groceries, but have no use being in the same file. If the checkout button needs to function differently than a wishlist button, but both share a common task; both can import methods from the same class while being in separate files. When my user removes an apple from my wishlist, should it remove it from my cart as well? This separation of concerns makes encapsulation a powerful tool to build software.

04. What are some of the benefits of the `Proxy` object that we are using in our structure for applications?
  
  > Proxy objects prevent accessing the gets and sets of an object and implement custom logic to them. The handler for a proxy can reject gets and sets for properties under different conditions. For example not allowing a players health to go below zero. You can implement this with using conditionals just fine. However, proxies are a safety net to prevent the properties of objects being set to something that can interfere with how the object functions within the application.

05. What the difference between a `class` and an instance of a `class`?
  
  > A class is a blueprint for multiple objects (instances) to be created with the same properties. A player class can set the properties of a player object when it is instantiated. Instead of declaring many different objects with similar properties, you can use a constructor to streamline that process to make creating 5 objects with 5 lines of code rather than 25 lines.

06. What is a computed Property?
  
  > A computed property is a way of declaring properties on an object with expressions. MDN provided an example of declaring an object with [`foot${++i}`]:i three times. You can do that repeatedly as many times as you want in order to access a[foo10].Another example showcased declaring a string that concatenates two properties together as the result of a getter. So in this case, you can have a property that combines multiple pre existing properties on an object via an expression. So you could take a persons investment amount, their interest rate, and assign it to a new property without having to pass both of those through a method.  

07. What is the purpose of the `MVC` pattern?
  
  > The purpose of MVC is to encapsulate different parts of your code in different files based on role, responsibility, and privacy. MVC separates your code into pieces that work amongst themselves safely in the MVC structure.

08. What is the job of the `Controller` in the `MVC` Pattern?
  
  > The controller in MVC listens for when the service fires an event. It is the receiving end of the observer pattern. An example of this would be appState.on('event', function). When an event happens, the controller will fire a function in itself or in the model.

09. What is the job of the `Service` in `MVC`?
  
  > The service is for taking responsibility for the business responsibility of the application away from the controller. The service will 'emit' events that are recieved by the controller to tell the model to update components.

10. What is the job of the `Model` in `MVC`?
  
  > The model in MVC is in charge of returning components to the DOM with data that is updated by the business logic of the service. The controller is what tells the model to update when it recieves new data.
