# Managing the Fullstack Application

1. Describe the two ways to bind Data in Vue?

  > You can use :src or v-bind:src. The colon in front of src is just the shorthand for binding.

2. The `SPA` acronym stands for what?

  > SPA stands for a single page application.

3. What are some of the advantages/uses of a `SPA` over a traditional one?

  > The big advantage of using a SPA is that your website is extremely performant. On other websites navigating between an about.html and home.html takes time, while using a vue router to nagivate between pages is nearly instant. SPA's are also modular when built with components allowing a developer to rapidly dpeloy multiple pages at a time, rather than having to build each component by hand each time in normal html. Having a simple <Comment/> component is very similar to looping over an array and writing javascript to a template. But when you have multiple different types of components the time-debt you acrrue by not using components outweighs the time it takes to re-use components.

4. What does the `onMounted` method in Vue do?

  > Onmounted is a lifecycle hook for when a component is mounted to the virtual dom. This can be helpful when fetching data on page load, specifically when a component is mounted. You can have onmounteds on both pages and components.

5. What is the `v-model` attribute in Vue for, and when might you use it?

  > The v-model attribute is an easy way to manage multiple different form inputs. You reference the v-model by binding an object to it such as editable, and then extracting all the data from the editable object into a function. This saves loads of time when handling forms through a service, but sadly doesnt speed up the process of making a form.

6. What is the package.json file used for?

  > The package.json file in a node project contains all the dependencies for a project to run. Examples of this would be vue, vue-router, and axios. 

7. Which Vue attributes(directives) could you use to conditionally render elements on a page?

  > You can use v-if and v-else to conditionally render elements onto a page. You can also use a computed property to return element html to accomplish the same thing.

8. What is the purpose of the `key` attribute when using `v-for` on an element?

  > The key attribute provides specificity for the prop you are supplying the v-for with. This aids in rendering a list of components to the screen, and helps vue differentiate different obejcts from each other..

9. What is the `<slot>` element and what is it used for?

  > The slot element is specific to vue and is used for giving a parent component the space for a child component to fill.
