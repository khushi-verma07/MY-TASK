PopX React App

A simple React-based app with a mobile-style centered card layout for user onboarding and account management.

🚀 Features

Welcome Page – Entry screen with options to create an account or login.

Signup Page – Form with validation for user details (name, email, phone, password, company, and agency selection).

Login Page – Email + password login form.

Account Page – Displays user profile and settings in a neat card UI.

Navigation Flow –

Welcome → Create Account → Signup

Welcome → Already Registered → Login

Login → Account

Signup → Account

🛠 Tech Stack

React 

React Router DOM – For navigation

Tailwind CSS – For styling

Heroicons – For icons

📂 Project Structure
src/
│── App.jsx           # Main app entry, handles routing
│── index.js          # React DOM render
│── pages/
│    ├── Welcome.jsx  # Welcome page
│    ├── Signup.jsx   # Signup form
│    ├── Login.jsx    # Login form
│    └── Account.jsx  # Account settings/profile

