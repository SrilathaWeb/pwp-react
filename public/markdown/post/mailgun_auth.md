 
# 📧 Mailgun Authentication with Express.js

This guide shows how to use **Mailgun** (a powerful email API service) with an **Express.js** backend to send authentication emails such as verification links, password resets, and notifications.

---

## 🧩 Overview

### 💡 What You’ll Learn
- How to set up a Mailgun account and API key  
- How to configure environment variables securely  
- How to integrate Mailgun into an Express app  
- How to send authentication emails (signup verification, password reset, etc.)

---

## 🧰 Prerequisites

- Node.js 18+ installed  
- A Mailgun account ([mailgun.com](https://www.mailgun.com))  
- A verified sending domain (e.g., `yourdomain.com`)  
- Express.js app setup  

---

## ⚙️ Step 1: Setup Mailgun Account

1. Go to [https://www.mailgun.com](https://www.mailgun.com)
2. Create an account (free sandbox or paid)
3. Verify your domain (or use sandbox domain)
4. Get your **API Key** and **Domain name** from:
```

Mailgun Dashboard → Sending → Domains → [Your Domain]

```

Example:
```

Domain: sandbox1234567890.mailgun.org
API Key: key-1234567890abcdef1234567890abcdef

````

---

## ⚙️ Step 2: Create Express Project

```bash
mkdir mailgun-auth-server
cd mailgun-auth-server
npm init -y
npm install express dotenv mailgun-js
````

---

## ⚙️ Step 3: Project Structure

```
mailgun-auth-server/
├── .env
├── server.js
├── mailgun.js
└── routes/
    └── authRoutes.js
```

---

## 🔑 Step 4: Configure Environment Variables

**`.env`**

```env
MAILGUN_API_KEY=key-1234567890abcdef1234567890abcdef
MAILGUN_DOMAIN=sandbox1234567890.mailgun.org
MAILGUN_FROM=no-reply@yourdomain.com
PORT=5000
```

> ⚠️ Never commit `.env` files to GitHub.
> Use `.gitignore` to exclude it.

---

## 📦 Step 5: Configure Mailgun Utility

**`mailgun.js`**

```js
import mailgun from "mailgun-js";
import dotenv from "dotenv";

dotenv.config();

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default mg;
```

---

## 🧱 Step 6: Create Express Server

**`server.js`**

```js
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

---

## 📨 Step 7: Create Authentication Routes

**`routes/authRoutes.js`**

```js
import express from "express";
import mg from "../mailgun.js";

const router = express.Router();

// 🧩 Example 1: Send Signup Verification Email
router.post("/send-verification", async (req, res) => {
  const { email, token } = req.body;

  const verificationLink = `https://yourfrontend.com/verify?token=${token}`;

  const data = {
    from: process.env.MAILGUN_FROM,
    to: email,
    subject: "Verify your email address",
    html: `
      <h3>Email Verification</h3>
      <p>Click the link below to verify your email:</p>
      <a href="${verificationLink}">${verificationLink}</a>
    `,
  };

  try {
    await mg.messages().send(data);
    res.status(200).json({ success: true, message: "Verification email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// 🧩 Example 2: Send Password Reset Email
router.post("/send-password-reset", async (req, res) => {
  const { email, resetToken } = req.body;

  const resetLink = `https://yourfrontend.com/reset-password?token=${resetToken}`;

  const data = {
    from: process.env.MAILGUN_FROM,
    to: email,
    subject: "Reset your password",
    html: `
      <h3>Password Reset Request</h3>
      <p>Click below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 15 minutes.</p>
    `,
  };

  try {
    await mg.messages().send(data);
    res.status(200).json({ success: true, message: "Password reset email sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

export default router;
```

---

## 🧠 Step 8: Test with Postman or curl

### Example Request:

```
POST http://localhost:5000/api/auth/send-verification
Content-Type: application/json

{
  "email": "user@example.com",
  "token": "1234567890abcdef"
}
```

### Example Response:

```json
{
  "success": true,
  "message": "Verification email sent"
}
```

---

## 🧰 Optional: Use Async Mailgun SDK (v3)

If you prefer the new SDK:

```bash
npm install @mailgun/mailgun-js
```

Then replace your import:

```js
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});
```

---

## 🔐 Step 9: Security Recommendations

* ✅ Always store credentials in `.env`
* ✅ Verify email tokens server-side before activating users
* ✅ Add expiration to verification links
* ✅ Use HTTPS in production
* ✅ Limit API request rates to prevent abuse

---

## ⚡ Bonus: Token Generation Example

```js
import crypto from "crypto";

export function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}
```

Use this token in `/send-verification` route to send secure links.

---

## 🧾 Example Output Email (HTML)

**Subject:** Verify your email address
**Body:**

```html
<h3>Welcome to Our App 🚀</h3>
<p>Click below to verify your email:</p>
<a href="https://yourfrontend.com/verify?token=1234">Verify Email</a>
```

---

## 📚 References

* [Mailgun API Documentation](https://documentation.mailgun.com/en/latest/api_reference.html)
* [Mailgun Node SDK (npm)](https://www.npmjs.com/package/mailgun-js)
* [Express.js Official Site](https://expressjs.com/)
* [dotenv for Node](https://www.npmjs.com/package/dotenv)

---

## 🧠 Summary

| Feature               | Implementation                              |
| --------------------- |---------------------------------------------|
| Mailgun Integration   | mailgun-js or @mailgun/mailgun-js           |
| Express Backend       | Handles email requests                      |
| Environment Variables | .env file for keys                          | 
| Email Types           | Verification, Password Reset, Notifications |
| Security              | Token verification + HTTPS                  |
 
