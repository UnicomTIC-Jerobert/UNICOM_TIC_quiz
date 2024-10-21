const htmlQuestions = [
    {
        question: "1. What does HTML stand for?",
        options: ["A) HyperText Markup Language", "B) HyperText Machine Language", "C) HyperText Marking Language", "D) Hyper Tool Markup Language"],
        correctAnswerIndex: 0
    },
    {
        question: "2. Which tag is used to define a hyperlink in HTML?",
        options: ["A) <link>", "B) <a>", "C) <href>", "D) <img>"],
        correctAnswerIndex: 1
    },
    {
        question: "3. What is the purpose of the <br> tag in HTML?",
        options: ["A) To bold text", "B) To break a line", "C) To create a block", "D) To add a space"],
        correctAnswerIndex: 1
    },
    {
        question: "4. Which tag is used to create an unordered list in HTML?",
        options: ["A) <ul>", "B) <ol>", "C) <li>", "D) <dl>"],
        correctAnswerIndex: 0
    },
    {
        question: "5. How do you create a checkbox in HTML?",
        options: ["A) <input type='check'>", "B) <input type='checkbox'>", "C) <checkbox>", "D) <input checkbox>"],
        correctAnswerIndex: 1
    },
    {
        question: "6. What is the correct HTML element for inserting a line break?",
        options: ["A) <lb>", "B) <break>", "C) <br>", "D) <hr>"],
        correctAnswerIndex: 2
    },
    {
        question: "7. Which of the following tags is used to create a table in HTML?",
        options: ["A) <tbl>", "B) <table>", "C) <td>", "D) <tr>"],
        correctAnswerIndex: 1
    },
    {
        question: "8. Which attribute specifies the destination of a hyperlink?",
        options: ["A) name", "B) href", "C) src", "D) link"],
        correctAnswerIndex: 1
    },
    {
        question: "9. What is the default alignment of text in an HTML document?",
        options: ["A) Left", "B) Center", "C) Right", "D) Justify"],
        correctAnswerIndex: 0
    },
    {
        question: "10. Which tag is used to define an image in HTML?",
        options: ["A) <src>", "B) <image>", "C) <img>", "D) <pic>"],
        correctAnswerIndex: 2
    },
    {
        question: "11. Which HTML tag is used to define the title of a document?",
        options: ["A) <meta>", "B) <title>", "C) <head>", "D) <header>"],
        correctAnswerIndex: 1
    },
    {
        question: "12. What is the correct way to comment in HTML?",
        options: ["A) // This is a comment", "B) /* This is a comment */", "C) <!-- This is a comment -->", "D) # This is a comment"],
        correctAnswerIndex: 2
    },
    {
        question: "13. What does the <meta> tag provide in an HTML document?",
        options: ["A) Metadata about the HTML document", "B) Links to external files", "C) Descriptions for images", "D) Styles for the page"],
        correctAnswerIndex: 0
    },
    {
        question: "14. Which tag is used to create a numbered list?",
        options: ["A) <ol>", "B) <ul>", "C) <li>", "D) <dl>"],
        correctAnswerIndex: 0
    },
    {
        question: "15. How can you make a text bold in HTML?",
        options: ["A) <strong>", "B) <bold>", "C) <b>", "D) Both A and C"],
        correctAnswerIndex: 3
    },
    {
        question: "16. Which tag is used to define a paragraph in HTML?",
        options: ["A) <pg>", "B) <para>", "C) <p>", "D) <text>"],
        correctAnswerIndex: 2
    },
    {
        question: "17. Which attribute is used to uniquely identify an HTML element?",
        options: ["A) class", "B) id", "C) name", "D) style"],
        correctAnswerIndex: 1
    },
    {
        question: "18. What is the correct syntax for creating an email link in HTML?",
        options: ["A) <a href='mailto:someone@example.com'>Email</a>", "B) <a email='someone@example.com'>Email</a>", "C) <a href='email:someone@example.com'>Email</a>", "D) <a link='someone@example.com'>Email</a>"],
        correctAnswerIndex: 0
    },
    {
        question: "19. What is the correct syntax for adding a background color in HTML?",
        options: ["A) <body color='yellow'>", "B) <body bg-color='yellow'>", "C) <body style='background-color:yellow;'>", "D) <background color='yellow'>"],
        correctAnswerIndex: 2
    },
    {
        question: "20. Which of the following is NOT a valid HTML tag?",
        options: ["A) <footer>", "B) <article>", "C) <header>", "D) <frame>"],
        correctAnswerIndex: 3
    },
    {
        question: "21. What does the <a> tag do?",
        options: ["A) Embeds an image", "B) Creates a hyperlink", "C) Adds a paragraph", "D) Changes text color"],
        correctAnswerIndex: 1
    },
    {
        question: "22. Which tag is used to create a dropdown menu in HTML?",
        options: ["A) <select>", "B) <input>", "C) <dropdown>", "D) <menu>"],
        correctAnswerIndex: 0
    },
    {
        question: "23. What does the <h1> to <h6> tags define in HTML?",
        options: ["A) Headings", "B) Hyperlinks", "C) Horizontal lines", "D) Highlighted text"],
        correctAnswerIndex: 0
    },
    {
        question: "24. Which tag is used to define the body of an HTML document?",
        options: ["A) <body>", "B) <html>", "C) <main>", "D) <footer>"],
        correctAnswerIndex: 0
    },
    {
        question: "25. How can you specify a default value for an input field in HTML?",
        options: ["A) <input default='value'>", "B) <input value='value'>", "C) <input placeholder='value'>", "D) <input type='default'>"],
        correctAnswerIndex: 1
    },
    {
        question: "26. Which HTML element is used for specifying the character encoding for the document?",
        options: ["A) <meta charset='UTF-8'>", "B) <html charset='UTF-8'>", "C) <head charset='UTF-8'>", "D) <body charset='UTF-8'>"],
        correctAnswerIndex: 0
    },
    {
        question: "27. Which element is used to define a block of navigation links in HTML5?",
        options: ["A) <link>", "B) <navigate>", "C) <nav>", "D) <footer>"],
        correctAnswerIndex: 2
    },
    {
        question: "28. What is the purpose of the <iframe> tag?",
        options: ["A) To insert an image", "B) To insert a horizontal rule", "C) To embed another webpage within the current page", "D) To insert a form"],
        correctAnswerIndex: 2
    },
    {
        question: "29. What is the use of the <input type='submit'> element?",
        options: ["A) To submit form data", "B) To add a button", "C) To create a dropdown", "D) To reset form data"],
        correctAnswerIndex: 0
    },
    {
        question: "30. Which tag is used to define the header of a document or section in HTML5?",
        options: ["A) <head>", "B) <section>", "C) <header>", "D) <title>"],
        correctAnswerIndex: 2
    },
    {
        question: "31. What is the correct HTML tag for creating a text input field?",
        options: ["A) <input type='text'>", "B) <textfield>", "C) <textinput>", "D) <input type='textfield'>"],
        correctAnswerIndex: 0
    },
    {
        question: "32. Which tag is used to create a definition list in HTML?",
        options: ["A) <ul>", "B) <dl>", "C) <ol>", "D) <li>"],
        correctAnswerIndex: 1
    },
    {
        question: "33. Which tag defines a division or section in an HTML document?",
        options: ["A) <div>", "B) <section>", "C) <article>", "D) <header>"],
        correctAnswerIndex: 0
    },
    {
        question: "34. What is the purpose of the <style> tag in HTML?",
        options: ["A) To link an external stylesheet", "B) To define internal CSS styles", "C) To apply JavaScript code", "D) To add a script tag"],
        correctAnswerIndex: 1
    },
    {
        question: "35. How do you specify an image's alternative text in HTML?",
        options: ["A) title", "B) alt", "C) caption", "D) description"],
        correctAnswerIndex: 1
    },
    {
        question: "36. Which element is used to group elements together in HTML?",
        options: ["A) <span>", "B) <div>", "C) <section>", "D) <article>"],
        correctAnswerIndex: 1
    },
    {
        question: "37. How do you create a text area in HTML?",
        options: ["A) <textarea>", "B) <input type='textarea'>", "C) <input type='text'>", "D) <form>"],
        correctAnswerIndex: 0
    },
    {
        question: "38. Which attribute is used to specify an inline CSS style?",
        options: ["A) class", "B) id", "C) style", "D) inline"],
        correctAnswerIndex: 2
    },
    {
        question: "39. How do you create an ordered list in HTML?",
        options: ["A) <ul>", "B) <ol>", "C) <li>", "D) <list>"],
        correctAnswerIndex: 1
    },
    {
        question: "40. What does the <hr> tag do in HTML?",
        options: ["A) Adds a horizontal line", "B) Creates a header", "C) Breaks a line", "D) Inserts an image"],
        correctAnswerIndex: 0
    }
];
