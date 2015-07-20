# Tip Calculator

Please skim through this entire document first.  Specific instructions for what to do (and in which order) appear further down.

## Set the stage

- Clear the stage (close all other terminal tabs, chrome tabs, email etc...)
- Figure out the "what" and "why" by a) reading through objectives and b) reading through the activities below
- REMEMBER!  It's about the process.  There's no rush.  Take risks, have fun!  Don't be afraid to make mistakes and try things.

### Objectives:

By the end of this lesson you should be able to:

- Identify when a function returns a value, and when it modifies something (like the dom)
- Perform an "Extract function" refactoring to separate pure and non-pure functions
- Define "pure function"

### Key terms:

- Refactor
- Pure function
- State (in the context of "maintaining state")

### Rationale:

Being able to keep your code organized is crucial to keeping the long-term cost of software development low.  Being able to refactor large functions that do multiple things into smaller functions that each do one thing well is one technique for lowering the long-term cost of software.

## Activities

**Get Setup**

1. Fork, clone, `cd` into this project and open it in your text editor
1. Create a standard HTML project with the following files / folders:
  * index.html
  * css
    * app.css
  * js
    * app.js
1. Wire up the `js/app.js` and `css/app.css` files
  - add a simple `console.log` in the js file to verify that it's included correctly
  - add a simple style change, like a background color on `body`, to verify that it's referenced correctly
1. In git, commit, push and start a a pull request

---

**User can see a properly styled form**

Write your HTML according to the wireframe below.  Make sure to include:

- A centered heading
- A centered input field with the correct placeholder
- A button

![](wireframes/tip-calculator.png)

Questions:

- The wireframes appear to have a comic-sans font.  Do you need to match that font?
- The wireframes capitalize the first letter in "Tip" and "Calculator".  Do you need to match that exactly?  Why or why not?

Self-assess:

- Check your work visually.  Does it match the wireframe?
- Is your HTML valid according to https://validator.w3.org/nu/ ?
  - Use the "text input" option and paste your HTML
  - If not, fix any errors and revalidate
- Are you using inline styles or style elements to center the fields?  
  - If so, move any `style` attributes or `center` tags to the linked css file
- When you click in the amount field and start typing, does the initial text disappear?
  - If not, you may have used `value` instead of `placeholder`, as indicated by the wireframe

Create a checkpoint:

It's easier to be brave and take risks when you've saved a recent copy of your work.  Now's a good time to do a quick git add / commit / push.  Your pull request will update automatically.

Hi-five!  One down...

---

**User can see the correct tip amount when they enter just a number (without a $)**

Write javascript to satisfy the following user story:

    When a user enters a whole number (1, 4, 65 etc...)
    And clicks "Calculate Tip"
    Then they should see the 20% tip amount appear beneath the text field

![](wireframes/tip-calculator-filled-in.png)

All of your code will go inside the `addEventListener` for the button.

Check your work:

- Did you use any `onclick` attributes in HTML?
  - If so, move those to `addEventListener` in `app.js`
- When you first load the page, do you see any errors in the console?
  - If so, fix them
- What happens when you don't enter anything in the tip-amount field, and then click "Calculate"?  Do you see an error in the console?  Do you see "undefined" appear on the page?
  - If so, figure out how to remove that error before committing
- Enter amounts like `33` and `45` and `17`.  Do you see more or less than 2 decimals?
  - If so, make sure that you always display all tip amounts to 2 decimals, as the wireframe has specified
- Does the `$` appear correctly in the output?
  - If not, go back and look over the wireframe above and make your output match

Commit:

You've just done some awesome work.  In git, commit and push to save your work.

---

**User can see the correct tip amount when they enter a number with $**

Update your javascript to satisfy the following user story:

    When a user enters a dollar amount with a "$" and/or decimals (like $2.45, or $300)
    And clicks "Calculate Tip"
    Then they should see the tip amount appear beneath the text field

Check your work:

- Does your tip amount change correctly based on the decimals?  For example, is the tip for "$1.00" different from the tip for "$1.80"?
  - If not, you may have `int` and `float` issues
- Does your code still work _without_ the "$" and decimals?  So, does entering "45" still work?
  - If not, go back and make sure that all previous functionality still works

Commit and push.

---

**User can choose the percent they'd like to tip**

Update your app to enable this story:

    When a user enters a dollar amount
    And chooses the percent they'd like to tip
    And clicks "Calculate Tip"
    Then they should see the correct tip amount appear beneath the text field

![](wireframes/tip-calculator-amount.png)

The dropdown should read "How much?" when the page loads.  If the user enters an amount, and clicks "Calculate Tip" and "How much?" is selected, what do you think should happen?  What are some of your options?  Pick one and be ready to defend / explain your decision.

Check your work:

- You've changed HTML.  Re-validate
- When you enter an amount but don't choose a tip amount, does the app do what you'd expect?
- When you leave the amount blank, and choose a tip amount, does the app do what you'd expect?

If you ever see errors in the console, fix them before committing.

Commit with a descriptive message and push.

---

**Refactor**

Check out the code in your `addEventListener`.  Take a minute to ask yourself "How many things is this function doing?"  Your list may look like this:

- Find the text field and get its value
- Find the dropdown and get its value
- Convert strings to floats where necessary
- Perform a calculation, being sure to handle errors / edge cases
- Append the results to the DOM

Now look at the list above (or your list) and ask yourself "which of these have to do with the DOM?"  That is, which of those steps read from or modify the current _state_ of the dom?  Which of those steps is a "pure" calculation.

A "pure" calculation is one that has no side effects.  For example, if a function clears a text field, it's changed the state of the DOM, so we would say it has a side-effect.  If a function simply performs some computation and returns a result, it is said to be a "pure" function.

One indicator that a function has side effects is that it doesn't have a `return` keyword, and it doesn't change anything that it didn't declare itself.

Take a moment to extract a calculation function.  This new function should

- take a `price` and an `amount` parameter
- return the correct tip amount

Once you have extracted this function, and things are working, place this function in a separate javascript file named `js/calculator.js`

Check your work:

- Are you doing math inside your `addEventListener` function?
  - If so, the refactor is not complete
- Are you doing type coercion (strings to numbers) in your calculation function?
  - If so, move the type coercion code into the `addEventListener` function
- Do you have errors in the console at any point?  Fix if so.

Commit

## Stretch

**Users see the tip amount update as they type**

    When a user types, after each keystroke update the tip amount
    Also change the tip amount automatically when the dropdown is selected

HINT: look for the `input` event on the text field, and the `change` event for the dropdown.

## Reflect: Self-asses

Go to the "Objectives" section of this README.  Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README.  For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 
