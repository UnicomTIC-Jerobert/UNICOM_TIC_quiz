// 3) Control Statements (30 Questions):

const controlStatementsQuestions = [
    {
        question: "1. What keyword is used to create a conditional statement in C#?",
        options: ["A) if", "B) switch", "C) case", "D) for"],
        correctAnswerIndex: 0
    },
    {
        question: "2. Which control statement allows you to execute code based on a value?",
        options: ["A) if", "B) switch", "C) while", "D) for"],
        correctAnswerIndex: 1
    },
    {
        question: "3. How do you create a loop that executes a specific number of times?",
        options: ["A) for", "B) while", "C) do while", "D) foreach"],
        correctAnswerIndex: 0
    },
    {
        question: "4. Which statement is used to exit a loop immediately?",
        options: ["A) exit", "B) return", "C) break", "D) continue"],
        correctAnswerIndex: 2
    },
    {
        question: "5. What keyword allows you to skip the current iteration of a loop?",
        options: ["A) skip", "B) continue", "C) break", "D) pass"],
        correctAnswerIndex: 1
    },
    {
        question: "6. Which of the following statements can be used for multi-way branching?",
        options: ["A) if-else", "B) switch", "C) both A and B", "D) none of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "7. What happens when a 'break' statement is executed inside a switch case?",
        options: ["A) Exits the switch", "B) Continues to the next case", "C) Exits the entire program", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "8. Which loop will always execute at least once?",
        options: ["A) for", "B) while", "C) do while", "D) foreach"],
        correctAnswerIndex: 2
    },
    {
        question: "9. Which of the following can be used to compare multiple values in C#?",
        options: ["A) if", "B) switch", "C) both A and B", "D) none of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "10. In C#, what does the 'else' keyword do?",
        options: ["A) Ends a block", "B) Executes if the condition is false", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "11. What is the syntax for a foreach loop in C#?",
        options: ["A) foreach(item in collection)", "B) foreach(collection as item)", "C) for(item in collection)", "D) foreach(item of collection)"],
        correctAnswerIndex: 0
    },
    {
        question: "12. Which control statement is used to repeat a block of code a specific number of times?",
        options: ["A) while", "B) do while", "C) for", "D) if"],
        correctAnswerIndex: 2
    },
    {
        question: "13. What does a return statement do?",
        options: ["A) Exits the current loop", "B) Exits the current method", "C) Stops the program", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "14. Which statement allows you to create nested conditions?",
        options: ["A) if-else", "B) switch", "C) for", "D) do while"],
        correctAnswerIndex: 0
    },
    {
        question: "15. How many default cases can a switch statement have?",
        options: ["A) 1", "B) 2", "C) 3", "D) unlimited"],
        correctAnswerIndex: 0
    },
    {
        question: "16. What is the result of omitting the break statement in a switch case?",
        options: ["A) It executes the next case", "B) It stops execution", "C) It throws an error", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "17. Which of the following keywords is used to create a loop that continues indefinitely?",
        options: ["A) while(true)", "B) for(;;)", "C) do while(true)", "D) All of the above"],
        correctAnswerIndex: 3
    },
    {
        question: "18. What is the output of a while loop if its condition is initially false?",
        options: ["A) Executes once", "B) Executes indefinitely", "C) Does not execute", "D) Throws an error"],
        correctAnswerIndex: 2
    },
    {
        question: "19. Which of the following can be used for simple conditional branching?",
        options: ["A) if", "B) switch", "C) case", "D) break"],
        correctAnswerIndex: 0
    },
    {
        question: "20. What keyword can be used to create a labeled block in C#?",
        options: ["A) label", "B) goto", "C) break", "D) continue"],
        correctAnswerIndex: 1
    },
    {
        question: "21. What is the difference between while and do-while loops?",
        options: ["A) do-while always executes at least once", "B) while executes at least once", "C) Both do the same thing", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "22. What type of loop is the foreach loop?",
        options: ["A) Counter-controlled", "B) Condition-controlled", "C) Collection-controlled", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "23. What is the syntax for an if-else statement?",
        options: ["A) if(condition) { } else { }", "B) if(condition) { } else", "C) if { } else { }", "D) if(condition) else { }"],
        correctAnswerIndex: 0
    },
    {
        question: "24. Which of the following statements will not terminate the program?",
        options: ["A) break", "B) exit", "C) return", "D) continue"],
        correctAnswerIndex: 3
    },
    {
        question: "25. What is the output of the following code: int x = 5; if (x > 3) { Console.WriteLine('Hello'); }?",
        options: ["A) Hello", "B) No output", "C) Error", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "26. What control statement allows you to execute a block of code if a condition is false?",
        options: ["A) if", "B) switch", "C) else", "D) break"],
        correctAnswerIndex: 2
    },
    {
        question: "27. In a nested if statement, what will happen if the inner if condition is false?",
        options: ["A) The outer if executes", "B) The inner if executes", "C) The outer if does not execute", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "28. Which keyword is used to create a default case in a switch statement?",
        options: ["A) default", "B) else", "C) case", "D) break"],
        correctAnswerIndex: 0
    },
    {
        question: "29. What will happen if a break statement is omitted in a loop?",
        options: ["A) It will not execute", "B) It will continue indefinitely", "C) It will throw an error", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "30. Which of the following keywords is used to terminate a method?",
        options: ["A) break", "B) exit", "C) return", "D) continue"],
        correctAnswerIndex: 2
    }
];
