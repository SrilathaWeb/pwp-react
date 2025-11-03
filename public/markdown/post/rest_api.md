# 🌐 Java REST API Guide (Spring Boot)

A step-by-step guide to building a **RESTful API** using **Java** and **Spring Boot**.

---

## 🚀 Overview

This guide demonstrates how to:
- Build a REST API using Spring Boot 3 (Java 17+)
- Implement CRUD operations
- Handle JSON requests/responses
- Use `@RestController`, `@RequestMapping`, and `@Service`

---

## 🧱 Project Setup

### 1. Create Project

Use [Spring Initializr](https://start.spring.io/) or the CLI:

```bash
spring init \
--dependencies=web,devtools,lombok,validation \
--java-version=17 \
--build=maven \
java-rest-api
````

**Dependencies:**

* Spring Web
* Lombok
* Spring Boot DevTools
* Validation (for input checks)

---

## 📂 Folder Structure

```
java-rest-api/
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── controller/
│   │   │   │   └── UserController.java
│   │   │   ├── model/
│   │   │   │   └── User.java
│   │   │   ├── service/
│   │   │   │   └── UserService.java
│   │   │   └── DemoApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/java/
└── pom.xml
```

---

## ⚙️ Main Application

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

## 👤 Model Layer

`User.java`

```java
package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;
    private String name;
    private String email;
}
```

---

## 🧠 Service Layer

`UserService.java`

```java
package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {
    private final Map<Long, User> users = new HashMap<>();

    public List<User> getAllUsers() {
        return new ArrayList<>(users.values());
    }

    public User getUserById(Long id) {
        return users.get(id);
    }

    public User addUser(User user) {
        user.setId((long) (users.size() + 1));
        users.put(user.getId(), user);
        return user;
    }

    public User updateUser(Long id, User user) {
        if (!users.containsKey(id)) return null;
        user.setId(id);
        users.put(id, user);
        return user;
    }

    public void deleteUser(Long id) {
        users.remove(id);
    }
}
```

---

## 🌐 Controller Layer

`UserController.java`

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
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
```

---

## 🧪 Test the API (using cURL or Postman)

### 1. Get all users

```bash
GET http://localhost:8080/api/users
```

### 2. Add new user

```bash
POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com"
}
```

### 3. Update user

```bash
PUT http://localhost:8080/api/users/1
Content-Type: application/json

{
  "name": "Alice Updated",
  "email": "alice@newmail.com"
}
```

### 4. Delete user

```bash
DELETE http://localhost:8080/api/users/1
```

---

## ⚙️ application.properties

```properties
server.port=8080
spring.application.name=java-rest-api
```

---

## 📦 Build & Run

```bash
mvn clean install
mvn spring-boot:run
```

Then open 👉 [http://localhost:8080/api/users](http://localhost:8080/api/users)

---

## 🔒 Bonus: Exception Handling

`GlobalExceptionHandler.java`

```java
package com.example.demo.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntime(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                             .body("Error: " + ex.getMessage());
    }
}
```

---

## 🧩 Tools & Dependencies

| Tool           | Purpose                  |
| -------------- | ------------------------ |
| Spring Boot    | Application framework    |
| Maven          | Build tool               |
| Lombok         | Reduces boilerplate code |
| Postman / cURL | API testing              |
| JSON           | Data format for REST     |

---

## 📚 References

* [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/)
* [Spring REST Tutorial (Baeldung)](https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java-based-configuration)
* [Postman Download](https://www.postman.com/downloads/)
* [Spring Initializr](https://start.spring.io/)

 
