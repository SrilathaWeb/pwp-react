 
# 🧱 IBM WebSphere Application Project

A sample enterprise Java application deployed on **IBM WebSphere Application Server (WAS)**.  
This project demonstrates how to build, configure, and deploy Java EE applications using WebSphere.

---

## 🚀 Overview

This project includes:
- Java Servlets, JSPs, and EJBs (Enterprise Java Beans)
- Configuration for **IBM WebSphere Application Server**
- A sample **EAR** and **WAR** structure
- Maven build integration

---

## 🧰 Prerequisites

Ensure you have the following installed and configured:

| Tool | Version | Description |
|------|----------|-------------|
| [IBM WebSphere Application Server](https://www.ibm.com/products/websphere-application-server) | 9.0+ | Enterprise app server |
| [JDK](https://adoptium.net/) | 11+ | Java Development Kit |
| [Maven](https://maven.apache.org/) | 3.6+ | Build automation tool |
| [Eclipse IDE for Enterprise Java Developers](https://www.eclipse.org/downloads/) | latest | Optional for development |

---

## 🗂️ Project Structure

```

websphere-app/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/websphere/
│       │       ├── HelloServlet.java
│       │       └── service/
│       │           └── SampleEJB.java
│       ├── resources/
│       └── webapp/
│           ├── index.jsp
│           └── WEB-INF/
│               └── web.xml
│
├── pom.xml
└── README.md

````

---

## 🧩 Example Servlet

```java
package com.example.websphere;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        resp.getWriter().println("<h1>Hello from IBM WebSphere!</h1>");
    }
}
````

---

## ⚙️ Build & Package

Use Maven to build your EAR or WAR file:

```bash
mvn clean package
```

The output will be located in the target/ directory:

```
target/websphere-app.ear
```

or

```
target/websphere-app.war
```

---

## 🚀 Deployment to WebSphere

1. **Start WebSphere Server**

   Open your WebSphere Administrative Console (usually at [http://localhost:9060/ibm/console](http://localhost:9060/ibm/console)).

2. **Deploy the Application**

    * Navigate to: **Applications → Install New Application**
    * Select your `.war` or `.ear` file from `target/`
    * Follow the wizard and complete deployment

3. **Start the Application**

    * Go to: **Applications → Application Types → WebSphere enterprise applications**
    * Select your app → Click **Start**

4. **Access it**

    * Visit [http://localhost:9080/websphere-app](http://localhost:9080/websphere-app)

---

## 🧾 WebSphere-Specific Configuration

| Setting       | Example Value    | Description                     |
| ------------- | ---------------- | ------------------------------- |
| Context Root  | /websphere-app   | Web context for your app        |
| JVM Heap Size | 1024m            | Adjust based on load            |
| DataSource    | jdbc/myDS        | JDBC resource for DB connection |
| Security      | Enabled (LDAP or JAAS) | Optional for enterprise setup   |

---

## 🧪 Troubleshooting

| Issue                      | Solution                                                               |
| -------------------------- | ---------------------------------------------------------------------- |
| **App fails to start**     | Check WebSphere logs under ${WAS_HOME}/profiles/AppSrv01/logs/server1/ |
| **Port conflicts**         | Change default ports in the server configuration                       |
| **ClassNotFoundException** | Ensure all dependencies are packaged correctly in the EAR/WAR          |
| **403 / 404 Errors**       | Check web.xml mappings and context root                                |

---

## 🧰 Useful WebSphere CLI Commands

```bash
# Start WebSphere server
$WAS_HOME/bin/startServer.sh server1

# Stop WebSphere server
$WAS_HOME/bin/stopServer.sh server1

# List running servers
$WAS_HOME/bin/serverStatus.sh -all
```

---

## 📦 Integration Options

| Integration  | Description               |
| ------------ | ------------------------- |
| **JMS (MQ)** | Messaging with IBM MQ     |
| **JDBC**     | Database connections      |
| **JNDI**     | Resource lookup           |
| **LDAP**     | Enterprise authentication |
 