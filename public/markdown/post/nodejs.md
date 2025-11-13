# 🟢 Node.js — Powering the Modern Web Backend

**Node.js** is an open-source, cross-platform JavaScript runtime environment that allows developers to build fast, scalable, and efficient backend applications using JavaScript outside the browser.

---

## ⚙️ What is Node.js?

Node.js uses the **V8 JavaScript engine** (the same engine that powers Chrome) to execute JavaScript on the server.  
Its **non-blocking, event-driven architecture** makes it ideal for I/O-heavy applications like web APIs, chat servers, and streaming services.

---

## 🧩 Key Features

| Feature | Description |
|----------|--------------|
| Event-Driven | Uses an event loop and callbacks to handle concurrent requests efficiently. |
| Non-Blocking I/O | Handles multiple operations without waiting for any to complete. |
| Single-Threaded | Uses a single thread with event delegation for high scalability. |
| NPM (Node Package Manager) | Provides over 2 million reusable packages and libraries. |
| Cross-Platform | Runs on Windows, macOS, Linux, and cloud environments. |
| Fast & Lightweight | Built on Google’s V8 engine optimized for performance. |

---

## 🚀 Getting Started with Node.js

### 1️⃣ Install Node.js

Download from [https://nodejs.org](https://nodejs.org)  
Verify installation:

```bash
node -v
npm -v
````

---

### 2️⃣ Create Your First Node.js App

```javascript
// app.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Node.js World!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

Run it:

```bash
node app.js
```

Visit **[http://localhost:3000](http://localhost:3000)** — you’ll see your first Node.js response 🎉

---

## 🧱 Core Modules in Node.js

| Module   | Description                                         | Example                           |
| -------- | --------------------------------------------------- | --------------------------------- |
| `http`   | Creates servers and handles HTTP requests/responses | `http.createServer()`             |
| `fs`     | File system operations                              | `fs.readFile()`, `fs.writeFile()` |
| `path`   | File and directory path utilities                   | `path.join()`                     |
| `os`     | Access system-level information                     | `os.platform()`, `os.cpus()`      |
| `events` | Implements event-driven patterns                    | `EventEmitter`                    |
| `stream` | Handles data streams efficiently                    | `fs.createReadStream()`           |

Example: Reading a file

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 🧠 Asynchronous Programming in Node.js

Node.js is built around **asynchronous callbacks and Promises**:

```javascript
const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

readFile();
```

---

## 🌐 Building APIs with Express.js

Express is the most popular Node.js framework for building RESTful APIs.

### Install Express

```bash
npm install express
```

### Create a Simple API

```javascript
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to My API");
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.status(201).send({ message: "User created", user });
});

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## 🧰 Middleware in Express

Middleware functions intercept and modify requests and responses:

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

Common middlewares:

* `express.json()` – Parses JSON bodies
* `cors()` – Enables Cross-Origin Resource Sharing
* `morgan()` – Logs requests

---

## 🗄️ Connecting Node.js with Databases

Node.js supports multiple databases:

* **MongoDB** (NoSQL)
* **MySQL** / **PostgreSQL**
* **Redis**
* **SQLite**

Example with MongoDB + Mongoose:

```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myapp");

const User = mongoose.model("User", { name: String, age: Number });
User.create({ name: "Alice", age: 25 });
```

---

## 🧱 File Upload Example

```javascript
import express from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const app = express();

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(`File uploaded: ${req.file.originalname}`);
});
```

---

## ⚙️ Environment Variables

Use `.env` files to manage environment-specific data:

```bash
npm install dotenv
```

```javascript
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORT);
```

`.env` file:

```
PORT=5000
DB_URL=mongodb://localhost:27017/mydb
```

---

## 🧾 Node.js Best Practices

✅ Use **async/await** instead of callbacks
✅ Handle errors gracefully with try/catch
✅ Keep logic modular and reusable
✅ Avoid blocking the event loop
✅ Use environment variables for configs
✅ Monitor performance using **PM2** or **Nodemon**

---

## ⚡ Useful Tools

| Tool    | Purpose                              |
| ------- | ------------------------------------ |
| Nodemon | Auto-restarts server on changes      |
| PM2     | Process manager for Node apps        |
| ESLint  | Code linting and quality enforcement |
| Jest    | Testing framework                    |
| dotenv  | Manage environment variables         |

---

## 🧩 Example: CRUD REST API

```javascript
import express from "express";
const app = express();
app.use(express.json());

let users = [];

app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});
app.put("/users/:id", (req, res) => {
  users[req.params.id] = req.body;
  res.json(req.body);
});
app.delete("/users/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.sendStatus(204);
});

app.listen(4000, () => console.log("Server running on port 4000"));
```

---

## 🏁 Conclusion

Node.js is the **backbone of modern full-stack development**, powering everything from REST APIs to real-time applications.
With frameworks like **Express.js**, **NestJS**, and **Fastify**, it’s a must-have skill for full-stack developers.

> 🌟 Combine it with **React**, **Tailwind**, and **MongoDB** to build complete, scalable, and high-performing web applications.
 