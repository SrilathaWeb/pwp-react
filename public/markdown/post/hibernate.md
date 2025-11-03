 
# Hibernate ORM – Mastering Java Persistence

## 🧭 Introduction
**Hibernate** is a powerful **Object-Relational Mapping (ORM)** framework for Java.  
It simplifies database interactions by mapping Java classes to relational database tables.

Instead of writing repetitive SQL queries, developers can work with Java objects — and Hibernate automatically handles the CRUD operations behind the scenes.

---

## ⚙️ What is ORM?
ORM (Object Relational Mapping) is a programming technique for converting data between **incompatible systems** (Java objects and relational databases).

| Concept | Java | Database |
|----------|-------|-----------|
| Entity | Class | Table |
| Field | Property | Column |
| Object | Instance | Row |

**Without ORM:**
```java
PreparedStatement ps = connection.prepareStatement("SELECT * FROM users WHERE id=?");
````

**With ORM (Hibernate):**

```java
User user = session.get(User.class, id);
```

---

## 🏗️ Hibernate Architecture

Hibernate architecture consists of several layers and components:

1. **Configuration** – Reads configuration details from `hibernate.cfg.xml`
2. **SessionFactory** – Creates and manages sessions
3. **Session** – A single-threaded unit of work (represents a connection to DB)
4. **Transaction** – Manages commit and rollback
5. **Query** – Used to perform database operations (HQL, Criteria, Native SQL)

```text
Application
   ↓
SessionFactory → Session → Transaction → Database
```

---

## 🧰 Setting Up Hibernate in Spring Boot

### 1. Dependencies (Maven)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

### 2. Configuration (application.properties)

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employees
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### 3. Entity Class

```java
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private Double salary;

    // Getters and setters
}
```

### 4. Repository Layer

```java
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByDepartment(String department);
}
```

### 5. Controller

```java
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @PostMapping
    public Employee saveEmployee(@RequestBody Employee emp) {
        return repository.save(emp);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }
}
```

---

## 🔍 Hibernate Annotations Overview

| Annotation                              | Description                         |
| --------------------------------------- | ----------------------------------- |
| `@Entity`                               | Marks a class as an entity          |
| `@Table`                                | Defines the table name              |
| `@Id`                                   | Primary key identifier              |
| `@GeneratedValue`                       | Auto-generate primary key           |
| `@Column`                               | Maps class field to database column |
| `@Transient`                            | Ignores field (not saved to DB)     |
| `@OneToOne`, `@OneToMany`, `@ManyToOne` | Relationship mappings               |

---

## 💡 Example: One-to-Many Relationship

**Employee → Projects**

```java
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private List<Project> projects;
}
```

```java
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String projectName;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
}
```

---

## 🧠 Hibernate Query Language (HQL)

HQL is similar to SQL but works with **Java entity names and properties**.

```java
// Fetch all employees
Query query = session.createQuery("from Employee");
List<Employee> employees = query.list();

// Fetch with condition
Query query = session.createQuery("from Employee e where e.department = :dept");
query.setParameter("dept", "IT");
List<Employee> itEmployees = query.list();
```

---

## ⚡ Caching in Hibernate

| Type                   | Description                         |
| ---------------------- | ----------------------------------- |
| **First-Level Cache**  | Enabled by default (per session)    |
| **Second-Level Cache** | Shared cache (e.g., EhCache, Redis) |

Example enabling second-level cache:

```properties
spring.jpa.properties.hibernate.cache.use_second_level_cache=true
spring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.ehcache.EhCacheRegionFactory
```

---

## 🚀 Hibernate Lifecycle

1. **Transient** – Object not associated with session
2. **Persistent** – Object associated with session and DB
3. **Detached** – Session closed, object still in memory
4. **Removed** – Object marked for deletion

```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

Employee emp = new Employee("John", "IT", 60000.0);
session.save(emp); // Persistent

tx.commit();
session.close(); // Detached
```

---

## 🧩 Common Hibernate Interview Questions

**Q1. What is the difference between `get()` and `load()`?**

* `get()` returns `null` if object not found.
* `load()` throws `ObjectNotFoundException`.

**Q2. What is lazy loading?**
Hibernate loads related entities only when they’re accessed — improves performance.

**Q3. What is the N+1 problem?**
When fetching a list of entities causes N additional queries for related data.
✅ Solution: Use `@Fetch(FetchMode.JOIN)` or `fetch = FetchType.EAGER`.

---

## 🔐 Transactions and Concurrency

Transactions ensure **atomicity** and **consistency** in DB operations.

```java
@Transactional
public void updateSalary(Long id, Double newSalary) {
    Employee emp = repository.findById(id).orElseThrow();
    emp.setSalary(newSalary);
}
```

---

## 🏁 Conclusion

Hibernate eliminates most of the boilerplate JDBC code and provides a cleaner way to interact with relational databases.
With **Spring Boot JPA**, it integrates seamlessly into enterprise-grade microservices and full-stack applications.

> "Write Java classes, not SQL queries – let Hibernate handle persistence."

 