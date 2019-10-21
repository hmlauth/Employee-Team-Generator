# Template_Engine-Employee_Summary
Object Oriented Programming (OOP) using classes.

## Purpose
Provides different solutions for study based on current level of programming. Assumes knowledge of basic of JavaScript (variables & references, function definitions and calls, ES6, template literals) and the npm packages fs, path, and Inquirer. More advanced solutions utilize object destructuring, promises and async/await.

Primary focus of these branches relate to `app.js` logic. HTML remains the same per branch, but could also have been solved in many different ways! 

## Set Up

1. Clone repo locally

2. Install dependencies (inquirer, jest)
```
npm i
```
3. Run `git branch -a`.

*  To view code on different branch:
```
git checkout branch-name
```

4. See section _**Branches**_ to determine which branch correlates to your level of study. 

## Usage

```
node app.js
```

## Branches

### Master 
    * Blank template to start from should you want to practice!
    
### Version-1
    * "Basic Functions" - Each function prompts questions, instantiates employee, then pushes new employee to team array.
    * Minimal promise use - The only promises used are those provided by Inquirer.
    * Classes require 4 arguments
    * Resulting team (array) passed to displayHTML(array)

### Version-1-A
    * Solution without classes

### Version-2
    * Functions adapted with promises & async/await
    * Functions remain separate per employee type
    * Classes require 4 arguments
    * Resulting team (array) passed to displayHTML(array)

### Version-3
    * Functions still use promises & async/await
    * Consolidated previously separate functions into one
    * Classes modified to accept 1 argument (object)
    * Resulting team (array) passed to displayHTML(array)

### Version-4
    * Promise returns removed
    * Modified data structure of employeeTypeQuestions 
    * Classes can accept either an object or 4 arguments
    * Resulting team (array) passed to displayHTML(array)
