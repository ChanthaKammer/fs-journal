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
    > | ANSWER HERE |

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
    > Good design on a web

08. What is the purpose of ***wireframing***?
    > Wireframing is doing a rough draft of UI typically without styling.This allows for rapid prototypes of the design without having to worry about completing the styles for each component. 

09. Do you think wireframes are worth the time, energy, and effort that they require? Why or Why not?
    > Wireframes are absolutely worth doing. Going with the first design that comes to my head may seem appealing and the best approach. But it is always helpful to have different versions of my UI in a visual so I can decide which one I would like to use. This would also save me the time it would take to style out each component, this goes for design tools such as figma as well as css styles.

10. Define the display `:flex property:`
    > | ANSWER HERE |

11. What `CSS` properties affect the size of a box model?
    > | ANSWER HERE |
