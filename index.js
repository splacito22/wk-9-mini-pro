const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = ({ name, location, github, linkedin }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
      <title>Portfolio</title>
    </head>
    <body>
      <header class="p-5 mb-4 header bg-light">
        <div class="container">
          <h1 class="display-4">Hi! My name is ${name}</h1>
          <p class="lead">I am from ${location}</p>
          <h3>Contact Me</h3>
          <ul class="list-group">
            <li class="list-group-item">My Github username is ${github}</li>
            <li class="list-group-item">LinkedIn: ${linkedin}</li>
          </ul>
        </div>
      </header>
    </body>
  </html>`;
};

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?",
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your fave hobby?",
      },
      {
        type: "input",
        name: "food",
        message: "What is your fave food?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github Username",
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL",
      },
    ])
    .then((answers) => {
      const html = generateHTML(answers);

      const fileName = "index.html";
      fs.writeFile(fileName, html, (err) => {
        err
          ? console.log(err)
          : console.log(`Successfully created ${fileName}`);
      });
    });
};

init();
