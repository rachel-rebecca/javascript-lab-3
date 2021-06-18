"use strict"


let submissions = [ 
   {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },

    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },

    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },

    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
];

console.log("Starting array for submissions: " + JSON.stringify(submissions));

// Add submission function
function addSubmission(array, newName, newScore, newDate) {
    let submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    submissions.push(submission)
    console.log("Submission has been added. " + JSON.stringify(submissions));
}
// call add submission
addSubmission(submissions, "Jay", 85, "2021-03-23");


// Delete by index function
function deleteSubmissionByIndex(array, index) {
    submissions.splice(index, 1);
    console.log("Submission has been deleted by index. " + JSON.stringify(submissions));
}
// call delete function
deleteSubmissionByIndex(submissions, 4);


// Delete by name function
const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(element => element.name === name) // Thank you, Doug!!!
    submissions.splice(index, 1);
    console.log("Submission has been deleted by name. " + JSON.stringify(submissions));
}
// call delete by name
deleteSubmissionByName(submissions, "Jill");


// Edit submission function
function editSubmission(array, index, score) {
    submissions[index].score = score;
    submissions[index].passed = score >= 60;
    console.log("Submission has been edited. " + JSON.stringify(submissions)); 
}
// call edit 
editSubmission(submissions, 1, 85);


// Find by name function
function findSubmissionByName(array, name) {
    const findName = array.find(element => element.name === name);
    console.log("Found student by name: " + JSON.stringify(findName));
}
// call find by name
findSubmissionByName(submissions, "Jane");

// function deleteSubmissionByName(submissions, name) {
// console.log(submissions.findIndex(student => student.name === name))
// }


// Find lowest score function
function findLowestScore (array) {
    let scoreArray = array.map(a => a.score) //creating array of scores
    scoreArray.forEach(function(score){
        score = Math.min(...scoreArray)
        const findLow = array.find(element => element.score === score);
        console.log(`The lowest score is: ${JSON.stringify(findLow)}`);
        if (scoreArray.length >= 1) {
            scoreArray.length = 0;
        }
    })
}
// call lowest score 
findLowestScore(submissions);


// Average score function
function findAverageScore (array) {
    let scoreArray = array.map(a => a.score); //creating array of scores
    let sum = 0;
    let total = 0;
    for (let score of scoreArray) {
        sum += score
    }
    total = sum/scoreArray.length;
    let roundTotal = Math.round(total * 100) / 100;
    console.log(`Average score is: ${roundTotal}`);
}
// call average score
findAverageScore(submissions);


// filter passing score
function filterPassing (array) {
    console.log("The passing scores are:");
    console.log(array.filter(element => element.passed === true));
}
// call filter passing scores
filterPassing(submissions);


// 90 and above function
function filter90AndAbove (array) {
    console.log("These scores are 90 and above:");
    console.log(array.filter(element => element.score >= 90));
}
// call 90 and above
filter90AndAbove(submissions);