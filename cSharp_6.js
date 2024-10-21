// 6) Advanced Concepts (30 Questions):

const advancedQuestions = [
    {
        question: "1. What is the purpose of the 'using' statement?",
        options: ["A) To include namespaces", "B) To manage resources", "C) To define classes", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "2. What is LINQ?",
        options: ["A) A language for querying databases", "B) A framework for building applications", "C) A way to manage memory", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "3. What does 'async' keyword indicate?",
        options: ["A) A method will run asynchronously", "B) A method will not return a value", "C) A method is private", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "4. What is the purpose of the 'await' keyword?",
        options: ["A) To pause the execution until the asynchronous method is completed", "B) To define a method as asynchronous", "C) To handle exceptions", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "5. What is dependency injection?",
        options: ["A) A technique for managing dependencies", "B) A way to improve performance", "C) A design pattern", "D) Both A and C"],
        correctAnswerIndex: 3
    },
    {
        question: "6. What is the purpose of the 'IEnumerable' interface?",
        options: ["A) To define a collection that can be iterated", "B) To manage asynchronous tasks", "C) To define an abstract class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "7. What does 'Task<T>' represent in C#?",
        options: ["A) A type of collection", "B) An asynchronous operation that returns a value", "C) A synchronous operation", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "8. Which of the following is used for error handling in asynchronous methods?",
        options: ["A) try-catch", "B) using", "C) async-await", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "9. What is the role of a 'delegate' in C#?",
        options: ["A) A type-safe function pointer", "B) A class for managing threads", "C) An interface for events", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "10. What is an event in C#?",
        options: ["A) A way to trigger a method when something happens", "B) A type of delegate", "C) A class for managing resources", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "11. What does the 'lock' statement do?",
        options: ["A) Prevents a block of code from being executed by multiple threads at the same time", "B) Defines a static method", "C) Creates a new instance of a class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "12. What is the purpose of attributes in C#?",
        options: ["A) To add metadata to code elements", "B) To define a new class", "C) To manage memory", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "13. What is the difference between 'ref' and 'out' parameters?",
        options: ["A) 'ref' requires initialization, 'out' does not", "B) 'out' requires initialization, 'ref' does not", "C) Both can be used interchangeably", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "14. What is the purpose of 'yield' keyword?",
        options: ["A) To create an iterator", "B) To pause the execution of a method", "C) To return multiple values", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "15. What does 'async void' signify?",
        options: ["A) An asynchronous method that does not return a value", "B) A method that cannot be awaited", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "16. What is the main purpose of reflection in C#?",
        options: ["A) To inspect metadata about assemblies, types, and members", "B) To improve performance", "C) To manage resources", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "17. What is a lambda expression?",
        options: ["A) A way to create anonymous methods", "B) A type of delegate", "C) A syntax for defining interfaces", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "18. What is a generic type in C#?",
        options: ["A) A type that can work with any data type", "B) A specific type defined in the program", "C) A type used for performance", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "19. What does 'var' keyword indicate?",
        options: ["A) The type is inferred by the compiler", "B) A variable can be of any type", "C) A type must be specified", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "20. What is the difference between a struct and a class in terms of memory allocation?",
        options: ["A) Structs are allocated on the stack, classes on the heap", "B) Both are allocated on the heap", "C) Both are allocated on the stack", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "21. What is a Task in C#?",
        options: ["A) An operation that can run asynchronously", "B) A collection of methods", "C) A type of class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "22. What is the purpose of 'IAsyncResult'?",
        options: ["A) To represent the status of an asynchronous operation", "B) To manage threads", "C) To define a synchronous operation", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "23. What is 'async-await' pattern used for?",
        options: ["A) To simplify asynchronous programming", "B) To improve performance", "C) To manage threads", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "24. What does the 'Dispose' method do?",
        options: ["A) Releases unmanaged resources", "B) Manages memory", "C) Creates a new instance of a class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "25. What is the main advantage of using tuples?",
        options: ["A) They can store multiple values of different types", "B) They improve performance", "C) They are immutable", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "26. What is the purpose of the 'Nullable<T>' type?",
        options: ["A) To allow value types to be null", "B) To improve performance", "C) To manage memory", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "27. What is the purpose of 'async' and 'await' in C#?",
        options: ["A) To allow methods to run asynchronously", "B) To manage resources", "C) To define a synchronous operation", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "28. What does 'ConfigureAwait(false)' do?",
        options: ["A) Ignores the current synchronization context", "B) Allows the method to return a value", "C) Resumes on the original context", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "29. What is a 'ValueTask' in C#?",
        options: ["A) A struct that represents an asynchronous operation that may complete synchronously", "B) A collection of methods", "C) A type of class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "30. What is the difference between 'IEnumerable<T>' and 'IQueryable<T>'?",
        options: ["A) 'IQueryable<T>' is optimized for querying data from a database", "B) 'IEnumerable<T>' is for in-memory collections", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    }
];
