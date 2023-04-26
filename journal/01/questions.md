# Foundations of Web Development
01. In your own words, why do we use Git?
    > Git is a version control system for code. It lets you see the 
    changes you make to files via commits. This is especially useful for teams, to see who contributed to a specific commit / file. Along with that, the commits are time-stamped.
    
02. In the terminal, what is the command `mkdir` used for?
    > mkdir makes a directory

03. What is a ***pseudo-class*** and what are some of the most common ones you think you will use?
    >Pseudo classes are add ons for css selectors that extend the functionality of them.  
    
    >Examples of this would be a **:hover** **:visited** and **:first-child**  

    ``` 
    p:hover{
        color: pink;
    }
    This example would change the p element to pink when hovered.
    ``` 
    ```
    a:visited{
        color: purple;
    }
    This example would change the color of visited links to purple.
    ```
    ```
    h1:first-child{
        background-color: blue;
    }
    This example would change the background color of the first child of an h1 element to blue
    ```

04. What is ***specificity*** and how might you use it to your benefit?
    > Specificity is the "strength" of each css selector starting from id, class, and pseudo elements. Specificity is really neat because it allows you to control how each of your elements is styled. ID is the strongest specificity and I use ID when I only have 1 element to style. There can only be 1 ID for an element. For example, I could assign a <p> element an ID of "bootDescription" and give it the font family, font size, and font color of my choosing. Typically I would use ID's only on the last-child elements of another element. Or for targeting an element with javascript. I would use a class if I needed to repeat styles such as border-radius for a button element.

05. What problems do you think you could run into if you over-utilized the `!important` feature?
    > The __!important__ feature is used to override the specificity of a css selector. The problem with using !important is that you are throwing the strengths of specificity out the window. __!important__ can be convenient to use, but it is not a best-practice.

06. What are the three components that makeup a `CSS` rule? <br> Example:

    ```css
        h1 {
            color: rgba(255, 210, 33, .75);
        }
    ```

    > The three components that makeup a CSS rule are the selector, style, and value. In the case of the above code, the CSS is targeting the __h1__ element, and changing the __color__ of the text to an __rgba__ value.

07. How do you think good design influences people when visiting a website, and what sorts of things could you convey through design alone?
    > Good design on a website makes the experience for both the developer and end-user better. The developer may benefit by writing clean semantic html and clean code. This would make it easier in the future for a new developer to pick up the websites code much quicker than having to sift through messy code. It is impossible to know how the end-user is going to navigate and use the website. That being said, good design can guide the users experience closer to how the developer intended the website to be used. Without feedback on the design from both the user and the developer the website would be driving in the dark. 

08. What is the purpose of ***wireframing***?
    > Wireframing is doing a rough draft of UI typically without styling.This allows for rapid prototypes of the design without having to worry about completing the styles for each component. 

09. Do you think wireframes are worth the time, energy, and effort that they require? Why or Why not?
    > Wireframes are absolutely worth doing. Going with the first design that comes to my head may seem appealing. But it is always helpful to have different versions of my UI in a visual so I can decide which one I would like to use. This would also save me the time it would take to style out each component, this goes for design tools such as figma as well as css styles. 

10. Define the display `:flex property:`
    >  The display:flex; property allows elements that were originally stacked vertically to be stacked horizontally. When display:flex; is enabled, this allows for further alignment of the children elements.

11. What `CSS` properties affect the size of a box model?
    > Margin and Padding both affect the size of a box model. Padding is the spacing of the elements interior, and margin is the spacing of the element in relation to other elements. For example, padding on a button would make the size of the button bigger, while margin would increase the space between the button and the elements around it. 
