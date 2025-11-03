 
# ⚛️ React Router Guide (v6+)

A comprehensive guide to using **React Router** for navigation and routing in modern React apps.

---

## 🚀 What is React Router?

**React Router** is a library that enables navigation between different views in a React application — without reloading the page.

It’s essential for building **Single Page Applications (SPAs)**.

---

## 🧩 Installation

Install React Router DOM (v6+):

```bash
npm install react-router-dom
# or
yarn add react-router-dom
````

---

## 📂 Basic Project Structure

```
react-router-demo/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   └── pages/
│       └── User.js
└── package.json
```

---

## ⚙️ Basic Setup

`index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🌐 Define Routes

`App.js`

```jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <h1>React Router Demo</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

## 🧭 Navigation with `Link` and `NavLink`

* `<Link>` – Basic navigation (does not reload the page)
* `<NavLink>` – Same as `<Link>` but adds an **active** class when route is active

```jsx
<NavLink 
  to="/about" 
  style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
>
  About
</NavLink>
```

---

## 🧩 Nested Routes

`App.js`

```jsx
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

`Dashboard.js`

```jsx
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested route here */}
    </div>
  );
}
export default Dashboard;
```

---

## 🔢 URL Parameters

`App.js`

```jsx
import { Routes, Route } from 'react-router-dom';
import User from './pages/User';

<Routes>
  <Route path="/user/:id" element={<User />} />
</Routes>
```

`User.js`

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h3>User ID: {id}</h3>;
}
export default User;
```

🧠 Example:

* `/user/10` → displays *User ID: 10*

---

## 🧠 useNavigate Hook

Programmatic navigation (redirect users from code):

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ...validate login
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 🔙 useLocation Hook

Get info about the current route (useful for analytics or active state):

```jsx
import { useLocation } from 'react-router-dom';

function CurrentRoute() {
  const location = useLocation();
  return <p>Current route: {location.pathname}</p>;
}
```

---

## ❌ 404 Page (Catch-All Route)

```jsx
<Routes>
  <Route path="*" element={<h2>404 - Page Not Found</h2>} />
</Routes>
```

---

## 🧩 Protected Routes (Auth Example)

`ProtectedRoute.js`

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoute;
```

Usage:

```jsx
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute isAuthenticated={userLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

## 🧰 React Router Hooks Summary

| Hook             | Description                            |
|------------------| -------------------------------------- |
| useNavigate()   | Navigate programmatically              |
| useParams()     | Access dynamic route parameters        |
| useLocation()   | Access current URL/location info       |
| useSearchParams() | Manage query parameters                |
| useRoutes()      | Create routes via configuration object |

---

## 📚 Official Resources

* [React Router Docs](https://reactrouter.com/)
* [React Router v6 API Reference](https://reactrouter.com/en/main/start/overview)
* [React Router Examples (GitHub)](https://github.com/remix-run/react-router)
* [React Official Docs](https://react.dev/)

---

## 🧩 Bonus: Query Params Example

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div>
      <h3>Search Query: {query}</h3>
      <button onClick={() => setSearchParams({ q: 'react' })}>
        Search React
      </button>
    </div>
  );
}
```

---

## ✅ Summary

| Concept             | Description                  |
|---------------------| ---------------------------- |
| <Routes> /  <Route> | Define route structure       |
| <Link> / <NavLink>  | Navigate between pages       |
| <Outlet>            | Render nested routes         |
| Hooks               | Access navigation and params |
| ProtectedRoute      | Guard private pages          |
 