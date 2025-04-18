## Docs.dev - RESTful API's

### What is REST? 🧩

REST stands for **Representational State Transfer**.

It’s an architectural style that defines **how web services should behave** and how clients should interact with them over **HTTP**.

A **RESTful Web Service** is simply a **web API** that follows REST principles.

### Why REST? 🤔

REST helps you:

-   Build scalable, reliable APIs.

-   Separate frontend from backend.

-   Create standardized CRUD operations (Create, Read, Update, Delete).

-   Work with any language or platform (frontend in React, backend in Node, Python, Java, etc.)

### Core Concepts of REST 📦

#### 1. Resources

-   Anything you want to expose via API: users, products, posts, etc.

-   Represented as URLs.

```sql
GET /users         → list of users
GET /users/1       → user with ID 1
POST /users        → create a new user
PUT /users/1       → update user 1
DELETE /users/1    → delete user 1
```

#### 2. HTTP Methods (CRUD)

| HTTP Method | Action | Description               |
| :---------- | :----- | :------------------------ |
| `GET`       | Read   | Retrieve a resource       |
| `POST`      | Create | Add a new resource        |
| `PUT`       | Update | Replace a resource        |
| `PATCH`     | Update | Modify part of a resource |
| `DELETE`    | Delete | Remove a resource         |

### Key REST Principles 🧠

1. **Stateless** – Each request contains all the information needed (no sessions).

2. **Client-Server** – The frontend and backend are separated.

3. **Uniform Interface** – Follow consistent URL structures and methods.

4. **Resource-Based** – Everything is treated as a resource (noun-based URIs).

5. **Cacheable** – Responses can be cached for performance.

### Real World Use 🧪

```js
// Using fetch for retreiving data
fetch("https://api.example.com/products");

// Using axios to create a data
axios.post("/api/users", { name: "Vikash" });
```

You’re consuming **RESTful APIs**.

### Summary ✅

-   RESTful services use **HTTP** methods to operate on resources via URLs.

-   They're the **backbone of APIs** used in frontend-backend communication.

-   You can test **REST APIs** using tools like Postman or Curl.

**Happy Coding 💖**