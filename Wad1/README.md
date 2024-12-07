Description:
This repository contains the final project for the CS-412 course, a web-based application designed with user authentication, database integration, and robust functionality to handle multiple users. The application is structured to ensure clean, maintainable code and adheres to industry-standard practices for naming conventions, file organization, and error handling.

Features:
-User Authentication: Secure login and registration functionality with encrypted password storage.
-Database Integration: All user actions are saved to a database for persistent storage.
-Multi-User Support: Handles multiple users simultaneously with proper session management.
-Error-Free Execution: Code is clean and functions correctly with no console errors.
-Responsive UI: Designed for usability across different devices and browsers.

Technology Stack
-Frontend: HTML, CSS, JavaScript
-Backend: Node.js, Express.js
-Database: MongoDB
-Authentication: Passport.js or JWT (mention the one used)
-Tools and Libraries:
NPM packages (e.g., dotenv, bcrypt, etc.)
Postman (for API testing)
GitHub for version control

Code Conventions
-Naming:
Variables: camelCase
Functions: camelCase
Files: kebab-case
-Structure:
Clean, modular code with separation of concerns.
-Comments:
Minimal inline comments for clarity without clutter.

Functional Requirements
-Authentication:
Users can register and log in.
Secure password hashing with bcrypt.
Proper session or token management for authentication.
-Database Operations:
Save, retrieve, and update user data in MongoDB.
Error handling for database connectivity issues.
-Error-Free Execution:
The application runs without errors in the console.
Validation for user input to prevent crashes or SQL injections.
-Multi-User Support:
Handles concurrent users seamlessly.
