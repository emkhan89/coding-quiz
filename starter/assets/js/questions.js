// 1. make sure questions.js file is above logic.js so it loads first

// 2. use an array with parenthasis inside of it

// 3. use this format - question at the top, choices in the middle and answer at the bottom. 
    // 3a. use \n to go on to a new line
    // 3b. work on the logic before the answers. highscores in local storage maybe. 


var questions = [
    {
        title: 'which following type of primitive data must be surrounded by 'brackets'?',
        choices: ['boolean', 'number', 'string', 'undefined'],
        answer: choices[2],
    },

    {
        title: 'how many components does the for loop syntax consist of?',
        choices: [1, 3, 5, 0],
        answer: choices[1],
    },

     {
        title: 'where is it best practice to place your css file in the HTML file?',
        choices: ['<body>', '<head>', 'just before </body>', '<h1>'],
        answer: choices[1],
    },

     {
        title: 'if the length of an array is 5, what will the index number be?'
        choices: [1, 4, 10, 0],
        answer: choices[1],
    },

     {
        title: 'which of the following is an example of writing using kebab case?',
        choices: ['math-random', 'mathRandom', 'Math.random', 'math random'],
        answer: choices[0],
    },

     {
        title: 'What method must you use to display your javaScript in the browser console?',
        choices: ['console', 'log', 'console.log', 'none of the above'],
        answer: choices[2],
    },

];