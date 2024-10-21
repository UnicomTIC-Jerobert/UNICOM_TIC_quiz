// 4) Methods (30 Questions):

const methodsQuestions = [
    {
        question: "1. What keyword is used to declare a method in C#?",
        options: ["A) function", "B) method", "C) void", "D) public"],
        correctAnswerIndex: 2
    },
    {
        question: "2. What does the 'void' keyword indicate in a method declaration?",
        options: ["A) The method returns a value", "B) The method does not return a value", "C) The method is private", "D) The method is static"],
        correctAnswerIndex: 1
    },
    {
        question: "3. Which of the following is a valid method signature?",
        options: ["A) void MyMethod()", "B) void MyMethod(int x)", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "4. What is method overloading?",
        options: ["A) Defining multiple methods with the same name", "B) A method that calls itself", "C) A method that does not return a value", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "5. What is the purpose of the 'return' statement in a method?",
        options: ["A) To end the method", "B) To send a value back to the caller", "C) To call another method", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "6. How do you call a method in C#?",
        options: ["A) MethodName()", "B) Call MethodName()", "C) Execute MethodName()", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "7. What keyword is used to define a method as static?",
        options: ["A) static", "B) void", "C) public", "D) private"],
        correctAnswerIndex: 0
    },
    {
        question: "8. What does it mean if a method is marked as 'private'?",
        options: ["A) The method can be accessed from anywhere", "B) The method can only be accessed within its own class", "C) The method can be accessed from other classes", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "9. Which of the following keywords is used to pass arguments by reference?",
        options: ["A) ref", "B) out", "C) in", "D) both A and B"],
        correctAnswerIndex: 3
    },
    {
        question: "10. How do you define a method that takes an array as a parameter?",
        options: ["A) void MyMethod(int[] arr)", "B) void MyMethod(int arr[])", "C) void MyMethod(int arr)", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "11. What will happen if a method does not have a return type specified?",
        options: ["A) It will throw an error", "B) It will default to void", "C) It will return null", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "12. Which of the following is true about the 'params' keyword?",
        options: ["A) It allows a method to take a variable number of arguments", "B) It is used to define an array parameter", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "13. What does method recursion mean?",
        options: ["A) A method that calls another method", "B) A method that calls itself", "C) A method with multiple overloads", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "14. How can you define an extension method?",
        options: ["A) By using the 'this' keyword in the first parameter", "B) By using the 'extension' keyword", "C) By creating a static class", "D) Both A and C"],
        correctAnswerIndex: 3
    },
    {
        question: "15. What is the return type of a method that does not return any value?",
        options: ["A) null", "B) void", "C) string", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "16. Which of the following statements about method parameters is true?",
        options: ["A) Parameters are optional", "B) Parameters must be specified", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "17. Can you have a method with the same name but different parameter types in C#?",
        options: ["A) Yes, this is method overloading", "B) No, this will cause an error", "C) Yes, but it must be static", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "18. What is the syntax for a method that returns an integer?",
        options: ["A) int MyMethod()", "B) MyMethod(): int", "C) void MyMethod(): int", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "19. What will happen if you forget to include a return statement in a non-void method?",
        options: ["A) It will throw an error", "B) It will return null", "C) It will return 0", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "20. What is an anonymous method in C#?",
        options: ["A) A method without a name", "B) A method that cannot return a value", "C) A method defined inside another method", "D) Both A and C"],
        correctAnswerIndex: 3
    },
    {
        question: "21. Which of the following best describes a method's accessibility?",
        options: ["A) It determines where the method can be called from", "B) It determines the method's return type", "C) It determines the number of parameters", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "22. What does 'out' parameter mean?",
        options: ["A) It allows passing arguments by reference", "B) It requires the method to initialize the variable before use", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "23. Can a method have multiple return statements?",
        options: ["A) Yes", "B) No", "C) Only if it has parameters", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "24. What is the scope of a local variable?",
        options: ["A) The entire program", "B) Within the method only", "C) Within the class only", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "25. Which of the following is true about a method's return type?",
        options: ["A) It can be void", "B) It cannot be null", "C) It must be specified", "D) Both A and C"],
        correctAnswerIndex: 3
    },
    {
        question: "26. What is the syntax for creating a method that takes two parameters?",
        options: ["A) void MyMethod(int a, int b)", "B) void MyMethod(a int, b int)", "C) void MyMethod(int a; int b)", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "27. How do you handle exceptions within a method?",
        options: ["A) Using try-catch blocks", "B) Using if-else statements", "C) Using error codes", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "28. What is the difference between a method and a function?",
        options: ["A) There is no difference", "B) A method belongs to a class, while a function does not", "C) A function can only return values, while a method cannot", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "29. How do you define a method with optional parameters?",
        options: ["A) void MyMethod(int a = 0)", "B) void MyMethod(int a)?", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "30. Which of the following statements about parameters is false?",
        options: ["A) They can have default values", "B) They must be declared", "C) They can be omitted in method calls", "D) None of the above"],
        correctAnswerIndex: 2
    }
];
