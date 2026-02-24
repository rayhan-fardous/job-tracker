## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. **getElementById** is used to select a single element through the unique id of that element. If no element is found for the passed 'id', null is returned.
2. **getElementsByClassName** is used to select all the elements containing a particular class ("btn")/set of classes ("btn active"). It returns an HTMLCollection and the DOM data is live.
3. **querySelector** takes a CSS selector as a query and returns the first element that matches the query. If no element match is found, null is returned.
4. **querySelectorAll** returns a NodeList of all elements that match the given CSS selectors, the returned list is static.

---

### 2. How do you create and insert a new element into the DOM?

**Step 1: Create the element**
```const element = document.createElement("p");```

**Step 2: Furnish the element with classes, id, and inner data**
```element.classList.add("text-sm", "text-green-500");```
```element.textContent = "Hi There!";```

**Step 3: Insert (append) the element into the DOM**
```document.body.appendChild(element);```

---

### 3. What is Event Bubbling? And how does it work?

Event bubbling is how JavaScript handles events on a web page. When you interact with an element like clicking a button, the event first travels from the top of the page down to that element, then runs the code on the element itself, and finally moves back up through its parent elements one by one. 
<br> While moving upward, it can trigger event handlers on each parent element. This upward movement is called event bubbling and it happens by default in JavaScript. If you want the event to stop and not affect parent elements, you can prevent it using `e.stopPropagation()`.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding one event listener to a parent element instead of adding listeners to every child element. When a child element is clicked, the event moves up (bubbles) to the parent, and the parent figures out which child was clicked using `event.target`. This works because events naturally bubble up in JavaScript. <br> It is useful because it reduces the number of event listeners, works automatically for new elements added later, and keeps the code clean and easy to maintain.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault()` and `stopPropagation()` are methods of the JavaScript Event object, but they do different things.

`preventDefault()` stops the browser from performing its default action for an event. For example, it can prevent a form from submitting and refreshing the page, or stop a link (<a>) from navigating to another page. The event still occurs, but the browser’s automatic behavior is blocked.

`stopPropagation()` stops the event from moving up the DOM tree. Normally, when an event happens on an element, it bubbles up through its parent elements and triggers their event handlers as well. Calling `stopPropagation()` prevents this upward movement, so parent elements do not receive the event.

Both methods are independent of each other. `preventDefault()` does not stop event bubbling, and `stopPropagation()` does not prevent the browser’s default behavior.

---