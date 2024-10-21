const cssQuestions = [
    {
        question: "1. What does CSS stand for?",
        options: ["A) Creative Style Sheets", "B) Cascading Style Sheets", "C) Colorful Style Sheets", "D) Computer Style Sheets"],
        correctAnswerIndex: 1
    },
    {
        question: "2. Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["A) In the <head> section", "B) In the <body> section", "C) At the end of the document", "D) Before the <html> tag"],
        correctAnswerIndex: 0
    },
    {
        question: "3. Which HTML tag is used to define an internal style sheet?",
        options: ["A) <style>", "B) <script>", "C) <css>", "D) <link>"],
        correctAnswerIndex: 0
    },
    {
        question: "4. How do you change the text color of an element in CSS?",
        options: ["A) text-color:;", "B) color:;", "C) font-color:;", "D) fg-color:;"],
        correctAnswerIndex: 1
    },
    {
        question: "5. Which property is used to change the background color in CSS?",
        options: ["A) bgcolor", "B) color", "C) background-color", "D) background"],
        correctAnswerIndex: 2
    },
    {
        question: "6. What is the correct CSS syntax to make all the <p> elements bold?",
        options: ["A) p {font-weight: bold;}", "B) <p style='font-size:bold;'>", "C) p {text-size:bold;}", "D) p {font:bold;}"],
        correctAnswerIndex: 0
    },
    {
        question: "7. Which property is used to change the font size of an element?",
        options: ["A) font-height", "B) font-style", "C) font-size", "D) text-size"],
        correctAnswerIndex: 2
    },
    {
        question: "8. How do you make each word in a text start with a capital letter in CSS?",
        options: ["A) text-transform: capitalize;", "B) text-style: capitalize;", "C) transform: capitalize;", "D) you can't do that in CSS"],
        correctAnswerIndex: 0
    },
    {
        question: "9. Which property is used to change the left margin of an element?",
        options: ["A) margin-left", "B) padding-left", "C) indent", "D) margin"],
        correctAnswerIndex: 0
    },
    {
        question: "10. How do you make a list not display bullet points?",
        options: ["A) list-style: none;", "B) bullet-style: none;", "C) text-decoration: none;", "D) list-type: none;"],
        correctAnswerIndex: 0
    },
    {
        question: "11. How do you select an element with id 'header' in CSS?",
        options: ["A) #header", "B) .header", "C) header", "D) *header"],
        correctAnswerIndex: 0
    },
    {
        question: "12. How do you select all elements with the class name 'intro' in CSS?",
        options: ["A) .intro", "B) *intro", "C) intro", "D) #intro"],
        correctAnswerIndex: 0
    },
    {
        question: "13. How do you insert a comment in a CSS file?",
        options: ["A) // this is a comment", "B) /* this is a comment */", "C) <!-- this is a comment -->", "D) # this is a comment"],
        correctAnswerIndex: 1
    },
    {
        question: "14. Which CSS property controls the text size?",
        options: ["A) font-style", "B) text-size", "C) font-size", "D) text-style"],
        correctAnswerIndex: 2
    },
    {
        question: "15. How do you create a dotted border in CSS?",
        options: ["A) border-style: dotted;", "B) border-style: dot;", "C) border-decoration: dotted;", "D) border-type: dotted;"],
        correctAnswerIndex: 0
    },
    {
        question: "16. What is the default value of the position property in CSS?",
        options: ["A) absolute", "B) fixed", "C) relative", "D) static"],
        correctAnswerIndex: 3
    },
    {
        question: "17. Which CSS property is used to control the spacing between lines of text?",
        options: ["A) letter-spacing", "B) line-height", "C) spacing", "D) text-spacing"],
        correctAnswerIndex: 1
    },
    {
        question: "18. Which property is used to change the font of an element?",
        options: ["A) font-family", "B) font-weight", "C) font-style", "D) font-size"],
        correctAnswerIndex: 0
    },
    {
        question: "19. How do you make a text italic in CSS?",
        options: ["A) font-weight: italic;", "B) font-style: italic;", "C) text-transform: italic;", "D) style: italic;"],
        correctAnswerIndex: 1
    },
    {
        question: "20. How do you make an image responsive in CSS?",
        options: ["A) max-width: 100%;", "B) width: auto;", "C) image-resize: responsive;", "D) height: auto;"],
        correctAnswerIndex: 0
    },
    {
        question: "21. Which property is used to align text in CSS?",
        options: ["A) text-align", "B) align-text", "C) text-align-center", "D) text-style"],
        correctAnswerIndex: 0
    },
    {
        question: "22. How do you center a block element in CSS?",
        options: ["A) margin: 0 auto;", "B) text-align: center;", "C) align: center;", "D) margin-center: 0;"],
        correctAnswerIndex: 0
    },
    {
        question: "23. What is the use of the z-index property in CSS?",
        options: ["A) To control the stacking order of elements", "B) To hide elements", "C) To control the layout", "D) To change font size"],
        correctAnswerIndex: 0
    },
    {
        question: "24. How can you apply a background image to a webpage in CSS?",
        options: ["A) background: url('image.jpg');", "B) background-image: image.jpg;", "C) background-color: image.jpg;", "D) img: url('image.jpg');"],
        correctAnswerIndex: 0
    },
    {
        question: "25. Which property is used to change the space between characters?",
        options: ["A) spacing", "B) letter-spacing", "C) word-spacing", "D) text-spacing"],
        correctAnswerIndex: 1
    },
    {
        question: "26. Which CSS property is used to create space between the border and the content?",
        options: ["A) margin", "B) padding", "C) spacing", "D) border-spacing"],
        correctAnswerIndex: 2
    },
    {
        question: "27. Which CSS property is used to make the text bold?",
        options: ["A) font-style: bold;", "B) text-style: bold;", "C) font-weight: bold;", "D) text-weight: bold;"],
        correctAnswerIndex: 2
    },
    {
        question: "28. How can you set the shadow for a box element in CSS?",
        options: ["A) box-shadow", "B) shadow-box", "C) border-shadow", "D) element-shadow"],
        correctAnswerIndex: 0
    },
    {
        question: "29. How do you apply a style to all <p> elements within a div with class 'container'?",
        options: ["A) div.container p", "B) p div.container", "C) div.p.container", "D) div container p"],
        correctAnswerIndex: 0
    },
    {
        question: "30. Which property would you use to set an element’s transparency?",
        options: ["A) display", "B) opacity", "C) visibility", "D) clear"],
        correctAnswerIndex: 1
    },
    {
        question: "31. How do you select all <p> elements that are direct children of a <div> element?",
        options: ["A) div p", "B) div > p", "C) div + p", "D) div ~ p"],
        correctAnswerIndex: 1
    },
    {
        question: "32. What is the purpose of the 'display: none;' CSS rule?",
        options: ["A) Hides an element", "B) Makes an element visible", "C) Disables the element", "D) Removes all the text from an element"],
        correctAnswerIndex: 0
    },
    {
        question: "33. How do you make a grid container in CSS?",
        options: ["A) display: block;", "B) display: flex;", "C) display: grid;", "D) display: inline-block;"],
        correctAnswerIndex: 2
    },
    {
        question: "34. Which property defines how a flex container's items are laid out in CSS?",
        options: ["A) flex-direction", "B) layout-direction", "C) align-items", "D) flex-flow"],
        correctAnswerIndex: 0
    },
    {
        question: "35. How do you change the border radius of an element in CSS?",
        options: ["A) border: radius;", "B) border-radius:", "C) round-border:", "D) border-style: round;"],
        correctAnswerIndex: 1
    },
    {
        question: "36. How do you set a fixed width for an element in CSS?",
        options: ["A) height", "B) max-width", "C) width", "D) auto-width"],
        correctAnswerIndex: 2
    },
    {
        question: "37. How do you define a linear gradient as the background image in CSS?",
        options: ["A) background-image: linear-gradient();", "B) background: linear-gradient();", "C) linear-gradient();", "D) gradient-background: linear;"],
        correctAnswerIndex: 1
    },
    {
        question: "38. How do you control the spacing between lines of text?",
        options: ["A) text-indent", "B) line-height", "C) letter-spacing", "D) word-spacing"],
        correctAnswerIndex: 1
    },
    {
        question: "39. Which of the following is used to clear floats in CSS?",
        options: ["A) clear: fix;", "B) float: clear;", "C) clear: both;", "D) overflow: hidden;"],
        correctAnswerIndex: 2
    },
    {
        question: "40. What is the purpose of the 'hover' pseudo-class in CSS?",
        options: ["A) To define styles for an element when it is hovered over by the mouse", "B) To change the position of an element", "C) To increase the size of an element", "D) To change the background color of an element"],
        correctAnswerIndex: 0
    }
];
