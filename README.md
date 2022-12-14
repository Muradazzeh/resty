# Component Based UI
* ### this is the link for github pages [link github pages](https://muradazzeh.github.io/resty/)
* ### this is the link for netlify [netlify link](https://amazing-raindrop-71f627.netlify.app/)
* ### this is the link for sandbox [sandbox](https://codesandbox.io/s/wyhxx5)
## lap 29 update 

* we used reducer hook to put the history for the api calls 
* I added extra feature that will show the history on button click 

![link](./image/Screenshot%20(483).png)
![link](./image/Screenshot%20(484).png)
![link](./image/Screenshot%20(485).png)
* I prepared UML diagram for the starter code as shown below : 

![link](./image/uml%20class%20digram.png)

## Lab Requirements
* Refactor the RESTy application as follows:

* [x] Convert all child components of App.js from classes to functions
* [x] The App component serves as the container for all sub-components of this application.
   Leave this component as a Class.
* [x] Make sure all base styles for App are included in a .scss imported within App.js.
* [x] Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.
* [x] Use .scss files to style each component
  Each of the components use their own .scss file for styling.
* [x] Core application functionality should remain unchanged:
The <Form> component should:
Call a function on submit that updates the <App/> component via a function sent down as a prop so that the app can process the form values.
The <Results/> component should show mock API results.

* After arranging file as requirement this is the task tree

![link](./image/Screenshot%202022-08-09%20004934.png)



* We got the code from starter code , what I did I changed  the class components to the function component , for the footer , form , header , and the results 

* I kept the app.js as class component as they required in the lap 

* this is the result from local host

![link](./image/Screenshot%20(449).png)

* this is the result for lap 27 update 
* I add axios to fetch data from real api and get result from it as shown 
* and I add conditional rendering for post and put so the test area will appear 

![link](./image/Screenshot%20(467).png)



* GitHup action 

![link](./image/Screenshot%20(460).png)

![link](./image/Screenshot%20(461).png)




