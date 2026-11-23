// Selected category and question number 
let selectedCategory = "Programming";
let selectedNumber = 10;

// Quiz information 
let currentQuestion = 0; 
let score = 0; 
let quizQuestions = [];
let timer;
let timeleft = 10;

// Questions for each category 
let quizData = { 
    "Web Technology": 
    [ 
    { question: "Which property is used to change the text color in CSS?", 
        options: ["font-color", "text-color", "color", "foreground-color"], 
        correct: 2 
    }, 
    { 
        question: "Which CSS property is used to add space inside an element?", 
        options: ["margin", "padding", "spacing", "border-spacing"], 
        correct: 1 
    }, 
    { 
        question: "Which CSS property changes the border of an element?", 
        options: ["outline", "border", "line", "box-border"], 
        correct: 1 
    }, 
    { 
        question: "Which method prints output to the browser console?", 
        options: ["print()", "console.log()", "document.print()", "output()"], 
        correct: 1 
    }, 
    { 
        question: "Which method removes the last element from an array?", 
        options: ["delete()", "remove()", "pop()", "shift()"], 
        correct: 2 
    },
    { 
        question: "Which method selects an HTML element by its ID?", 
        options: ["document.getElement()", "document.getElementById()", "document.selectId()", "document.id()"], 
        correct: 1 
    },
    { 
        question: "Which class creates a full-width container?", 
        options: [".container-full", ".container-fluid", ".fluid-container", ".full-container"], 
        correct: 1 
    }, 
    { 
        question: "Which base class is required for Bootstrap buttons?", 
        options: [".button", ".btn", ".bootstrap-button", ".button-style"], 
        correct: 1 
    }, 
    { 
        question: "--------- is the result of type of 'Hello'?", 
        options: ["text", "String", "string", "char"], 
        correct: 2 
    }, 
    { 
        question: "--------- represents an arrow function.", 
        options: ["function => () ", "() => {} ", "() -> {} ", "=> function()"], 
        correct: 1 
    }, 
    { 
        question: "Which loop is commonly used to iterate through the values of an array?", 
        options: ["for...of", "for...in", "for...value", "loop...of"], 
        correct: 1 
    }, 
    { 
        question: "--------- is the latest major version in this question set?", 
        options: ["Bootstrap 3", "Bootstrap 4", "Bootstrap 5", "Bootstrap 6"], 
        correct: 2 
    }, 
    { 
        question: "Bootstrap's default grid system is based on ---------- columns.", 
        options: ["6", "10", "12", "16"], 
        correct: 2 
    }, 
    { 
        question: "--------- occurs when a user clicks an element?", 
        options: ["onpress", "onclick", "onmouse" ], 
        correct: 1 
    }, 
    { 
        question: "Na N stand for ---------------.", 
        options: ["No Assigned number", "New and Null", "Number and Null", "Not a Number"], 
        correct: 3 
    }, 
    { 
        question: "Font-size property controls the size of text.", 
        options: ["True", "False"], 
        correct: 0 
    }, 
    { 
        question: "Outside property is used to add space outside an element.", 
        options: ["True", "False"], 
        correct: 1 
    }, 
    { 
        question: "Opacity property controls the transparency of an element.", 
        options: ["True", "False"], 
        correct: 0 
    }, 
    { 
        question: "@media rule is used for responsive design.", 
        options: ["True", "False"], 
        correct: 0 
    }, 
    { 
        question: "** is commonly used for a single-line comment in JavaScript.", 
        options: ["True", "False"], 
        correct: 1 
    }, 
    { 
        question: "Insert() method adds an element to the end of an array.", 
        options: ["True", "False"], 
        correct: 1 
    }, 
    { 
        question: "Shift() method removes the first element from an array.", 
        options: ["True", "False"], 
        correct: 0 
    },
    {question: ".button-primary creates a primary-colored button.", 
        options: ["True", "False"], 
        correct: 1 
    }, 
    { 
        question: ".m-3 adds margin on all sides.", 
        options: ["True", "False"], 
        correct: 0 
    }, 
    { 
        question: ".full-container creates a full-width container.", 
        options: ["True", "False"], 
        correct: 1 
    },  

],
Networking: [
    {
        question: "Data is converted into light and transferred at high speeds in this device.",
        options: ["Fiber Optic Cable", "Hub", "Modem", "Router"],
        correct: 0
    },
    {
        question: "A software or hardware used to prevent unauthorised access to the network.",
        options: ["Hub", "Modem", "Firewall", "Router"],
        correct: 2
    },
    {
        question: "Needed so the computer can understand analogue sensor readings",
        options: ["Digital to analogue converter", "Analogue to digital converter", 
                  "Sensor to digital conversion", "Digital compression"],
        correct: 1
    },
    {
        question: "What is the input to a DAC?",
        options: ["Analogue signal", "Pulse code modulation", "Digital signal", "Sound"],
        correct: 2
    },
    {
        question: "What method in media access control?",
        options: ["Topology", "Media Sharing", "Controlled Access", "Contention-based Access"],
        correct: 3
    },
    {
        question: "The data link layer is also known as layer ------- in the OSI model.",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "What does OSI stand for?",
        options: ["Open Systems Interconnection", "Open Service Interconnection", 
                  "Offer Service Interconnection", "Offer Systems Interconnection"],
        correct: 0
    },
    {
        question: "Which layer does TCP operate on?",
        options: ["Application", "Transport", "Network", "Link"],
        correct: 1
    },
    {
        question: "Which layer does IP operate on?",
        options: ["Application", "Transport", "Internet", "Link"],
        correct: 2
    },
    {
        question: "UDP and TCP are both -------- layer protocols.",
        options: ["data link", "Network", "Transport", "none of the above"],
        correct: 2
    },
    {
        question: "What does UDP stand for?",
        options: ["User Datagram Protocol", "User Defined Primitive", "User Dedicated Program", 
                  "User Datagram Piece"],
        correct: 0
    },
    {
        question: "Which is not a layer in the TCP/IP model?",
        options: ["Application", "Internet", "Transmission", "Network"],
        correct: 2
    },
    {
        question: "HTTP stands for?",
        options: ["Hyper Technology Transmission Piece", "Hypertext Talking Package", 
                  "Hypertext Transfer Protocol", "Hypertext Transfer Program"],
        correct: 2
    },
    {
        question: "What does DNS stand for?",
        options: ["Domain Notification System", "Don't Name Servers", "Domain Name Server", 
                  "Domain Name System"],
        correct: 2
    },
    {
        question: "If a network has a bandwidth of 100 Mbps, how much data can it theoreticaly transfer in one second? ",
        options: ["10 megabytes", "100 kilobytes", "100 megabytes", "10 kilobytes"],
        correct: 2
    },
    {
        question: "What translates IP address into MAC address?",
        options: ["Network Interface Card", "Address Resolution Protocol", 
                  "Organizationally Unique Identifier", "Burned In Address"],
        correct: 0
    },
    {
        question: "Which best describes packet switching?",
        options: ["Exchanging information in two directions", "Stealing data by exchanging other data for it",
                  "Sending data in small chunks", "Sending data twice to be sure it arrives"],
        correct: 2
    },
    {
        question: "Which layer is responsible for logical addressing in the OSI model?",
        options: ["Network layer", "Transport layer", "Session layer", "Data link layer"],
        correct: 0
    },
    {
        question: "Which layer is responsible for routing in the OSI model?",
        options: ["Transport layer", "Data link layer", "Network layer", "Session layer"],
        correct: 2
    },
    {
        question: "What is the format of an IP address?",
        options: ["Three numbers separated by commas", "Four numbers separated by periods", 
                  "Five numbers separated by periods", "Two numbers separated by a hypen"],
        correct: 1
    },
    {
        question: "What are the two versions of IP addresses commonly used today?",
        options: ["IPv5 and IPv7", "IPv1 and IPv9", "IPv3 and IPv8", "IPv4 and IPv6"],
        correct: 3
    },
    {
        question: "Which protocol is used to send packets?",
        options: ["IP", "FTP", "SMTP", "TCP"],
        correct: 0
    },
    {
        question: "Which of these are mail protocols?",
        options: ["SMTP and POP", "FTP and SMTP", "TCP and FTP", "POP and IP"],
        correct: 0
    },
    {
        question: "This is NOT an example of a wireless technology :",
        options: ["infrared", "satellite", "Bluetooth", "Broadband"],
        correct: 3
    },
    {
        question: "This is NOT a wireless mobile phone technologies.",
        options: ["3G", "4G", "WiFi", "5G"],
        correct: 2
    },
],

Programming: [
    {
        question: "Which class is specifically designed to create and write data to files?",
        options: ["ifstream", "ofstream", "fstream", "iostream"],
        correct: 1
    },
    {
        question: "What does the 'getline' function do?",
        options: ["Reads a single character", "Reads a line from a file", 
                  "Writes a line to a file", "Moves the file cursor"],
        correct: 1
    },
    {
        question: "Which of the following is a type of inheritance in C++?",
        options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "All of the above"],
        correct: 3
    },
    {
        question: "What keyword is used to declare a base class in C++?",
        options: ["inherit", "extends", "public", "class"],
        correct: 3
    },
    {
        question: "What access specifier is used to derive a class privately?",
        options: ["public", "protected", "private", "none of the above"],
        correct: 2
    },
    {
        question: "Which is not a relational operator?",
        options: ["<=", "!=", "===", ">="],
        correct: 2
    },
    {
        question: "Which keyword is used to exit a loop early?",
        options: ["break", "continue", "goto", "stop"],
        correct: 0
    },
    {
        question: "Which loop is best when the number of iterations is known?",
        options: ["while", "for", "do-while", "switch"],
        correct: 1
    },
    {
        question: "What does continue do in a loop?",
        options: ["Exits loop", "Jumps to end", "Skips current iteration", "Restarts program"],
        correct: 2
    },
    {
        question: "Which is the correct form of a for loop?",
        options: ["for(i=0; i<5)", "for(int i; i<5; i++)", "for(int i=0; i<5; i++)", "loop(i=o; 5)"],
        correct: 2
    },
    {
        question: "What is the result of 5>3 && 2<4?",
        options: ["false", "0", "error", "true"],
        correct: 3
    },
    {
        question: "What happens if no break in switch?",
        options: ["Compilation error", "Only one case runs", "All remaining cases execute", "Program exits"],
        correct: 2
    },
    {
        question: "What is a structure in C++?",
        options: ["Built-in data type", "Pointer", "Object", "User-defined data type"],
        correct: 3
    },
    {
        question: "What operator is used to access structure members?",
        options: ["->", ".", "::", ":"],
        correct: 1
    },
    {
        question: "Can you assign one structure variable to another?",
        options: ["Yes", "No", "Only if pointer", "Only if static"],
        correct: 0
    },
    {
        question: "How is memory allocated for structures?",
        options: ["Only for first member", "For the largest member", "Only for reference", "For all members"],
        correct: 3
    },
    {
        question: "How can a structure be passed to a function?",
        options: ["By value", "By reference", "Both", "Only by pointer"],
        correct: 2
    },
    {
        question: "What does typedef do for structures?",
        options: ["Create object", "Initialize variables", "Allocate memory", "Rename struct"],
        correct: 3
    },
    {
        question: "Can structures have functions?",
        options: ["Yes, in C++", "No", "Only in C", "Only constructors"],
        correct: 0
    },
    {
        question: "Which is correct syntax?",
        options: ["struct S{int x};", "struct S {int x;};", "S struct {int x;};", "define S {int x;}"],
        correct: 1
    },
    {
        question: "Which keyword is used to define structures?",
        options: ["class", "struct", "type", "template"],
        correct: 1
    },
    {
        question: "Can structures be nested?",
        options: ["Yes", "No", "Only in Java", "Only globally"],
        correct: 0
    },
    {
        question: "What is a function?",
        options: ["Data", "Control structure", "Array", "Block of code"],
        correct: 3
    },
    {
        question: "How many values can a function return?",
        options: ["Only one", "None", "Two", "Unlimited"],
        correct: 0
    },
    {
        question: "What is a recursive function?",
        options: ["Calls another", "Infinite", "Calls itself", "None"],
        correct: 2
    }
],

Geography: [
     {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Bangkok", "Beijing"],
        correct: 1
    },
    {
        question: "Which is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Italy", "France", "Germany", "Spain"],
        correct: 1
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Bangkok", "Hanoi", "Manila", "Jakarta"],
        correct: 0
    },
    {
        question: "Which planet do we live on?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        correct: 2
    },
    {
        question: "Which is the largest continent?",
        options: ["Africa", "Europe", "Asia", "Australia"],
        correct: 2
    },
    {
        question: "What is the capital of Myanmar?",
        options: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
        correct: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        correct: 1
    },
    {
        question: "Which river flows through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Mekong River"],
        correct: 2
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        question: "Which is the smallest continent?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correct: 3
    },
    {
        question: "Mount Everest is located in which mountain range?",
        options: ["Andes", "Himalayas", "Alps", "Rocky Mountains"],
        correct: 1
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ["London", "Manchester", "Liverpool", "Birmingham"],
        correct: 0
    },
    {
        question: "Which country has the largest population in the world?",
        options: ["India", "United States", "Indonesia", "Japan"],
        correct: 0
    },
    {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        correct: 1
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        correct: 2
    },
    {
        question: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
        correct: 1
    },
    {
        question: "Which country is famous for the pyramids of Giza?",
        options: ["Mexico", "Greece", "Egypt", "Turkey"],
        correct: 2
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Hong Kong", "Beijing", "Wuhan"],
        correct: 2
    },
    {
        question: "Which continent is Brazil located in?",
        options: ["Africa", "South America", "Europe", "Asia"],
        correct: 1
    },
    {
        question: "Which country is shaped like a boot?",
        options: ["Italy", "Portugal", "Greece", "Norway"],
        correct: 0
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        correct: 2
    },
    {
        question: "Which is the longest continental mountain range in the world?",
        options: ["Alps", "Andes", "Himalayas", "Rocky Mountains"],
        correct: 1
    },
    {
        question: "Which country is home to the city of Barcelona?",
        options: ["Portugal", "France", "Spain", "Italy"],
        correct: 2
    },
    {
        question: "What is the capital of Vietnam?",
        options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
        correct: 0
    }
]
};

// Choose category 
function chooseCategory(category, card) { selectedCategory = category;
let cards = document.querySelectorAll(".category");

cards.forEach(function(item) {
    item.classList.remove("selected");
    item.querySelector(".check").innerText = "";
});

card.classList.add("selected");
card.querySelector(".check").innerText = "✓";
}

// Choose number of questions 
function chooseNumber(number, button) { selectedNumber = number;
let buttons = document.querySelectorAll(".number-btn");

buttons.forEach(function(item) {
    item.classList.remove("selected-number");
});

button.classList.add("selected-number");
}

// Start quiz 
function startQuiz() { 
    let questions = quizData[selectedCategory];
//shuffle Questions randomly
let shuffledQuestions = [...questions];
for (let i = shuffledQuestions.length - 1; i>0; i--)
{
    let j = Math.floor(Math.random()* (i+1));
    let temp = shuffledQuestions[i];
    shuffledQuestions[i] = shuffledQuestions[j];
    shuffledQuestions[j] = temp;
}

//Select Questions according to user's choice
quizQuestions = shuffledQuestions.slice(0, selectedNumber);

currentQuestion = 0;
score = 0;

document.getElementById("home-screen").classList.add("hidden");
document.getElementById("result-screen").classList.add("hidden");
document.getElementById("quiz-screen").classList.remove("hidden");

document.getElementById("current-category").innerText = selectedCategory;

loadQuestion();
}

// Display question 
function loadQuestion() { 
    let question = quizQuestions[currentQuestion];
    document.getElementById("question-num").innerText =
    "Question " + (currentQuestion + 1) + " of " + quizQuestions.length;

    document.getElementById("question-text").innerText = question.question;

    let progress = (currentQuestion / quizQuestions.length) * 100;
    document.getElementById("progress").style.width = progress + "%";

    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    document.getElementById("next-btn").disabled = true;

    for (let i = 0; i < question.options.length; i++) {
        let button = document.createElement("button");
        button.innerText = question.options[i];
        button.classList.add("option-btn");

        button.onclick = function() {
            checkAnswer(i, button);
        };

        optionsContainer.appendChild(button);
    }
    startTimer();
}
// Start 10-second timer 
function startTimer() { 
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("timer").innerText= "00:" + String(timeLeft).padStart(2, "0");

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText= "00:" + String(timeLeft).padStart(2, "0");

        if (timeLeft <= 0) {
            clearInterval(timer);

            currentQuestion++;

            if (currentQuestion < quizQuestions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }
    }, 1000);
}

// Check answer 

function checkAnswer(answer, button) { 
    clearInterval(timer);
    let question = quizQuestions[currentQuestion];
    let buttons = document.querySelectorAll(".option-btn");

    if (answer === question.correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[question.correct].classList.add("correct");
    }

    buttons.forEach(function(item) {
        item.disabled = true;
    });

    document.getElementById("next-btn").disabled = false;
}

// Next question 
document.getElementById("next-btn").onclick = function() { 
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

// Show result
clearInterval(timer); 
function showResults() { 
    document.getElementById("quiz-screen").classList.add("hidden"); 
    document.getElementById("result-screen").classList.remove("hidden");

document.getElementById("progress").style.width = "100%";
document.getElementById("score").innerText = score;
document.getElementById("total-questions").innerText = quizQuestions.length;

let percentage = (score / quizQuestions.length) * 100;

if (percentage === 100) {
    document.getElementById("feedback").innerText =
        "Excellent! All answers are correct!";
} else if (percentage >= 60) {
    document.getElementById("feedback").innerText =
        "Good job! Keep learning!";
} else {
    document.getElementById("feedback").innerText =
        "Keep practicing. You can do better!";
}
};

// Return to home page 
function goHome() { 
    document.getElementById("result-screen").classList.add("hidden"); 
    document.getElementById("quiz-screen").classList.add("hidden"); 
    document.getElementById("home-screen").classList.remove("hidden");
    
    document.getElementById("progress").style.width = "0%";
}