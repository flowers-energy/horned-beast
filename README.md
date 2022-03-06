
Feature Tasks
Complete the following steps to setup your repository:
Create a React application using create-react-app as demonstrated in class.
Use the command npx create-react-app <repo-name>.
Create a new repository on GitHub WITHOUT a README.md. We will import an “existing” repository with its own README
Follow the instructions given by GitHub to “push an existing repository from the command line”
be sure to select HTTPS or SSH, whichever is relevant for you
Create a Branch and begin your work. As always, ACP often
Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

Your Header component needs to have an <h1> with a title.

Your Footer component needs to contain your name as the author.

The Main component needs to render at least two copies of a component called HornedBeast.

The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

Feature #1: Display images
Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

How are we implementing it?
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

Feature #2: Allow users to vote for their favorite beast
Why are we implementing this feature?
As a user, I want to be able to interact with the site and pick my favorite beast.
What are we going to implement?
Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

Feature 3: Bootstrap
Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way
The images should be displayed in columns, as screen width allows

How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
Stretch Goal: Add Interaction
Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
What are we going to implement?
Given that a user clicks on an item other than the horned beasts, such as the title of the page or the footer, the information and styles should change.

How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.
Submission Instructions
Complete your Feature Tasks for the day
Create a Pull Request (PR) back to the main branch of your repository
On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
A question within the context of today’s lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment
How long you spent working on this assignment

Number and name of feature: 
Feature #1: Display images

Estimate of time needed to complete: 30 minutes

Start time: 2:05 pm

Finish time: 2:30 pm

Actual time needed to complete: 25 min

Number and name of feature: Feature #2: Allow users to vote for their favorite beast

Estimate of time needed to complete: 30 min

Start time: 1:30 pm

Finish time: 2:15 pm

Actual time needed to complete: 45 min

Number and name of feature: Feature 3: Bootstrap

Estimate of time needed to complete: 40 min

Start time: 2:20 pm

Finish time: 3:05 pm

Actual time needed to complete: 45 min

Number and name of feature: Display Modal

Estimate of time needed to complete: 1hr 30min

Start time: 4:10 pm

Finish time: 5:45 pm

Actual time needed to complete: 1hr 35min
