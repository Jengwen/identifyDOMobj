// Create a new repo with an index.html file and a JavaScript file. Link your JavaScript file to your HTML document. You can use your basicProj bash function for this.
// Add an empty h1 element to your HTML document. Give it an id of "main-heading"
// Use document.querySelector to get a reference to your h1 element
// Use .innerHTML to give your h1 element the text "My Awesome Website"

// mainHeading = document.querySelector("#main-heading")
// mainHeading.innerHTML ="My Awesome Website"

// // ------------- Lightning Exercise 2 ------------------------------//
// // Refactor the following functions as fat arrow functions:

// const checkIfEven= (number) =>{
//     if(number%2===0){
//         return true
//     } else {
//         return false
//     }
// }

// const equalSame = checkIfEven(4)
// console.log(equalSame)

// const addTwoNumbers= (num1, num2) => num1 + num2
// const sumTwoNumbers = addTwoNumbers(2,2)
// console.log(sumTwoNumbers)

// const makeASandwich= (breadType, toppings) => 
//  `Here's your ${toppings} sandwich on ${breadType}`

// const mySandwich = makeASandwich("wheat", "tomatoes")
// console.log(mySandwich)

// practice excercises

// paste student array
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// write general element function
const element= (elementType, elementContent, classValue ) =>{
return `<${elementType} class= "${classValue}">${elementContent}</${elementType}>`
}


// copy createSTudentComponent function

const createStudentComponent = (students) => {
    return `
        <div class="student">
            ${element ("h1",students.name, "xx-large passing")}
            ${element ("section",students.subject,"bordered dashed section--padded")}
            ${element ("aside",students.info, "pushRight" )}
        </div>
    `
}

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

for (let i = 0; i < students.length; i++) {
     let studentComponent = ""
    if (students[i].score >= 60) {
        studentComponent = createStudentComponent(students[i],"passing")
        
    } else {
        studentComponent = createStudentComponent(students[i],"failing")
    }

// send to DOM
const container = document.querySelector("#container")
    container.innerHTML += studentComponent

}

// challenge create generic HTML function

// Create one function that will generate any HTML component, with any content. It should be defined with three arguments.

// The type of HTML component to make
// The content of the component
// The value of the class attribute

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${element("h1", student.name, "xx-large passing")}
//         ${element("section", student.subject, "bordered dashed section--padded")}
//         ${element("aside", student.info, "pushRight")}
//     </div>
// `
