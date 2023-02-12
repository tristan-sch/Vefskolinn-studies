# hello-sass

Welcome to my assignment for Module 3 - HTML & CSS - Tooling/Sass (6 - 9 h.).

- I followed this tutorial: https://www.youtube.com/watch?v=_kqN4hl9bGc.
- I took my first project and redid it with Sass: https://github.com/tristan-sch/helloFriend

I did not go through all the steps but I understand what Sass is and I am now able to use it. :) 

5 aspects I find very useful with Sass: 
- organisation of the CSS -> the css file is often very long and to be able to make partial files, a library, and then to compile is very cool. It takes perhaps longer to set up but save a lot of time afterwards
- Gulp watch -> the use of the terminal that is monitoring the sources files is very useful. I had some errors and I could directly see where it came from and fix it 
- Nested rules -> this way it looks more like html and it's more logical to code since we don't have to repeat the tags
- Variables -> very useful if you want to test and change rapidly the looks of the website or specific elements 
- Mixins -> to be able to create (potentially complicated) code and to simply reuse it on other elements with mixins is very useful.

Here are the steps that I followed: 

1. Configuration
    - Installation of Node.js https://nodejs.org/en/
    - Creation of index.html + index.scss
    - [Terminal] "node -v" -> to see if Node was correctly installed
    - [Terminal] "npm init" + hit enter to all the questions -> to initiate the package.json file
    - [Terminal] "npm install gulp gulp-sass sass --save-dev" -> install Gulp to watch files with Sass
     - Creation of gulpfile.js
     - Copy-paste of code to import items from the Gulp package -> https://github.com/iamshaunjp/complete-sass-tutorial/blob/lesson-2/gulpfile.js   
 
2. index.scss -> I copy-pasted the CSS from my first assignment and I transformed it in variables for themes Colors / spacing / fonts variables / fonts sizes / etc.

3. Organisation of the CSS by splitting it in different files and bring them into one single root Sass file
    - Creation of variables.scss -> add "@import 'name of the file';" in index.scss + modify return and watch in gulpfile.js
    - since the variables.scss is just a partial file (from index.scss), it does not need to be compiled, to do so rename it with "_variables.scss" and delete under CSS folder "variables.css"

4. Creation of a library with components file
    - _variables.scss in it
    - Creation of _base.scss with all the basic css
    - Creation of _button.scss / _nav.scss / flexbox_scss
    - importation of the variables in index.scss + update of gulpfile.js

5. Nested rules -> Creation of nested elements for the button and nav 

6. Use of math 
    - Creation of fonts sizes and spacing for width with math 
    - Use of @debug 

Coming soon: 
- Maps
- Loops
- Conditionals
- Parent Selectors
- Mixins
- Functions
- Making Utility Classes
- Media Queries
- Making a Grid System