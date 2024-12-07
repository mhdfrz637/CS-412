
# MyApp

## Summary

MyApp is a feature-rich web application developed as part of the CS-412 Web Application Development course.
The project serves as an interactive platform demonstrating advanced web development concepts and the integration
of modern technologies. It incorporates a **Single Page Application (SPA)** powered by **Angular**, seamlessly
interacting with a **RESTful API** backend built using **Node.js** and **Express.js**.

## Features
- **Authentication**: Secure login/signup using JWT.
- **Post Management**: Users can create, read, and delete posts.
- **Responsive Design**: Accessible across devices using Angular Material.

## Technologies Used
- **Frontend**: Angular, Angular Material
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Tools**: Git, Postman, WebStorm

## Getting Started

### Prerequisites
- Node.js (latest version recommended)
- Angular CLI
- MongoDB (local or cloud)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mhdfrz637/CS-412
   cd MyApp
   ```
2. Install dependencies for backend:
   ```bash
   npm install
   ```
3. Navigate to the Angular frontend and install dependencies:
   ```bash
   cd src
   npm install
   ```

### Running the Application
- Start the backend server:
  ```bash
  npm start
  ```
- Start the Angular frontend:
  ```bash
  ng serve
  ```
- Visit the application at `http://localhost:4200`.

## API Endpoints
- **User Routes**:
  - POST `/api/user/signup` - Register a new user.
  - POST `/api/user/login` - Login and receive a JWT.
- **Post Routes**:
  - GET `/api/posts` - Fetch all posts.
  - POST `/api/posts` - Create a new post.
  - DELETE `/api/posts/:id` - Delete a specific post.

## File Structure

```
Wad1/
├── .angular/
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── tasks.json
├── backend/
│   ├── middleware/
│   │   └── check-auth.js
│   ├── model/
│   │   ├── post.js
│   │   └── user.js
│   ├── routes/
│   │   ├── post.js
│   │   └── user.js
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── node_modules/    [library root]
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.ts
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.css
│   │   │   │   ├── signup.component.html
│   │   │   │   └── signup.component.ts
│   │   │   ├── auth.guard.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth-data.model.ts
│   │   │   └── auth-interceptor.ts
│   │   ├── navigation/
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.ts
│   │   │   └── header/
│   │   │       ├── header.component.css
│   │   │       ├── header.component.html
│   │   │       └── header.component.ts
│   │   ├── posts/
│   │   │   ├── create-post/
│   │   │   │   ├── create-post.component.css
│   │   │   │   ├── create-post.component.html
│   │   │   │   └── create-post.component.ts
│   │   │   ├── post-list/
│   │   │   │   ├── post-list.component.css
│   │   │   │   ├── post-list.component.html
│   │   │   │   └── post-list.component.ts
│   │   │   ├── post.model.ts
│   │   │   └── post.service.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```


## Testing
- To run backend tests:
  ```bash
  npm test
  ```
- To test the frontend:
  ```bash
  ng test
  ```


