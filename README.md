# _Doctor Lookup_

#### _The application helps find a doctor by services or doctor's name, 06/28/2019_

#### By _**Zsuzsanna Mangu**_

## Description

_A website where users may enter a medical issue (ie: “sore throat”) into a form, submit it, and receive a list of doctors in Portland who can treat their medical issue. It uses the BetterDoctor API to retrieve information._

## Setup/Installation Requirements

* _Install Node.js and its corresponding package manager (npm) from Node's website_
* _Confirm that Node and npm are in place by checking the versions -> run $ node -v then $ npm -v_
* _Clone the repository_
* _Visit the BetterDoctor API site at https://developer.betterdoctor.com/ and get an API key_
* _Create your own local file with your own API key with the same filename and location_
* _Navigate to root directory_
* _Place your API key in an .env file at the top level of your directory and include .env in .gitignore_
* _Install all required packages locally by running $ npm install in the command line_
* _Run $ npm run build to bundle code_
* _To check the application in the browser run $ npm run start_

## Configuration/dependencies

  * _webpack_ - Webpack is a module bundler that runs by loading assets such as plugins
  * _webpack-cli_ - this package allows us to use Webpack from the command line
  * _webpack-dev-server_ - to set up a live development server so our our code automatically rebundled and reloaded
  * _eslint and eslint loader_ - to check for errors and typos (we need the loader as well to use the linter with Webpack)
  * _uglifyjs-webpack-plugin_ - to minify our code to the bare minimum so our page loads faster
  * _clean-webpack-plugin_ - to clean up our dist folder as it's getting cluttered
  * _css-loader and style-loader_ - to transform our CSS into JavaScript code so Webpack can bundle it
  * _jquery, popper.js and bootstrap_- to develop the front end of our application
  * _html-webpack-plugin_ - to use Webpack to generate HTML files
  * _jasmine-core and Jasmine_ - Jasmine is a JavaScript testing framework to write tests
  * _Karma_ - to run tests wrote with Jasmine
  * _Babel_ - to fit all browsers, we compile code from ES6 to older versions with Babel
  * _dotenv-webpack plugin_ - to make our environmental variables (.env) available inside our application

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
 | rash | 1. Dr. Samantha Srmith, 760 N Height Ave., 503-333-3434, dermatologist, samsrmithdr.com, accepting new patients; 2. ... |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query. | Samantha Srmith | Dr. Samantha Srmith, 760 N Height Ave., 503-333-3434, dermatologist, samsrmithdr.com, accepting new patients |
| If the API call results in an error, the application should return a notification that states what the error is. | bad API call | Error: Bad Request |
| If the query response doesn't include any doctors, the application should return a notification that states that no doctors meet the criteria. | Samantha Srmithhh | No doctors meet your criteria. |

## Objectives

* Application correctly makes an API call and parses data from the API response.
* The application handles errors when the API call doesn't return a 200 OK status.
* Business logic is tested with Jasmine and Karma.
* Dependencies are managed with npm.
* Webpack is used to lint, bundle, and process code.

## Support and contact details

_Feel free to contact me at zsuzsannamangu[at]gmail.com with any questions._

## Technologies Used

_Javascript, Webpack, Jasmine and Karma for testing, BetterDoctor API_

### License

*MIT*

Copyright (c) 2019 **_Zsuzsanna Mangu_**
