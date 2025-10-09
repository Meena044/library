# Library

A simple web-based, responsive library app built with **HTML**, **CSS**, and **JavaScript**. This project showcases DOM manipulation, native HTML dialog usage, responsive layouts using CSS Grid and Flexbox, and dynamic UI updates via JavaScript.

## Features

- **Display Books**
  - View books as individual cards showing:
    - Title
    - Author
    - Number of pages
    - Read status

- **Add a Book**
  - Click the “Add Book” button to open a modal form using the native `<dialog>` element.
  - Input book details and submit to add the book dynamically to the UI.

- **Delete a Book**
  - Remove any book card by clicking the delete button.

- **Responsive Design**
  - Layout adapts for smaller screens using **CSS media queries**.
  - Optimized for both desktop and mobile views.

- **Dynamic DOM Manipulation**
  - Books are stored in a JavaScript array and rendered dynamically.
  - Books added by the user appear instantly on the page.

---

## Technologies Used

- **HTML5**
  - Semantic structure
  - `<dialog>` element for modals
  - Form embedded inside <dialog> to capture and submit user input

- **CSS3**
  - **Grid layout** for book display
  - **Flexbox** for card and form layout
  - **Media queries** for responsive design on mobile devices

- **JavaScript (ES6+)**
  - Event handling
  - Dynamic DOM updates
  - Data stored in an array (non-persistent)
 
- **Deployment**
  - Netlify

---

## Demo

live link: https://library-shelf.netlify.app/

## How It Works

1. **On Page Load**
   - A set of hardcoded books is loaded from a predefined array.

2. **Add a Book**
   - Clicking "Add Book" opens a modal form.
   - A form inside the dialog captures book details: title, author, page count, and read status.
   - On submission, the book is added to the in-memory array and displayed on the page.

3. **Delete a Book**
   - Each card has a delete button that removes the book from the UI.

4. **Refresh Behavior**
   - Only the original hardcoded books reappear.
   - User-added books are cleared on page reload due to in-memory storage.

---

## 📱 Responsive Design

- Media queries ensure the layout is optimized for mobile devices.
- Book cards and the form layout adapt to smaller screen sizes for improved usability.

---

## Limitations

- No persistent storage (books are not saved after a page refresh).
- No edit functionality for existing books.
- Minimal form validation.

---

## 🚀 Future Enhancements

- Add **localStorage** to persist book data
- Toggle read status directly on cards
- Add validation and error messages to the form
- Implement editing of existing books
- Refactor using ES6 classes or modules

---



