## Part 1: Run the code
step 1: Use `npm install` to install dependencies.
step 2: Use `npm start` to run the code.

### Part 2: Coding Exercise Completion Instructions
### 2.1. Base Requirements：
- Your code must use Typescript and the interface provided.

![Alt text](/public/screenshots/image-1.png)

very field is required and should validated to the following conditions:
`Use react-hook-form to complete the following functions.`
- First name and last name should contain only A-B / a-b characters
- Phone number should meet the Australian mobile number standards
- Email should meet the standard xxxx@xxx.com format
- Date of birth should be a date picker in the format DD/MM/YYYY
- Should the user entry not meet the validation requirements, the UI should reflect the error appropriately.

`Add customer page:`

![Alt text](/public/screenshots/image-2.png)

Failure to fill out the form correctly will display an error.

`(1) Case 1: click SUBMIT button without filling out the form.`

![Alt text](/public/screenshots/image-3.png)

`(2) Case 2: fill out the form without click SUBMIT button.`

![Alt text](/public/screenshots/image-4.png)

`(3) Case 3: fill out the form and then click SUBMIT button.`

![Alt text](/public/screenshots/image-17.png)

You must use the customers array provided and each customer should be stored as it's own JSON object.

![Alt text](/public/screenshots/image-6.png)

![Alt text](/public/screenshots/image-5.png)

- Somewhere on the page display a list of the current customers.

`Home page (Showing 2 initial customers):`

![Alt text](/public/screenshots/image.png)

`Add a new customer (Lucy Ma):`

![Alt text](/public/screenshots/image-7.png)

### 2.2. Additional Requirements:
- Use CSS to make it look nice for the user
`Use MUI components and their styles.`

- Be able to edit an existing customer
`Edit the first customer named David Thomas:`

![Alt text](/public/screenshots/image-8.png)

`Edit all customer information (excluding ID):`

![Alt text](/public/screenshots/image-9.png)

`After editing (click UPDATE button):`

![Alt text](/public/screenshots/image-10.png)

- Be able to delete an existing customer

`Delete the customer named Anna Martin:`

![Alt text](/public/screenshots/image-11.png)


### 2.2. Challenge:
- Use the MUI library to make the page look like it belongs in a modern web-based software.

`Use some MUI component to do this exercise, such as: Button, Box, Typography, TextField, etc.`
![Alt text](/public/screenshots/image-12.png)

![Alt text](/public/screenshots/image-13.png)

### 2.3. Others:
`(1) Use uuid to create customer's ID.`

![Alt text](/public/screenshots/image-14.png)

`(2) Use MUI Snackbar for showing success message when finished adding, editing, or deleting.`
`e.g., deleting a customer:`

![Alt text](/public/screenshots/image-15.png)

`(3) Click CANCEL button to cancel and go back to Home page and show the CustomerList page.`

![Alt text](/public/screenshots/image-16.png)