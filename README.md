📌 Project Overview

This project is a React-based assignment consisting of five independent tasks, each implemented as a separate route to maintain modularity and clarity.
The application demonstrates core React concepts, clean component design, state management, and UI handling.

🧰 Tech Stack

React (Vite)

JavaScript (ES6+)

React Router DOM

CSS (custom styling)

LocalStorage (browser-based persistence)

⚙️ Steps to Run the Project Locally
🔹 Node Version

Node.js v18 or higher is required.

Check your Node version:

node -v

🔹 Installation Steps

Clone the repository:

git clone (https://github.com/AppamAkhil/react-assignment.git)


Navigate into the project directory:

cd react-assignment


Install dependencies:

npm install

🔹 Start Command

Run the development server:

npm run dev


The application will be available at:

http://localhost:5173

📂 Application Structure

Each task is implemented as a separate route:

Task	Route
Task 1 – Todo App	/task1
Task 2 – Form & Password Toggle	/task2
Task 3 – Progress Bar	/task3
Task 4 – Countdown Timer	/task4
Task 5 – Live Search	/task5
🧠 Assumptions Made
🔹 Design & Implementation Decisions

Each task is separated using React Router to ensure independence and modularity.

Functional components and React Hooks (useState, useEffect, useRef) are used throughout the project.

Browser localStorage is used for persistence where required (Todo App and Timer).

Styling is done using plain CSS for simplicity and clarity.

Input validations are handled at the component level.

🔹 Limitations & Trade-offs

No backend or database integration (client-side only).

Data stored in localStorage will be cleared if browser data is cleared.

UI is kept minimal to focus on functionality and readability.

No external UI libraries were used to avoid unnecessary complexity.

🚀 Deployment

The application can be deployed on platforms like Vercel.
A vercel.json file is included to support client-side routing.

👤 Author

Akhil
React Developer Intern Applicant

✅ Final Notes

The project follows clean coding practices.

Components are reusable and well-structured.

README file includes all required submission details.
