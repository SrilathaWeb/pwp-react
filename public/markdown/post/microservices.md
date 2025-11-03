
# Microservices Architecture – Building Scalable Java Applications

## Introduction
Microservices architecture is an approach to building software systems that structures an application as a collection of **independent, loosely coupled services**.  
Each service focuses on a specific business capability and communicates with others through lightweight mechanisms such as **REST APIs** or **message queues**.

Microservices are ideal for large-scale systems that demand **agility, scalability, and resilience** — common in enterprise-grade Java and Spring Boot projects.

---

## 🧩 Monolithic vs Microservices

### Monolithic Architecture
A monolithic app is a single, tightly coupled unit — all components (UI, business logic, database) are bundled and deployed together.

**Limitations:**
- Difficult to scale components independently  
- Risk of complete system failure on crash  
- Slow release cycles and long deployments

### Microservices Architecture
Microservices break applications into multiple smaller services.  
Each service:
- Is **independent and deployable**  
- Has its own database  
- Can use **different tech stacks**

```text
Client → API Gateway → Auth Service / Catalog Service / Order Service → Database
````

✅ **Advantages:**

* Easier maintenance and deployment
* Improved scalability
* Better fault isolation
* Independent team ownership

---

## ⚙️ Core Components of a Microservices Architecture

| Component                | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| **API Gateway**          | Entry point for all requests, handles routing and authentication |
| **Service Discovery**    | Automatically locates services (e.g., Eureka Server)             |
| **Configuration Server** | Centralized configuration management                             |
| **Load Balancer**        | Distributes network traffic                                      |
| **Circuit Breaker**      | Prevents cascading failures (e.g., Resilience4J)                 |
| **Monitoring & Logging** | Observes system behavior (e.g., Zipkin, Prometheus)              |

---

## 🧠 Building Microservices with Spring Boot

Spring Boot provides a streamlined way to build and deploy microservices with **Spring Cloud** integrations.

### Example: Simple Microservice Setup

**1. Movie Catalog Service**

```java
@RestController
@RequestMapping("/catalog")
public class MovieCatalogController {

    @GetMapping("/{userId}")
    public List<String> getCatalog(@PathVariable String userId) {
        return List.of("Inception", "Interstellar", "The Dark Knight");
    }
}
```

**2. Application Entry Point**

```java
@SpringBootApplication
public class MovieCatalogApplication {
    public static void main(String[] args) {
        SpringApplication.run(MovieCatalogApplication.class, args);
    }
}
```

**3. Configuration**

```properties
server.port=8081
spring.application.name=movie-catalog-service
```

---

## 🔍 Service Discovery with Eureka

### Eureka Server Setup

```java
@EnableEurekaServer
@SpringBootApplication
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
```

**application.properties**

```properties
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

### Eureka Client Registration

```java
@EnableEurekaClient
@SpringBootApplication
public class RatingsServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(RatingsServiceApplication.class, args);
    }
}
```

---

## 🔄 Inter-Service Communication

### Using `RestTemplate`

```java
@Autowired
private RestTemplate restTemplate;

public Movie getMovieDetails(String movieId) {
    return restTemplate.getForObject("http://movie-data-service/movies/" + movieId, Movie.class);
}
```

### Using `WebClient` (Reactive)

```java
private final WebClient webClient = WebClient.builder().build();

public Mono<Movie> getMovie(String movieId) {
    return webClient.get()
        .uri("http://movie-data-service/movies/{id}", movieId)
        .retrieve()
        .bodyToMono(Movie.class);
}
```

---

## ⚡ Fault Tolerance – Circuit Breaker with Resilience4J

```java
@CircuitBreaker(name = "movieService", fallbackMethod = "fallbackMovie")
public String getMovieDetails(String movieId) {
    return restTemplate.getForObject("http://movie-data-service/movies/" + movieId, String.class);
}

public String fallbackMovie(String movieId, Throwable t) {
    return "Movie information temporarily unavailable";
}
```

**Configuration**

```properties
resilience4j.circuitbreaker.instances.movieService.failure-rate-threshold=50
resilience4j.circuitbreaker.instances.movieService.wait-duration-in-open-state=10s
```

---

## 🧰 Centralized Configuration – Spring Cloud Config

**Config Server**

```java
@EnableConfigServer
@SpringBootApplication
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```

**application.properties**

```properties
server.port=8888
spring.cloud.config.server.git.uri=file:///C:/config-repo
```

**Client Service Config**

```properties
spring.config.import=optional:configserver:http://localhost:8888
```

---

## 📈 Distributed Tracing with Sleuth & Zipkin

Add dependencies:

```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>
```

**application.properties**

```properties
spring.zipkin.base-url=http://localhost:9411/
spring.sleuth.sampler.probability=1.0
```

✅ This automatically adds trace IDs to logs for every request.

---

## ☁️ Deploying Microservices

You can deploy microservices easily using:

* **Docker** for containerization
* **Kubernetes** for orchestration
* **AWS ECS / Azure AKS / GCP GKE** for scalability

**Dockerfile Example**

```dockerfile
FROM openjdk:21-jdk
COPY target/catalog-service.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

---

## 🧱 Best Practices

* Keep services **small and single-purpose**
* Maintain **separate databases** for each microservice
* Use **asynchronous communication** where possible
* Implement **centralized logging and monitoring**
* Secure endpoints with **OAuth2 / Keycloak**

---

## 🏁 Conclusion

Microservices architecture enables building **scalable, maintainable, and resilient** enterprise applications.
Combined with **Spring Boot** and **Spring Cloud**, it provides the perfect ecosystem for developing robust distributed systems in Java.

> “Design for failure, build for scale — that’s the microservices mindset.”

---
 