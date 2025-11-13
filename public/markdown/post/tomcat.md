 
# 🐱 Apache Tomcat Web Application

A simple Java web application running on [Apache Tomcat](https://tomcat.apache.org/).  
This project demonstrates how to deploy and manage Java Servlets and JSPs using Tomcat.

---

## 🚀 Overview

This project contains:
- A sample **Java Servlet**
- A simple **JSP page**
- **web.xml** deployment descriptor
- Ready-to-deploy `.war` file structure

---

## 🧰 Prerequisites

Make sure you have the following installed:

| Tool | Version | Description |
|------|----------|-------------|
| [JDK](https://adoptium.net/) | 11+ | Java Development Kit |
| [Apache Tomcat](https://tomcat.apache.org/) | 9+ | Servlet container |
| [Maven](https://maven.apache.org/) | 3.6+ | Build automation tool |

---

## ⚙️ Project Structure

```

tomcat-app/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/servlet/
│       │       └── HelloServlet.java
│       ├── webapp/
│       │   ├── index.jsp
│       │   └── WEB-INF/
│       │       └── web.xml
│
├── pom.xml
└── README.md

````

---

## 🧩 Example Servlet

```java
package com.example.servlet;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        resp.getWriter().println("<h1>Hello from Tomcat!</h1>");
    }
}
````

---

## 🏗️ Build & Package

Use Maven to build a `.war` file:

```bash
mvn clean package
```

After building, you’ll find the deployable WAR at:

```
target/tomcat-app.war
```

---

## 🚀 Deploy to Tomcat

1. Copy the generated `.war` file into your Tomcat `webapps/` directory:

   ```bash
   cp target/tomcat-app.war $CATALINA_HOME/webapps/
   ```

2. Start Tomcat:

   ```bash
   $CATALINA_HOME/bin/startup.sh
   ```

3. Visit: [http://localhost:8080/tomcat-app](http://localhost:8080/tomcat-app)

---

## 🧹 Clean Up

Stop Tomcat:

```bash
$CATALINA_HOME/bin/shutdown.sh
```

Remove the deployed app:

```bash
rm -rf $CATALINA_HOME/webapps/tomcat-app*
```
 