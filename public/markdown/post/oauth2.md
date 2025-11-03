 
# 🔐 OAuth2 + Java (Spring Boot) Guide

A complete guide to implementing **OAuth2 authentication and authorization** in a Java Spring Boot application.

---

## 🚀 What is OAuth2?

**OAuth 2.0** is an open standard protocol for authorization that allows secure access to protected resources without sharing user credentials.

Common use cases:
- Logging in via Google, GitHub, etc.
- Protecting REST APIs with tokens.
- Allowing third-party apps access to APIs.

---

## 🧩 OAuth2 Key Concepts

| Term | Description |
|------|--------------|
| **Resource Owner** | The user who owns the data. |
| **Client** | Application requesting access on behalf of the user. |
| **Authorization Server** | Issues tokens after successful authentication. |
| **Resource Server** | Hosts protected APIs; validates tokens. |
| **Access Token** | Short-lived credential used to access protected resources. |
| **Refresh Token** | Used to obtain a new access token when the old one expires. |

---

## ⚙️ Spring Boot Setup

### 1. Create a Spring Boot Project
Use [Spring Initializr](https://start.spring.io/)

**Dependencies:**
- Spring Web  
- Spring Security  
- OAuth2 Client  
- OAuth2 Resource Server  
- Spring Boot Actuator (optional)

### 2. Maven Configuration

**pom.xml**
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
  </dependency>
</dependencies>
````

---

## 🧠 OAuth2 Flow Overview

```
+-------------+       +-----------------+       +----------------+
|  User       | --->  |  Client (App)   | --->  | Authorization  |
|             | <---  |                 | <---  | Server (Google)|
+-------------+       +-----------------+       +----------------+
                             |
                             v
                      +----------------+
                      | Resource Server |
                      | (Spring API)    |
                      +----------------+
```

---

## 🔑 Example: Google OAuth2 Login (Spring Boot Client)

### `application.yml`

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: YOUR_GOOGLE_CLIENT_ID
            client-secret: YOUR_GOOGLE_CLIENT_SECRET
            scope:
              - email
              - profile
        provider:
          google:
            authorization-uri: https://accounts.google.com/o/oauth2/auth
            token-uri: https://oauth2.googleapis.com/token
            user-info-uri: https://www.googleapis.com/oauth2/v3/userinfo
server:
  port: 8080
```

### `SecurityConfig.java`

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login();
        return http.build();
    }
}
```

### `HomeController.java`

```java
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "<a href='/oauth2/authorization/google'>Login with Google</a>";
    }

    @GetMapping("/user")
    public Object user(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }
}
```

✅ Run the app → visit `http://localhost:8080`
Click “Login with Google” → You’ll be redirected and logged in.

---

## 🔒 Securing REST API (Resource Server with JWT)

### `application.yml`

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://accounts.google.com
```

### `SecurityConfig.java`

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ResourceServerConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
        return http.build();
    }
}
```

### `ApiController.java`

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    @GetMapping("/public")
    public String publicEndpoint() {
        return "Public API - No auth required!";
    }

    @GetMapping("/secure")
    public String secureEndpoint() {
        return "Secure API - Auth required!";
    }
}
```

---

## 🧾 Testing JWT Authentication

Use a valid **Bearer token** (JWT) in your request header:

```bash
curl -H "Authorization: Bearer <ACCESS_TOKEN>" http://localhost:8080/secure
```

If the token is valid, the API will respond successfully.
Otherwise, you’ll get a 401 Unauthorized.

---

## 🔁 Refresh Token Flow (Concept)

1. Client exchanges username/password or authorization code for access + refresh tokens.
2. Access token expires (short-lived).
3. Client requests a new access token using refresh token:

```bash
POST /oauth/token
grant_type=refresh_token&refresh_token=<token>
```

---

## 🧰 Common OAuth2 Providers

| Provider | Authorization URI                           | Token URI                                       |
| -------- | ------------------------------------------- | ----------------------------------------------- |
| Google   | `https://accounts.google.com/o/oauth2/auth` | `https://oauth2.googleapis.com/token`           |
| GitHub   | `https://github.com/login/oauth/authorize`  | `https://github.com/login/oauth/access_token`   |
| Facebook | `https://www.facebook.com/dialog/oauth`     | `https://graph.facebook.com/oauth/access_token` |
| Okta     | `<your-domain>/oauth2/default/v1/authorize` | `<your-domain>/oauth2/default/v1/token`         |

---

## 🧠 Best Practices

✅ Use **HTTPS** for all OAuth communication.
✅ Keep **client secrets** out of version control.
✅ Use **short-lived access tokens** + **refresh tokens**.
✅ Validate tokens using `JwtDecoder`.
✅ Implement proper **CORS** and **CSRF** settings for web apps.
✅ Log out via `/logout` or revoke tokens when needed.

---

## 🧪 Useful Tools

* [JWT.io](https://jwt.io) – decode and verify JWTs.
* [Postman](https://www.postman.com) – test OAuth2 flows easily.
* [Google OAuth Playground](https://developers.google.com/oauthplayground) – simulate OAuth2 exchanges.

---

## 📚 References

* [Spring Security OAuth2 Docs](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)
* [Spring Boot Resource Server Guide](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web.security.oauth2)
* [Google OAuth2 API Reference](https://developers.google.com/identity/protocols/oauth2)
* [Okta Developer Docs](https://developer.okta.com/docs/)

---

## ✅ Summary

| Role             | Implementation                                  |
| ---------------- | ----------------------------------------------- |
| Client App       | Uses spring-boot-starter-oauth2-client          |
| Resource Server  | Uses spring-boot-starter-oauth2-resource-server |
| Token Type       | JWT (Access Token)                              |
| Provider Example | Google / GitHub / Okta                          |
| Authentication   | OAuth2 Login                                    |
| Authorization    | Secured API endpoints                           |
 