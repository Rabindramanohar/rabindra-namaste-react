# Routing web application

Routing in web applications can be implemented on both the client side and the server side, each with its own methodologies and benefits.

### Client-Side Routing

It is typically handled by JavaScript frameworks and libraries such as React, Angular, or Vue.js. The routing logic is implemented within the client (the browser), and it allows the application to dynamically load content and update the URL without requiring a full page reload.

**Key Concepts:**

- Single Page Application (SPA): A type of web application where the entire app loads on the initial page load, and subsequent navigation and data fetching occur without reloading the page.
- URL Manipulation: Uses the History API (pushState, replaceState) to change the URL without reloading the page.
- Routing Libraries: Libraries like React Router (for React), Vue Router (for Vue.js), and Angular Router (for Angular) manage the routes.
  **Benefits:**
- Faster Navigation: Only the necessary components are updated, leading to a smoother and faster user experience.
- Reduced Server Load: Less demand on the server as fewer full page reloads are needed.

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

### Client-side Routing

Server-side routing is managed on the server, where each URL request is processed and the server responds with the appropriate HTML page. This is the traditional method of web routing.

**Key Concepts:**

- HTTP Requests: Each URL change triggers a new HTTP request to the server.
- Server Frameworks: Frameworks like Express (for Node.js), Django (for Python), and Ruby on Rails manage the routes and responses.

**Benefits:**

- SEO Friendly: Since the server sends fully rendered HTML pages, search engines can easily index the content.
- Security: More control over data access and security since the logic runs on the server.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### Combining Client-Side and Server-Side Routing

Many modern web applications use a combination of both approaches to leverage the benefits of each. For example, using server-side rendering (SSR) for initial page load to ensure SEO friendliness and fast load times, and then switching to client-side routing for a smooth user experience.
e.g Next.js

## react-router-dom

React Router v6 is a powerful library for handling routing in React applications. It allows developers to manage navigation and rendering of components based on the URL.

### Here are some key components and hooks in React Router v6:

- **createBrowserRouter**: This function is used to create a router instance that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
- **RouterProvider**: This component is used to pass the router instance created by createBrowserRouter to your React application.
- **useRouteError**:
  - This hook is used to access the error that was thrown during the data loading or rendering of the route.
  - It's typically used in error boundary components.

### Children routing:

In React Router v6, nested routes (children routes) are set up by defining routes within a parent route. This allows for more modular and hierarchical routing structures, where child routes inherit the path from their parent routes.
e.g: refer header component

# Dynamic route:

Dynamic routing in React Router v6 allows you to create flexible and responsive applications. By defining routes with dynamic segments and accessing those segments using the useParams hook, you can easily build applications that respond to user input and data changes. This approach is particularly useful for applications that need to display details for specific items, such as each restaurant menus.

# graphQL:

Unlike REST, GraphQL allows clients to specify exactly what data they need, which can reduce the amount of data transferred and simplify the management of that data.

## Key Concepts in Frontend GraphQL

- Query: Request specific data from the GraphQL server.
- Mutation: Send data to the server to create, update, or delete records.
- Subscription: Subscribe to real-time data updates.
- Client Libraries: Tools like Apollo Client help manage GraphQL requests and state management.
- It helps with overfetching of data.
