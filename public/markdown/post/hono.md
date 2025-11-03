 
# Hono (Node.js)

> **Hono** – A small, fast, and modern web framework for Node.js and beyond.

Hono (炎, *“flame”* in Japanese) is an ultrafast web framework built on Web Standards.  
It runs great on **Node.js**, as well as on edge runtimes like **Cloudflare Workers**, **Bun**, and **Deno** — but this guide focuses on **Node.js** usage.

---

## 🚀 Features

- ⚡ **Fast** – One of the fastest web frameworks in JavaScript.
- 🧩 **Simple API** – Familiar, Express-like routing and middleware.
- 🪶 **Lightweight** – Small footprint with no dependencies.
- 🧠 **TypeScript-first** – Great developer experience with full typings.
- 🌐 **Web-standard** – Uses native Request and Response objects.

---

## 📦 Installation

```bash
# Using npm
npm install hono

# Or using pnpm
pnpm add hono

# Or using yarn
yarn add hono
````

---

## 🧰 Basic Usage (Node.js)

Create a file named `server.js` (or `index.js`):

```javascript
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.text('Hello from Hono on Node.js!'))

app.get('/json', (c) => c.json({ message: 'This is JSON response from Hono!' }))

serve(app)
```

Then run your server:

```bash
node server.js
```

You’ll see output like:

```
Listening on http://localhost:3000
```

Open that in your browser 🎉

---

## ⚙️ Middleware Example

You can add middleware such as logging, CORS, or custom logic:

```javascript
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', logger())
app.use('/api/*', cors())

app.get('/api/hello', (c) => c.text('Hello from /api/hello'))

serve(app)
```

---

## 🧩 Routing

Hono’s routing is simple and expressive:

```javascript
app.get('/hello/:name', (c) => {
  const { name } = c.req.param()
  return c.text(`Hello, ${name}!`)
})
```

You can also use route groups:

```javascript
const user = app.route('/user')

user.get('/', (c) => c.text('User list'))
user.get('/:id', (c) => c.text(`User ID: ${c.req.param('id')}`))
```

---

## 🧪 Error Handling

Handle errors with middleware:

```javascript
app.onError((err, c) => {
  console.error(err)
  return c.text('Something went wrong!', 500)
})
```

---

## 🧱 Project Structure Example

```
project/
├── package.json
├── server.js
└── routes/
    ├── index.js
    └── users.js
```

Example modular setup:

```javascript
// routes/users.js
export default (app) => {
  app.get('/users', (c) => c.json([{ id: 1, name: 'Alice' }]))
}
```

---

## 📚 Resources

* 🌐 [Official Docs](https://hono.dev)
* 💻 [GitHub Repository](https://github.com/honojs/hono)
* 🧱 [Middleware List](https://hono.dev/middleware)
* 🧩 [Node Server Adapter Docs](https://hono.dev/getting-started/node)
 