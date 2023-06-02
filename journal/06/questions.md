# Single Page Applications with Vue
01. What is the entrypoint of an application?

  > The entrypoint of an application is what code immediately runs once the program is opened. With Vue it could be something like onmounted which runs immediately.

02. What is the difference between a vue `component` and `page`?

  > A component is a piece fo a page, like a message box or notification. A page is an entirely different "page" of your application, like switching from the homepage to the about page.

03. What is ***Component-Based Architecture***?

  > Component based architecture is breaking up individual pieces of an application into smaller "components". A an example of this would be using a specific component for a gift card, and a specific component for a profile card. The benefit of using component based architecture is achieving modularity for the components. This modularity allows you to piece together more components, or another page more quickly than having to rewrite everything from scratch again.

04. What are the three tags that make up a Vue component?

  > Template, script, and style all make up a vue component. The template is the html of the component, the script is the javascript driving the component, and the style styles the component's HTML.

05. What are ***lifecycle hooks***? What are lifecycle hooks used for?

  > Lifecycle hooks are used to target differ points in time at which a component is initialized until being destroyed. We use onmounted to run some code as the component has become mounted on the virtual dom.

06. Which component in Vue does the vue-router use to mount pages onto?

  > Router-vew is where the entire page is injected into the dom.

07. What is the difference between the `AppState` and the state object within a component?

  > The AppState holds the state of an object that the rest of the application references. The state of an object within a component, is computed, but must be set via AppState.* = *. 

08. What is the responsibility of `Services` in our Vue projects?

  > The services hold the same responsibility that they did in MVC. We now have our components holding the controller responsibilities that still point down into the service in order to complete something such as a HTTP request.

09. What are ***props*** and how are they used? Provide an example

  > Props are used for type safety within a component. In a blog card component, the template depends on a blog prop, which points to the model of a blog that includes multiple different properties. If within our template we try to access a property that doesn't exist within the model vue will throw an error. 

10. What is the Vue method used to create watchable objects such as `state` or `AppState`?

  > We use computed() to listen for when something like an array changes in the AppState.
