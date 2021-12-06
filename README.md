# Single Page Applications Sprint Challenge

- [Single Page Applications Sprint Challenge](#single-page-applications-sprint-challenge)
  - [About the author Rick Mansfield](#about-the-author-rick-mansfield)
    - [Hi there 👋](#hi-there-)
  - [Skills:](#skills)
    - [FRONTEND:](#frontend)
    - [BACKEND:](#backend)
    - [ADDITIONAL SKILLS:](#additional-skills)
  - [Want to try this challenge yourself?](#want-to-try-this-challenge-yourself)
  - [Introduction](#introduction)
  - [Interview Questions](#interview-questions)
  - [Instructions](#instructions)
    - [Task 1: Project Set Up](#task-1-project-set-up)
    - [Task 2: Project Requirements](#task-2-project-requirements)
      - [Testing MVP](#testing-mvp)
    - [Task 3: Stretch Goals](#task-3-stretch-goals)
  - [FAQs](#faqs)

## About the author Rick Mansfield
### Hi there 👋

<!--
**rickmansfield/rickmansfield** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 😄 Pronouns: ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- ⚡ Fun fact: ...
-->
- 💬 Ask me about coding and I may never shut up. LOL
- 📫 How to reach me: [Resume](https://resume.creddle.io/resume/4uxc0m7zngm) or [LinkedIn](https://www.linkedin.com/in/peacefulrick/)
- 😄 [See My PORTFOLIO](https://mansfield-port-v3.netlify.app/)
- ⚡ Fun fact: ...really wanted to obtain the domain name VikingsCode.com since my family descended from Germanic Vikings!

## Skills:
### FRONTEND: 
- React.js, Redux, Hooks, Context API, Jest, Yum, Axios, Javascript, HTML, CSS, Ant Design, RESTful API Design, JSX
### BACKEND:
- Node.js, Express, SQL, PostgreSQL, Python, Git CLI, VS Code, Vercel, Heroku, Netlify, Postman
### ADDITIONAL SKILLS:
- Agile Project Management, Algorithms, Architecture, Debugging, Deployment, Technical Project Management

## Want to try this challenge yourself?

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned for SPA's and apply them in a concrete project. Study and explored **single page applications** before you begin. You should have studied **routing, forms, and testing in cypress** in order to perform this challenge. In this challenge, you will demonstrate your mastery of these skills by creating **Lambda Eats**, a website designed to bring food to hungry coders.

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

You may use the following wireframes (also in a folder above) as guidance as you design your site but it is not required that you do so.

[Form](https://tk-assets.lambdaschool.com/d43783ef-e6a8-4154-ba68-430e2275fddc_Form.png)

[Home Page](https://tk-assets.lambdaschool.com/ed737cf5-723e-428d-9b25-192143c8b71f_HomePage.png)

[Confirmation](https://tk-assets.lambdaschool.com/a0f43a34-9fab-4d2b-89f7-e23b22d32964_Pizza.gif)


## Interview Questions
- Once you have completed this challenge you should be able to answer these questions in an interview. 

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.

   - **ANSWER** 
   
   `useRouteMatch` hook helps determin if a given component is on a certain page. It's useful in conditions when we need to know somwthing specific related to whether we're on a particular route or not. 

2. How would you explain form validation to someone who has never programmed before?
3. In 1-2 sentences, define end to end testing.

## Instructions

### Task 1: Project Set Up

- [ ] Clone your OWN version of the repository (Not mine or Bloom Institute of Technology's by mistake!). 
- [ ] Simply copy the zip file and then unzip it on your local machine and use your favorite IDE to get rolling. 
- [ ] You will need to npm install and npm start in a terminal of your choice. 


### Task 2: Project Requirements

Your finished project should include all of the following requirements:

- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [ ] A order form that has a "/pizza" route and shows the form
- [ ] A form with an id of "pizza-form"
- [ ] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass)
- [ ] A dropdown for pizza size with an id of "size-dropdown"
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

Data should look something like
```
{
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
}
```
where there is a key for name, size and special and they are strings
and
there is a key for each of the toppings and they are booleans
(Note - your payload should look similar to the about data)

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) with `axios`
3. Log data in console
4. The URL you should use is `https://reqres.in/api/orders`. The tests are based on this URL.