import javascript from "../images/javascript.png"
import python from "../images/python.png"
import java from "../images/java.png"
import cpp from "../images/cpp.png"
import dsa from "../images/dsa.png"

export const quizQuestions = [
    {
        title: "Python Programming Basics",
        logo: python,
        description: "Assess your understanding of fundamental Python programming concepts.",
        questions: [
            {
                question: "What is the output of print(2 ** 3)?",
                options: ["6", "8", "9", "12"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which of the following is a mutable data type in Python?",
                options: ["tuple", "list", "string", "int"],
                ans: 2,
                userAns: null
            },
            {
                question: "How do you start a comment in Python?",
                options: ["//", "/*", "#", "<!--"],
                ans: 3,
                userAns: null
            },
            {
                question: "What is the correct file extension for Python files?",
                options: [".pyth", ".pt", ".py", ".pyt"],
                ans: 4,
                userAns: null
            },
            {
                question: "Which function is used to get the length of a list in Python?",
                options: ["len()", "size()", "length()", "count()"],
                ans: 1,
                userAns: null
            }
        ]
    },
    {
        title: "JavaScript Basics",
        logo: javascript,
        description: "Test your knowledge of basic JavaScript programming concepts.",
        questions: [
            {
                question: "Which of the following is a correct way to declare a variable in JavaScript?",
                options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
                ans: 4,
                userAns: null
            },
            {
                question: "What is the output of console.log(typeof null)?",
                options: ["null", "undefined", "object", "string"],
                ans: 3,
                userAns: null
            },
            {
                question: "How do you write a single-line comment in JavaScript?",
                options: ["<!-- -->", "/* */", "//", "#"],
                ans: 3,
                userAns: null
            },
            {
                question: "Which method converts JSON data to a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
                ans: 1,
                userAns: null
            },
            {
                question: "What is the correct syntax to create a function in JavaScript?",
                options: ["function myFunction() {}", "def myFunction() {}", "func myFunction() {}", "create myFunction() {}"],
                ans: 1,
                userAns: null
            }
        ]
    },
    {
        title: "Data Structures and Algorithms",
        logo: dsa,
        description: "Evaluate your understanding of basic data structures and algorithms.",
        questions: [
            {
                question: "Which data structure uses LIFO (Last In First Out) principle?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                ans: 2,
                userAns: null
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which of the following is not a linear data structure?",
                options: ["Array", "Linked List", "Stack", "Tree"],
                ans: 4,
                userAns: null
            },
            {
                question: "What is the best case time complexity of bubble sort?",
                options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
                ans: 1,
                userAns: null
            },
            {
                question: "Which data structure is used to implement a priority queue?",
                options: ["Stack", "Queue", "Heap", "Graph"],
                ans: 3,
                userAns: null
            }
        ]
    },
    {
        title: "Java Basics",
        logo: java,
        description: "Test your basic knowledge of Java programming language.",
        questions: [
            {
                question: "Which of the following is not a Java feature?",
                options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which of the following is used to find and fix bugs in Java programs?",
                options: ["JVM", "JRE", "JDK", "JDB"],
                ans: 4,
                userAns: null
            },
            {
                question: "What is the extension of compiled Java classes?",
                options: [".js", ".java", ".class", ".exe"],
                ans: 3,
                userAns: null
            },
            {
                question: "Which method is the entry point of a Java program?",
                options: ["start()", "main()", "run()", "init()"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which keyword is used to create a subclass in Java?",
                options: ["extends", "implements", "inherits", "subclass"],
                ans: 1,
                userAns: null
            }
        ]
    },
    {
        title: "C++ Basics",
        logo: cpp,
        description: "Assess your basic knowledge of C++ programming language.",
        questions: [
            {
                question: "Which of the following is the correct syntax to print a message in C++?",
                options: ["printf('Hello World');", "cout << 'Hello World';", "System.out.println('Hello World');", "print('Hello World');"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which of the following is used to create an object in C++?",
                options: ["new", "malloc", "alloc", "object"],
                ans: 1,
                userAns: null
            },
            {
                question: "Which feature allows the same function to operate on different data types in C++?",
                options: ["Inheritance", "Polymorphism", "Encapsulation", "Template"],
                ans: 4,
                userAns: null
            },
            {
                question: "Which of the following is the address operator in C++?",
                options: ["*", "&", "%", "@"],
                ans: 2,
                userAns: null
            },
            {
                question: "Which function is used to allocate memory dynamically in C++?",
                options: ["malloc", "calloc", "realloc", "new"],
                ans: 4,
                userAns: null
            }
        ]
    }
];
