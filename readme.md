1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() returns just one element searches by id very fast

2. How do you create and insert a new element into the DOM?

Ans: const div = document.createElement("div");

3. What is Event Bubbling? And how does it work?

Ans: When an event occurs on a child element, it is passed up the hierarchy from parent to grandparent document as the event bubbles upward.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is Handling the event of the child element by placing an event listener on the parent element.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() disables the browser's default behavior, stopping event bubbling so that the parent's click event is no longer triggered.