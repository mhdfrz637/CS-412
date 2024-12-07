
# MyApp

## Summary

MyApp is a feature-rich web application developed as part of the CS-412 Web Application Development course.
The project serves as an interactive platform demonstrating advanced web development concepts and the integration
of modern technologies. It incorporates a **Single Page Application (SPA)** powered by **Angular**, seamlessly
interacting with a **RESTful API** backend built using **Node.js** and **Express.js**.

### Core Features

- **Frontend:** Developed with Angular, styled using CSS and Angular Materials, delivering a responsive and intuitive interface.
- **Backend:** Built on Node.js and Express.js, implementing RESTful principles for modularity and scalability.
- **Database:** Integrated with MongoDB for efficient data storage and retrieval.
- **Authentication:** Secured with JWT (JSON Web Token) for encrypted communication and secure user sessions.
- **File Handling:** Includes pagination and image handling for dynamic content display.

The SPA communicates with the backend API through HTTP requests, ensuring a smooth flow of data between the client
and server. This architecture separates the presentation layer from the data logic, enhancing maintainability and scalability.

## Design Specifications

### Architecture

1. **Frontend (Angular):**
  - Component-based structure for reusable UI components.
  - Services for managing API calls and application state.
  - Routing module for SPA navigation.

2. **Backend (Node.js & Express):**
  - Organized into middleware, routes, and models.
  - Implements secure authentication and authorization strategies.
  - Handles error management and validation comprehensively.

3. **Database (MongoDB):**
  - NoSQL database for efficient storage of user and post data.
  - Integrated with the backend using Mongoose ORM.

### File Structure

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


