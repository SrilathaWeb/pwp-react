# Spring Boot Deep Dive – Modern Java Development Simplified
 
# 🌱 Spring Boot Guide
 

## Introduction
Spring Boot is one of the most popular Java frameworks used to build **standalone, production-ready applications** with minimal configuration.  
It simplifies the Spring framework setup by providing **auto-configuration**, **embedded servers**, and **opinionated defaults**, allowing developers to focus on business logic instead of boilerplate.

---

## 🚀 Why Spring Boot?
Spring Boot revolutionized the Java ecosystem by making it simple to:
- Create applications quickly using **Spring Initializr**
- Embed servers like **Tomcat**, **Jetty**, or **Undertow**
- Simplify dependency management with **Starters**
- Enable **production-ready** monitoring using **Spring Actuator**
- Integrate seamlessly with **cloud-native** applications

---
 
## 🧩 Project Structure

```bash

spring-boot-demo/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── DemoApplication.java
│   │   │       ├── controller/
│   │   │       │   └── HelloController.java
│   │   │       └── model/
│   │   │           └── User.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
│       └── java/
├── pom.xml
└── README.md

````

---

## ⚙️ Create a Spring Boot Application

### 1. Initialize the Project
Use **[Spring Initializr](https://start.spring.io/)** or the CLI:
```bash
spring init --dependencies=web,lombok spring-boot-demo
````

---

## 🧱 Main Application Class

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

---

## 🌐 REST Controller Example

```java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot!";
    }
}
```

✅ **Run the app:**

```bash
mvn spring-boot:run
```

Then open: [http://localhost:8080/hello](http://localhost:8080/hello)

---

## ⚙️ Application Properties

`src/main/resources/application.properties`:

```properties
server.port=8081
spring.application.name=spring-boot-demo
```

---

## 🧩 Example: REST API with Model and Service

### User Model

```java
package com.example.demo.model;

public class User {
    private Long id;
    private String name;

    // Getters & Setters
}
```

### Service Layer

```java
package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Arrays;

@Service
public class UserService {
    public List<User> getAllUsers() {
        return Arrays.asList(
            new User(1L, "Alice"),
            new User(2L, "Bob")
        );
    }
}
```

### Controller

```java
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}
```

✅ **Test:**
`GET http://localhost:8080/api/users`

Response:

```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```

---

## 🧪 Testing a Controller

```java
package com.example.demo;

import com.example.demo.controller.HelloController;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class HelloControllerTest {

    private final HelloController controller = new HelloController();

    @Test
    void shouldReturnHelloMessage() {
        assertThat(controller.sayHello()).isEqualTo("Hello, Spring Boot!");
    }
}
```

---

## 🐳 Build & Run with Docker

```dockerfile
FROM openjdk:21-jdk
COPY target/spring-boot-demo.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

Build & run:

```bash
mvn clean package
docker build -t spring-boot-demo .
docker run -p 8080:8080 spring-boot-demo
```

---

## 📚 Summary

| Concept                  | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `@SpringBootApplication` | Enables auto-configuration and component scanning |
| `@RestController`        | Handles REST requests                             |
| `@Service`               | Defines business logic                            |
| `application.properties` | Configures the app                                |
| Embedded Server          | Runs directly via `mvn spring-boot:run`           |

 
## 🏗️ Creating Your First Spring Boot Project

You can use [https://start.spring.io](https://start.spring.io) to generate a project.

### Example Project Structure
```bash
spring-boot-demo/
 ├── src/
 │   ├── main/
 │   │   ├── java/com/example/demo/
 │   │   │   └── DemoApplication.java
 │   │   └── resources/
 │   │       ├── application.properties
 │   │       └── static/
 │   └── test/
 └── pom.xml
````

### Main Application

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

✅ This annotation combo:

* Enables **auto-configuration**
* Performs **component scanning**
* Boots the application with an embedded server

---

## ⚙️ Key Features

### 1. Auto Configuration

Spring Boot automatically configures beans based on dependencies in the classpath.

```java
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```

You rarely need manual configuration — Boot wires it intelligently.

---

### 2. Spring Boot Starters

Starters are curated dependency sets for common tasks:

| Starter                        | Purpose                             |
| ------------------------------ | ----------------------------------- |
| `spring-boot-starter-web`      | Build web & RESTful apps            |
| `spring-boot-starter-data-jpa` | Integrate JPA & Hibernate           |
| `spring-boot-starter-security` | Add security with Spring Security   |
| `spring-boot-starter-test`     | Testing utilities and JUnit support |

Example in `pom.xml`:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

---

### 3. Spring Boot Actuator

Actuator provides built-in endpoints for health, metrics, and application insights.

Enable it by adding:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Access common endpoints:

```
/actuator/health
/actuator/metrics
/actuator/info
```

Example output:

```json
{
  "status": "UP",
  "components": {
    "db": { "status": "UP" },
    "diskSpace": { "status": "UP" }
  }
}
```

---

### 4. Profiles & Configuration

Use **profiles** to handle environment-specific configurations.

#### application-dev.properties

```properties
server.port=8081
spring.datasource.url=jdbc:mysql://localhost/devdb
```

#### application-prod.properties

```properties
server.port=8080
spring.datasource.url=jdbc:mysql://prod-server/proddb
```

Run with:

```bash
java -jar app.jar --spring.profiles.active=prod
```

---

### 5. RESTful APIs in Spring Boot

Creating a REST controller is easy.

```java
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}
```

Run the app and visit:
[http://localhost:8080/api/hello](http://localhost:8080/api/hello)

---

### 6. Data Access with Spring Data JPA

```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}
```

```java
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}
```

---

### 7. Security with Spring Boot

Spring Security offers easy authentication and authorization.

Add starter:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

By default, Boot creates a generated password for the default user on startup.

---

### 8. Testing

Spring Boot integrates seamlessly with **JUnit 5** and **MockMvc**.

```java
@SpringBootTest
@AutoConfigureMockMvc
class DemoApplicationTests {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void testHelloEndpoint() throws Exception {
        mockMvc.perform(get("/api/hello"))
               .andExpect(status().isOk())
               .andExpect(content().string("Hello from Spring Boot!"));
    }
}
```

---

## 🧰 Advanced Features

### 🔄 Spring Boot with Microservices

* Integrate with **Spring Cloud** for discovery, configuration, and circuit breakers.
* Works with **Eureka**, **Resilience4J**, and **Config Server**.

### ☁️ Deploying to Cloud

Spring Boot apps run seamlessly on:

* AWS Elastic Beanstalk
* Azure App Service
* Google Cloud Run
* Kubernetes (using Docker)

Example Dockerfile:

```dockerfile
FROM openjdk:21-jdk
COPY target/demo.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

---

## 🏁 Conclusion

Spring Boot empowers developers to build **robust, scalable**, and **production-ready** Java applications with ease.
From microservices to monolithic apps, it provides everything you need — **fast startup, minimal config, and cloud-native readiness.**

> “Spring Boot allows you to focus on coding your ideas — not configuration.”

---
 