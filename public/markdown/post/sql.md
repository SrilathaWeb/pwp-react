
# 🧮 SQL Guide

A complete guide to Structured Query Language (**SQL**) — the standard language used to interact with relational databases such as MySQL, PostgreSQL, SQL Server, and SQLite.

---

## 🚀 What is SQL?

**SQL (Structured Query Language)** is used to:
- Create and manage databases
- Insert, read, update, and delete data (CRUD)
- Define relationships between tables
- Enforce data integrity

---

## ⚙️ Basic SQL Syntax

```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 ASC;
````

SQL keywords are **case-insensitive**, but commonly written in uppercase for clarity.

---

## 🧱 Database and Table Creation

### Create a Database

```sql
CREATE DATABASE school_db;
```

### Use a Database

```sql
USE school_db;
```

### Create a Table

```sql
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  age INT CHECK (age > 0),
  grade CHAR(1),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Drop a Table

```sql
DROP TABLE students;
```

---

## 🧩 CRUD Operations

### Insert Data

```sql
INSERT INTO students (name, age, grade)
VALUES ('Alice', 14, 'A'),
       ('Bob', 15, 'B');
```

### Read Data

```sql
SELECT * FROM students;
SELECT name, grade FROM students WHERE age > 14;
```

### Update Data

```sql
UPDATE students
SET grade = 'A'
WHERE name = 'Bob';
```

### Delete Data

```sql
DELETE FROM students
WHERE name = 'Alice';
```

---

## 🔍 Filtering Data

### WHERE Clause

```sql
SELECT * FROM students WHERE grade = 'A';
```

### AND / OR / NOT

```sql
SELECT * FROM students WHERE age > 14 AND grade = 'A';
SELECT * FROM students WHERE NOT grade = 'C';
```

### IN, BETWEEN, LIKE

```sql
SELECT * FROM students WHERE grade IN ('A', 'B');
SELECT * FROM students WHERE age BETWEEN 10 AND 16;
SELECT * FROM students WHERE name LIKE 'A%';  -- starts with A
```

---

## 📊 Sorting & Limiting

### ORDER BY

```sql
SELECT * FROM students ORDER BY age DESC;
```

### LIMIT

```sql
SELECT * FROM students LIMIT 3;
```

---

## 🧮 Aggregate Functions

| Function  | Description    |
| --------- | -------------- |
| COUNT() | Number of rows |
| AVG()   | Average value  |
| SUM()   | Total value    |
| MIN()   | Minimum value  |
| MAX()   | Maximum value  |

```sql
SELECT COUNT(*) FROM students;
SELECT AVG(age) AS average_age FROM students;
```

---

## 🧠 GROUP BY & HAVING

```sql
SELECT grade, COUNT(*) AS total_students
FROM students
GROUP BY grade
HAVING COUNT(*) > 1;
```

---

## 🔗 JOINS (Combining Tables)

### Inner Join

```sql
SELECT students.name, courses.course_name
FROM students
JOIN courses ON students.id = courses.student_id;
```

### Left Join

```sql
SELECT s.name, c.course_name
FROM students s
LEFT JOIN courses c ON s.id = c.student_id;
```

### Right Join

```sql
SELECT s.name, c.course_name
FROM students s
RIGHT JOIN courses c ON s.id = c.student_id;
```

### Full Join (if supported)

```sql
SELECT s.name, c.course_name
FROM students s
FULL OUTER JOIN courses c ON s.id = c.student_id;
```

---

## 🧾 Table Relationships

### One-to-Many Example

```sql
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_name VARCHAR(100),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

---

## 🔑 Keys

| Type              | Description                                       |
| ----------------- | ------------------------------------------------- |
| **Primary Key**   | Unique identifier for a record                    |
| **Foreign Key**   | Links records between tables                      |
| **Composite Key** | Combination of two or more columns as primary key |
| **Unique Key**    | Ensures all values in a column are unique         |

---

## ⚙️ Constraints

| Constraint    | Description                      |
| ------------- | -------------------------------- |
| NOT NULL    | Prevents NULL values             |
| UNIQUE      | Ensures all values are different |
| CHECK       | Validates condition              |
| DEFAULT     | Sets a default value             |
| PRIMARY KEY | Unique + Not Null                |
| FOREIGN KEY | References another table         |

Example:

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  salary DECIMAL(10,2) DEFAULT 3000,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(id)
);
```

---

## 📈 Indexes

Indexes speed up queries on large datasets.

```sql
CREATE INDEX idx_student_name ON students(name);
DROP INDEX idx_student_name ON students;
```

---

## 🧮 Subqueries

```sql
SELECT name
FROM students
WHERE age > (SELECT AVG(age) FROM students);
```

---

## 🧰 Views

A **view** is a virtual table based on the result of a query.

```sql
CREATE VIEW top_students AS
SELECT name, grade FROM students WHERE grade = 'A';
SELECT * FROM top_students;
DROP VIEW top_students;
```

---

## 🔁 Transactions

Ensure data consistency with transactions.

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- or ROLLBACK;
```

---

## 🔒 User Management (MySQL Example)

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'password';
GRANT SELECT, INSERT, UPDATE ON school_db.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

---

## 🧠 Common SQL Interview Queries

1️⃣ Find 2nd highest salary:

```sql
SELECT MAX(salary) FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

2️⃣ Count employees per department:

```sql
SELECT dept_id, COUNT(*) FROM employees GROUP BY dept_id;
```

3️⃣ Find duplicates:

```sql
SELECT name, COUNT(*) FROM students GROUP BY name HAVING COUNT(*) > 1;
```

---

## 🧰 Best Practices

✅ Always use WHERE with DELETE and UPDATE
✅ Use **indexes** wisely (not on every column)
✅ Normalize data but denormalize for performance when needed
✅ Use **transactions** for multiple operations
✅ Avoid SELECT * in production queries
✅ Regularly back up your database

---

## 🧠 Advanced Topics

* **Stored Procedures**
* **Triggers**
* **Functions**
* **CTEs (Common Table Expressions)**
* **Window Functions (OVER, PARTITION BY)**

Example (CTE):

```sql
WITH avg_age AS (
  SELECT AVG(age) AS avgAge FROM students
)
SELECT * FROM students WHERE age > (SELECT avgAge FROM avg_age);
```

---

## 📚 References

* [MySQL Documentation](https://dev.mysql.com/doc/)
* [PostgreSQL Documentation](https://www.postgresql.org/docs/)
* [SQLite Docs](https://sqlite.org/docs.html)
* [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
* [LeetCode SQL Problems](https://leetcode.com/problemset/database/)

---

## ✅ Summary

| Concept      | Command Example               |
| ------------ | ----------------------------- |
| Create Table | CREATE TABLE                |
| Insert Data  | INSERT INTO                 |
| Select Data  | SELECT ... FROM ... WHERE   |
| Update Data  | UPDATE ... SET ...          |
| Delete Data  | DELETE FROM                 |
| Join Tables  | INNER JOIN, LEFT JOIN     |
| Group Data   | GROUP BY, HAVING          |
| Create View  | CREATE VIEW                 |
| Transactions | BEGIN, COMMIT, ROLLBACK |
 