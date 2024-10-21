// 7) Collection Framework in C# (without LINQ)

const collectionFrameworkQuestions = [
    {
        question: "1. What is the primary purpose of the Collection Framework in C#?",
        options: ["A) To manage database connections", "B) To provide data structures for storing and manipulating groups of related objects", "C) To handle file I/O", "D) To create user interfaces"],
        correctAnswerIndex: 1
    },
    {
        question: "2. Which of the following is NOT a type of collection in C#?",
        options: ["A) List", "B) Dictionary", "C) Queue", "D) Class"],
        correctAnswerIndex: 3
    },
    {
        question: "3. Which interface does the List<T> class implement?",
        options: ["A) ICollection<T>", "B) IEnumerable<T>", "C) IList<T>", "D) All of the above"],
        correctAnswerIndex: 3
    },
    {
        question: "4. What type of collection is a HashSet<T>?",
        options: ["A) Ordered collection", "B) Collection with unique elements", "C) Key-value pair collection", "D) None of the above"],
        correctAnswerIndex: 1
    },
    {
        question: "5. What does the Dictionary<TKey, TValue> class store?",
        options: ["A) Only unique keys", "B) Key-value pairs", "C) Only values", "D) Ordered elements"],
        correctAnswerIndex: 1
    },
    {
        question: "6. Which of the following collections is best suited for first-in-first-out (FIFO) operations?",
        options: ["A) Stack", "B) List", "C) Queue", "D) Dictionary"],
        correctAnswerIndex: 2
    },
    {
        question: "7. What method would you use to add an item to a List<T>?",
        options: ["A) AddItem()", "B) Insert()", "C) Add()", "D) Put()"],
        correctAnswerIndex: 2
    },
    {
        question: "8. Which method would you use to remove an item from a HashSet<T>?",
        options: ["A) Delete()", "B) Remove()", "C) Drop()", "D) Erase()"],
        correctAnswerIndex: 1
    },
    {
        question: "9. What is the time complexity of accessing an element in a List<T> by index?",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n^2)"],
        correctAnswerIndex: 0
    },
    {
        question: "10. Which collection allows duplicate elements?",
        options: ["A) Dictionary", "B) HashSet", "C) List", "D) Queue"],
        correctAnswerIndex: 2
    },
    {
        question: "11. What does the Count property of a collection represent?",
        options: ["A) The total memory used", "B) The number of elements in the collection", "C) The maximum capacity of the collection", "D) The number of unique elements"],
        correctAnswerIndex: 1
    },
    {
        question: "12. Which collection type should be used when you need to maintain the order of elements?",
        options: ["A) HashSet", "B) Dictionary", "C) Stack", "D) List"],
        correctAnswerIndex: 3
    },
    {
        question: "13. What is the primary difference between List<T> and ArrayList?",
        options: ["A) List<T> is type-safe", "B) ArrayList can store only objects", "C) List<T> can resize dynamically", "D) All of the above"],
        correctAnswerIndex: 3
    },
    {
        question: "14. How can you convert an array to a List<T>?",
        options: ["A) Use Array.Convert()", "B) Use List<T>.FromArray()", "C) Use List<T> constructor", "D) Use LINQ"],
        correctAnswerIndex: 2
    },
    {
        question: "15. Which collection is ideal for implementing a stack?",
        options: ["A) Queue", "B) Stack", "C) List", "D) Dictionary"],
        correctAnswerIndex: 1
    },
    {
        question: "16. What is the default capacity of a List<T> when it is first created?",
        options: ["A) 0", "B) 4", "C) 10", "D) 16"],
        correctAnswerIndex: 1
    },
    {
        question: "17. Which method would you use to clear all elements from a collection?",
        options: ["A) Clear()", "B) RemoveAll()", "C) Reset()", "D) Erase()"],
        correctAnswerIndex: 0
    },
    {
        question: "18. What type of collection does not allow null elements?",
        options: ["A) List<T>", "B) HashSet<T>", "C) Dictionary<TKey, TValue>", "D) Queue"],
        correctAnswerIndex: 1
    },
    {
        question: "19. Which method would you use to find the index of an element in a List<T>?",
        options: ["A) FindIndex()", "B) IndexOf()", "C) SearchIndex()", "D) LocateIndex()"],
        correctAnswerIndex: 1
    },
    {
        question: "20. Which collection allows access to elements in a last-in-first-out (LIFO) manner?",
        options: ["A) Queue", "B) Stack", "C) List", "D) HashSet"],
        correctAnswerIndex: 1
    },
    {
        question: "21. What type of collection is a SortedList<TKey, TValue>?",
        options: ["A) A collection that maintains the order of insertion", "B) A collection that sorts elements by key", "C) A collection that only allows unique values", "D) A collection that supports FIFO operations"],
        correctAnswerIndex: 1
    },
    {
        question: "22. What does the TryGetValue method do in a Dictionary<TKey, TValue>?",
        options: ["A) Tries to retrieve a value by key", "B) Attempts to add a key-value pair", "C) Checks if a key exists", "D) Removes a key-value pair"],
        correctAnswerIndex: 0
    },
    {
        question: "23. How can you initialize a collection with a specified capacity?",
        options: ["A) Using the constructor that accepts an integer", "B) By using the Add method", "C) Using the Initialize method", "D) You cannot set a capacity"],
        correctAnswerIndex: 0
    },
    {
        question: "24. Which collection is implemented as a dynamic array?",
        options: ["A) List<T>", "B) HashSet<T>", "C) Queue", "D) Dictionary"],
        correctAnswerIndex: 0
    },
    {
        question: "25. What is the main advantage of using a LinkedList<T>?",
        options: ["A) Faster access to elements", "B) Faster insertion and removal at both ends", "C) Less memory usage", "D) Automatic resizing"],
        correctAnswerIndex: 1
    },
    {
        question: "26. Which method is used to sort elements in a List<T>?",
        options: ["A) OrderBy()", "B) Sort()", "C) Arrange()", "D) Organize()"],
        correctAnswerIndex: 1
    },
    {
        question: "27. In which collection type are elements stored in key-value pairs?",
        options: ["A) Stack", "B) List", "C) Dictionary", "D) Queue"],
        correctAnswerIndex: 2
    },
    {
        question: "28. What is the purpose of the Capacity property in a List<T>?",
        options: ["A) To define the maximum size of the list", "B) To store the current number of elements", "C) To indicate how many elements can be stored without resizing", "D) All of the above"],
        correctAnswerIndex: 3
    },
    {
        question: "29. Which collection can have a fixed size?",
        options: ["A) List<T>", "B) ArrayList", "C) Array", "D) Dictionary"],
        correctAnswerIndex: 2
    },
    {
        question: "30. What is the primary function of the Enumerator in collections?",
        options: ["A) To add elements", "B) To remove elements", "C) To iterate through the collection", "D) To search for elements"],
        correctAnswerIndex: 2
    }
];
