// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "B. Hyper Text Markup Language ",
  options: [
    "A. Home Tool Markup Language",
    "B. Hyper Text Markup Language ",
    "C. Hyperlinks and Text Markup Language"
  ]
},
{
  numb: 2,
  question: "What does CSS stand for?",
  answer: "B. Cascading Style Sheets",
  options: [
    "A. Colorful Style Sheets",
    "B. Cascading Style Sheets",
    "C. Computer Style Sheets"
  ]
}, 
{
  numb: 3,
  question: "JavaScript is the same as Java.",
  answer: "B. False",
  options: [
    "A. True",
    "B. False",
    "C. I do not know"
  ]
},

{
  numb: 4,
  question: "What is Figma design?",
  answer: "A. A collaborative interface design tool",
  options: [
    "A. A collaborative interface design tool",
    "B. Sketch design tool",
    "C. Drawing design tool"
  ]
},

{
  numb: 5,
  question: "Where is Smári?",
  answer:  "C. In Lapland",
  options: [
    "A. In Matrix",
    "B. In Neverland",
    "C. In Lapland"
  ]
},

//   numb: 6,
//   question: "Choose the correct HTML element to define important text",
//   answer: "C. &ltstrong&gt",
//   options: [
//     "A. &ltimportant&gt",
//     "B. &lti&gt",
//     "C. &ltstrong&gt"
//   ]
// },
];



// let questions = [
//   {
//   numb: 1,
//   question: "What does HTML stand for?",
//   answer: "B. Hyper Text Markup Language ",
//   options: [
//     "A. Home Tool Markup Language",
//     "B. Hyper Text Markup Language ",
//     "C. Hyperlinks and Text Markup Language"
//   ]
// },
//   {
//   numb: 2,
//   question: "Choose the correct HTML element for the largest heading:",
//   answer: "A. &lt;h1&gt;",
//   options: [
//     "A. &lt;h1&gt;",
//     "B. &ltheading&gt",
//     "C. &lth6&gt"
//   ]
// },
//   {
//   numb: 3,
//   question: "How can you create ordered list?",
//   answer: "B. &ltol&gt",
//   options: [
//     "A. &ltlist&gt",
//     "B. &ltol&gt",
//     "C. &ltul&gt"
//   ]
// },

// {
//   numb: 4,
//   question: "Choose the correct HTML element to define important text",
//   answer: "C. &ltstrong&gt",
//   options: [
//     "A. &ltimportant&gt",
//     "B. &lti&gt",
//     "C. &ltstrong&gt"
//   ]
// },
// {
//   numb: 5,
//   question: "Which character is used to indicate an end tag?",
//   answer: "C. /",
//   options: [
//     "A. &lt",
//     "B. *",
//     "C. /"
//   ]
// },
// {
//   numb: 6,
//   question: "Inline elements are normally displayed without starting a new line.",
//   answer: "A. True",
//   options: [
//     "A. True",
//     "B. False",
//     "C. I do not know"

//   ]
// },
// {
//   numb: 7,
//   question: "What does CSS stand for?",
//   answer: "B. Cascading Style Sheets",
//   options: [
//     "A. Colorful Style Sheets",
//     "B. Cascading Style Sheets",
//     "C. Computer Style Sheets"
//   ]
// },  
// {
//   numb: 8,
//   question: "Which HTML tag is used to define an internal style sheet?",
//   answer: "A. &ltstyle&gt",
//   options: [
//     "A. &ltstyle&gt",
//     "B. &ltcss&gt",
//     "C. &ltscript&gt"
//   ]
// },
// {
//   numb: 9,
//   question: "Which HTML attribute is used to define inline styles?",
//   answer: "C. style",
//   options: [
//     "A. font",
//     "B. class",
//     "C. style"
//   ]
// },
// {
//   numb: 10,
//   question: "Which is the correct CSS syntax?",
//   answer: "B. body {color: black;}",
//   options: [
//     "A. bgcolor ",
//     "B. body {color: black;}",
//     "C. body:color=black;"
//   ]
// },
// {
//   numb: 11,
//   question: "Which property is used to change the background color?",
//   answer: "B. background-color",
//   options: [
//     "A. {body;color:black;}",
//     "B. background-color",
//     "C. color"
//   ]
// },
// {
//   numb: 12,
//   question: "When using the padding property; are you allowed to use negative values?",
//   answer: "A. No",
//   options: [
//     "A. No",
//     "B. Yes",
//     "C. I do not know"
//   ]
// },
// {
//   numb: 13,
//   question: "Inside which HTML element do we put the JavaScript?",
//   answer: "B. &ltscript&gt",
//   options: [
//     "A. &ltjs&gt",
//     "B. &ltscript&gt",
//     "C. &ltjavascript&gt"
//   ]
// },
// {
//   numb: 14,
//   question: "What is the correct syntax for referring to an external script called "xxx.js"?",
//   answer: "B. &ltscript src="xxx.js"&gt",
//   options: [
//     "A. &ltscript name="xxx.js"&gt",
//     "B. &ltscript src="xxx.js"&gt",
//     "C. &ltscript href="xxx.js"&gt"
//   ]
// },
// {
//   numb: 15,
//   question: "The external JavaScript file must contain the &ltscript&gt tag.",
//   answer: "B. False",
//   options: [
//     "A. True",
//     "B. False",
//     "C. I do not know"
//   ]
// },
// {
//   numb: 16,
//   question: "How to write an IF statement in JavaScript?",
//   answer: "C. if (i == 5)",
//   options: [
//     "A. if i == 5 then",
//     "B. if i = 5",
//     "C. f (i == 5)"
//   ]
// },
// {
//   numb: 17,
//   question: "How does a WHILE loop start?",
//   answer: "B. while (i &lt= 10)",
//   options: [
//     "A. while i = 1 to 10",
//     "B. while (i &lt= 10)",
//     "C. while (i &lt= 10; i++)"
//   ]
// },
// {
//   numb: 18,
//   question: "JavaScript is the same as Java.",
//   answer: "B. False",
//   options: [
//     "A. True",
//     "B. False",
//     "C. I do not know"
//   ]
// },
// {
//   numb: 19,
//   question: "What is the shortcut key for frame in figma?",
//   answer: "B. F",
//   options: [
//     "A. P",
//     "B. F",
//     "C. N"
//   ]
// },
// {
//   numb: 20,
//   question: "What does command r do in Figma?",
//   answer: "A. Rename selection",
//   options: [
//     "A. Rename selection",
//     "B. Duplicate",
//     "C. Copy properties"
//   ]
// },
// {
//   numb: 21,
//   question: "What is Figma design?",
//   answer: "A. A collaborative interface design tool",
//   options: [
//     "A. A collaborative interface design tool",
//     "B. Sketch design tool",
//     "C. Drawing design tool"
//   ]
// },
// {
//   numb: 22,
//   question: "How many columns by default are in Bootstrap’s latest grid system?",
//   answer: "B. 12",
//   options: [
//     "A. 16",
//     "B. 12",
//     "C. 8"
//   ]
// },
// {
//   numb: 23,
//   question: "The spacing inside a UI elemnt called",
//   answer: "C. Padding",
//   options: [
//     "A. Margin",
//     "B. Gutter",
//     "C. Padding"
//   ]
// },
// {
//   numb: 24,
//   question: "For normal size text WCAG 2.1 Level AAA requires a contarst ratio of at least?",
//   answer: "C. 7:1",
//   options: [
//     "A. 4:5:1",
//     "B. 6:1",
//     "C. 7:1"
//   ]
// },
// {
//   numb: 25,
//   question: "Witch student is from Czech Republic?",
//   answer: "A. Eliska",
//   options: [
//     "A. Eliska",
//     "B. Daniel",
//     "C. Attila"
//   ]
// },
// {
//   numb: 26,
//   question: "How many students are in the class?",
//   answer: "B. 22",
//   options: [
//     "A. 21",
//     "B. 22",
//     "C. 23"
//   ]
// },
// {
//   numb: 27,
//   question: "Where is Smári?",
//   answer:  "C. In Lapland",
//   options: [
//     "A. In Matrix",
//     "B. In Neverland",
//     "C. In Lapland"
//   ]
// },
// {
//   numb: 28,
//   question: "What will Siggi listen to in the car on the way home?",
//   answer:  "A. Cure",
//   options: [
//     "A. Cure",
//     "B. Spice girls",
//     "C. Britney Spears"
//   ]
// },
// {
//   numb: 29,
//   question: "Witch student is from France?",
//   answer: "A. Tristan",
//   options: [
//     "A. Tristan",
//     "B. Jakub",
//     "C. Sebastian"
//   ]
// },
// {
//   numb: 30,
//   question: "Witch student is from Russia?",
//   answer: "A. Tetyana",
//   options: [
//     "A. Tetyana",
//     "B. Eliska",
//     "C. Attila"
//   ]
// }
//];