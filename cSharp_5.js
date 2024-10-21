// 5) Classes (30 Questions):

const classesQuestions = [
    {
        question: "1. What is a class in C#?",
        options: ["A) A blueprint for creating objects", "B) A type of variable", "C) A method", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "2. How do you create an instance of a class?",
        options: ["A) new ClassName()", "B) ClassName new()", "C) create ClassName()", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "3. What keyword is used to define a class?",
        options: ["A) class", "B) object", "C) instance", "D) new"],
        correctAnswerIndex: 0
    },
    {
        question: "4. What is the purpose of a constructor in a class?",
        options: ["A) To create an instance of the class", "B) To initialize the object", "C) To define methods", "D) Both A and B"],
        correctAnswerIndex: 3
    },
    {
        question: "5. Which of the following defines an instance variable?",
        options: ["A) static int myVar", "B) int myVar", "C) const int myVar", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "6. What is encapsulation?",
        options: ["A) Hiding the internal state of an object", "B) The ability of a class to inherit from another class", "C) A method that calls itself", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "7. How do you access a public variable of a class?",
        options: ["A) Using the class name", "B) Using the instance of the class", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "8. What keyword is used to inherit a class?",
        options: ["A) inherit", "B) base", "C) extends", "D) :"],
        correctAnswerIndex: 3
    },
    {
        question: "9. What is polymorphism in C#?",
        options: ["A) The ability to take multiple forms", "B) The ability to hide data", "C) The ability to create multiple instances of a class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "10. What is an abstract class?",
        options: ["A) A class that cannot be instantiated", "B) A class with no methods", "C) A class that can be instantiated", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "11. How do you declare a class that cannot be inherited from?",
        options: ["A) sealed class ClassName", "B) static class ClassName", "C) final class ClassName", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "12. What is an interface in C#?",
        options: ["A) A contract that defines methods without implementation", "B) A class that cannot be instantiated", "C) A variable type", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "13. Which of the following keywords is used to implement an interface?",
        options: ["A) implements", "B) interface", "C) inherit", "D) :"],
        correctAnswerIndex: 3
    },
    {
        question: "14. What is the main purpose of a destructor?",
        options: ["A) To destroy an instance of a class", "B) To clean up resources", "C) To create an instance of a class", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "15. What is the difference between a class and a struct?",
        options: ["A) Classes are reference types, while structs are value types", "B) Structs can have methods, while classes cannot", "C) There is no difference", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "16. What does the 'new' keyword do when used with a class?",
        options: ["A) It creates a new instance of the class", "B) It defines a new class", "C) It modifies the class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "17. What is a static class?",
        options: ["A) A class that can only have static members", "B) A class that cannot be instantiated", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "18. How do you call a method from a static class?",
        options: ["A) ClassName.MethodName()", "B) MethodName.ClassName()", "C) new ClassName.MethodName()", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "19. Can you inherit from multiple classes in C#?",
        options: ["A) Yes", "B) No", "C) Only if the base class is abstract", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "20. Which of the following is true about constructors?",
        options: ["A) They can have parameters", "B) They can be overloaded", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "21. What is method hiding?",
        options: ["A) A derived class defines a method with the same name as a method in its base class", "B) A method that cannot be called", "C) A method that does not return a value", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "22. What keyword is used to define an abstract method?",
        options: ["A) virtual", "B) abstract", "C) override", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "23. What is the purpose of 'base' keyword?",
        options: ["A) To refer to the base class from a derived class", "B) To create a base class", "C) To define a class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "24. What does 'sealed' keyword do?",
        options: ["A) Prevents a class from being inherited", "B) Hides a method", "C) Defines an abstract class", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "25. Which of the following is true about properties?",
        options: ["A) They are used to access private fields", "B) They can have get and set accessors", "C) Both A and B", "D) None of the above"],
        correctAnswerIndex: 2
    },
    {
        question: "26. Can you define a constructor in an abstract class?",
        options: ["A) Yes", "B) No", "C) Only in static classes", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "27. What is the difference between public and private access modifiers?",
        options: ["A) Public members can be accessed from anywhere, private members can only be accessed within the class", "B) There is no difference", "C) Private members can be accessed from anywhere, public members cannot", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "28. What does 'override' keyword do?",
        options: ["A) Replaces a method in a derived class", "B) Defines a method in a base class", "C) Hides a property", "D) None of the above"],
        correctAnswerIndex: 0
    },
    {
        question: "29. Can a class be both abstract and sealed?",
        options: ["A) Yes", "B) No", "C) Only in C++", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "30. What is the main benefit of using interfaces?",
        options: ["A) They provide a way to implement multiple inheritance", "B) They allow different classes to be treated as the same type", "C) They improve performance", "D) None of the above"],
        correctAnswerIndex: 1
    }
];
