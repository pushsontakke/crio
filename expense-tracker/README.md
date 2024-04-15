**Expense Tracker Documentation**

Live link: [Expense Tracker](https://crio-mu.vercel.app/)

GitHub link: [Expense Tracker Repository](https://github.com/pushsontakke/crio/tree/master/expense-tracker)

---

**Introduction**

The Expense Tracker web application is designed to help users manage their expenses effectively. It allows users to track their expenses by adding, editing, and deleting them based on categories and dates. Additionally, users can view a summary of their expenses, manage their wallet balance, and visualize expense trends through charts.

---

**Features**

1. **Wallet Balance**: Users have a default wallet balance set to $5000, which can be increased. The application ensures that users cannot spend more than their available wallet balance and displays an alert if they attempt to do so.

2. **Add, Edit, and Delete Expenses**: Users can add new expenses with details such as title, amount, category, and date. They can also edit or delete existing expenses.

3. **Summary View**: Users can view a summary of their total expenses, categorized either by date or type, through a pie chart.

4. **Expense Trends**: The application provides a bar chart that shows the trending spends based on expense categories.

5. **Persistence**: Wallet balance and the list of expenses are stored in the browser's localStorage, ensuring that they persist even after page refresh.

6. **Responsive Design**: The application is designed to be usable on different devices, ensuring a seamless user experience across various screen sizes.

---

**Functional Requirements**

1. **Add Expense Form**: Provides fields for title, amount, and date with validation for required fields.
   
2. **Add Income Form**: Allows users to increase their wallet balance.

3. **Expense List**: Displays a list of expenses with options to edit or delete each expense.

4. **Expense Summary**: Shows a summary of total expenses in a pie chart.

5. **Expense Trends**: Displays a bar chart showing trending spending based on category.

6. **Edit/Delete**: Allows users to edit or delete expenses.

7. **Responsive Design**: Ensures usability on different devices.

---

**Technologies Used**

- **Frontend**: React.js, HTML, CSS, JavaScript.
- **Third-Party Libraries**: Recharts for charts, react-modal for modals, notistack for alerts, react-icons for icons.
- **Styling**: Plain CSS was used, avoiding the use of third-party libraries for CSS styling.

---

**Additional Pointers**

- **Reusable Components**: The application uses reusable components for UI elements, promoting code reusability and maintainability.
  
- **Code Quality**: The codebase adheres to high standards of quality, readability, and consistency, ensuring maintainability and ease of understanding for future development.

- **Design Alignment**: The design of the application aligns with the provided fonts and color scheme, ensuring visual consistency.

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*


**Cloning and Running the Application**

To clone the repository and run the Expense Tracker application locally, follow these steps:

1. Clone the repository from GitHub:
   ```
   git clone https://github.com/pushsontakke/crio.git
   ```

2. Navigate to the Expense Tracker directory:
   ```
   cd crio/expense-tracker
   ```

3. Install dependencies using npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the application:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. The application will start running on `http://localhost:3000` in your default web browser.

---
