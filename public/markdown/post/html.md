
# 🌐 HTML5 — The Foundation of the Web

HTML (HyperText Markup Language) is the standard markup language used to structure and present content on the web.  
HTML5 introduced new elements, APIs, and semantics that make building modern, accessible websites much easier.

---

## ⚙️ Key Features of HTML5

| Feature | Description |
|----------|--------------|
| Semantic Elements | New tags like <header>, <article>, and <footer> define page structure clearly. |
| Multimedia Support | Native support for <audio> and <video> without plugins. |
| Forms | New input types like email, date, and range. |
| Canvas & SVG | Draw 2D graphics and animations directly in the browser. |
| Offline Storage | Store data locally using localStorage and sessionStorage. |
| Geolocation API | Retrieve user location with JavaScript. |
| Responsive Design | Works seamlessly with CSS3 media queries. |

---

## 🧱 HTML Page Structure

Here’s a simple example of a modern HTML5 structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a Full Stack Developer passionate about modern web development.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <article>
          <h3>Portfolio Website</h3>
          <p>A personal website showcasing my skills and projects.</p>
        </article>
      </section>
    </main>

    <footer>
      <p>© 2025 My Portfolio. All rights reserved.</p>
    </footer>
  </body>
</html>
````

---

## 🧩 Semantic HTML

Semantic elements give **meaning** to web content, making it easier for browsers, developers, and screen readers to interpret.

| Non-Semantic            | Semantic Equivalent | Usage                            |
| ----------------------- | ------------------- | -------------------------------- |
| <div id="header">     | <header>          | Top section of a page or article |
| <div id="nav">        | <nav>             | Main navigation links            |
| <div id="footer">     | <footer>          | Footer content                   |
| <div class="article"> | <article>         | Independent content block        |
| <div class="section"> | <section>         | Thematic grouping of content     |
| <b>                   | <strong>          | Emphasizes importance            |

Example:

```html
<header>
  <h1>HTML5 Example</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#blog">Blog</a>
  </nav>
</header>
```

---

## 🧠 Common HTML Tags

| Tag                            | Description                                   |
| ------------------------------ | --------------------------------------------- |
| <h1> to <h6>               | Headings (H1 is the largest, H6 the smallest) |
| <p>                          | Paragraph                                     |
| <a>                          | Hyperlink                                     |
| <img>                        | Image                                         |
| <ul>, <ol>, <li>         | Lists (unordered/ordered)                     |
| <div>                        | Block container                               |
| <span>                       | Inline container                              |
| <table>, <tr>, <td>      | Table elements                                |
| <form>, <input>, <label> | Form fields                                   |

---

## 🎨 Images and Links

### Image Tag

```html
<img src="profile.jpg" alt="My Profile Picture" width="200" />
```

### Link Tag

```html
<a href="https://www.example.com" target="_blank">Visit My Website</a>
```

---

## 🧾 Forms and Input Fields

HTML5 made forms smarter and more accessible.

```html
<form action="/submit" method="POST">
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" />

  <input type="submit" value="Submit" />
</form>
```

---

## 🧩 HTML Media

### Video

```html
<video controls width="400">
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Audio

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

---

## 🧮 Tables in HTML

Tables help display structured data.

```html
<table border="1">
  <thead>
    <tr>
      <th>Technology</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Structure of a webpage</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Styling of the webpage</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Interactivity and logic</td>
    </tr>
  </tbody>
</table>
```

---

## 🧭 Responsive Design Meta Tag

To make your web page mobile-friendly, always include this tag in the `<head>` section:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🧰 Best Practices

✅ Use **semantic elements** for accessibility
✅ Keep HTML clean and properly indented
✅ Use **alt** attributes for images
✅ Use **external CSS and JS files** for maintainability
✅ Validate your HTML using [https://validator.w3.org/](https://validator.w3.org/)

---

## 🏁 Conclusion

HTML is the **foundation of all web development**.
By mastering HTML5 semantics and structure, you can create clean, maintainable, and accessible web pages that form the base for CSS and JavaScript enhancements.
 