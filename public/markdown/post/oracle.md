 
# 🏛️ Oracle Database Guide

A complete reference and learning guide for **Oracle Database** — from **basics** to **advanced** concepts.  
This document helps developers, DBAs, and learners get started with Oracle SQL, PL/SQL, and database administration.

---

## 📘 Table of Contents

1. [Introduction](#introduction)
2. [Basic Concepts](#basic-concepts)
   - [What is Oracle Database?](#what-is-oracle-database)
   - [Oracle Architecture Overview](#oracle-architecture-overview)
   - [Database Objects](#database-objects)
   - [Basic SQL Commands](#basic-sql-commands)
3. [Intermediate Topics](#intermediate-topics)
   - [Constraints](#constraints)
   - [Joins](#joins)
   - [Views and Synonyms](#views-and-synonyms)
   - [Indexes](#indexes)
   - [Sequences and Triggers](#sequences-and-triggers)
4. [Advanced Topics](#advanced-topics)
   - [PL/SQL Programming](#plsql-programming)
   - [Stored Procedures and Functions](#stored-procedures-and-functions)
   - [Packages](#packages)
   - [Transactions and Cursors](#transactions-and-cursors)
   - [Performance Tuning](#performance-tuning)
   - [Backup & Recovery (RMAN)](#backup--recovery-rman)
   - [User Management and Security](#user-management-and-security)
   - [Oracle Data Pump](#oracle-data-pump)
5. [Administration Commands](#administration-commands)
6. [Resources](#resources)
7. [License](#license)

---

## 🧠 Introduction

**Oracle Database** is a powerful, enterprise-grade relational database management system (RDBMS) developed by **Oracle Corporation**.  
It supports SQL and PL/SQL for data manipulation, and provides advanced scalability, security, and performance optimization features.

---

## 🪶 Basic Concepts

### 🔹 What is Oracle Database?

Oracle Database is a multi-model RDBMS that supports:
- SQL for querying and managing data  
- PL/SQL for procedural programming  
- Advanced features for replication, clustering, and high availability  

### 🔹 Oracle Architecture Overview

| Component | Description |
|------------|-------------|
| **Instance** | The combination of memory and background processes |
| **Database** | The physical files on disk (datafiles, control files, redo logs) |
| **SGA (System Global Area)** | Shared memory region for cache and SQL areas |
| **PGA (Program Global Area)** | Memory allocated per user process |
| **Listener** | Listens for and routes client connections |

---

### 🔹 Database Objects

| Object | Description |
|--------|-------------|
| **Table** | Stores data in rows and columns |
| **View** | Logical representation of data from one or more tables |
| **Index** | Improves query performance |
| **Sequence** | Auto-generates unique numbers |
| **Trigger** | Executes automatically on DML operations |

---

### 🔹 Basic SQL Commands

```sql
-- Create a table
CREATE TABLE employees (
  emp_id NUMBER PRIMARY KEY,
  name VARCHAR2(50),
  salary NUMBER,
  department VARCHAR2(30)
);

-- Insert data
INSERT INTO employees VALUES (1, 'Alice', 5000, 'IT');

-- Retrieve data
SELECT * FROM employees;

-- Update data
UPDATE employees SET salary = 5500 WHERE emp_id = 1;

-- Delete data
DELETE FROM employees WHERE emp_id = 1;
````

---

## ⚙️ Intermediate Topics

### 🔹 Constraints

```sql
CREATE TABLE departments (
  dept_id NUMBER PRIMARY KEY,
  dept_name VARCHAR2(50) UNIQUE NOT NULL
);
```

**Types of Constraints:**

* PRIMARY KEY
* FOREIGN KEY
* UNIQUE
* CHECK
* NOT NULL

---

### 🔹 Joins

```sql
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.department = d.dept_name;
```

**Types:**

* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL OUTER JOIN

---

### 🔹 Views and Synonyms

```sql
-- Create a view
CREATE VIEW emp_it AS
SELECT * FROM employees WHERE department = 'IT';

-- Create a synonym
CREATE SYNONYM emp FOR employees;
```

---

### 🔹 Indexes

```sql
CREATE INDEX idx_emp_name ON employees(name);
```

Indexes improve read performance but may slow down DML operations.

---

### 🔹 Sequences and Triggers

```sql
CREATE SEQUENCE emp_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER emp_id_trigger
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  :NEW.emp_id := emp_seq.NEXTVAL;
END;
```

---

## 🧩 Advanced Topics

### 🔹 PL/SQL Programming

```sql
DECLARE
  v_name VARCHAR2(50);
BEGIN
  SELECT name INTO v_name FROM employees WHERE emp_id = 1;
  DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
END;
```

---

### 🔹 Stored Procedures and Functions

```sql
CREATE OR REPLACE PROCEDURE give_raise(p_id NUMBER, p_amount NUMBER) AS
BEGIN
  UPDATE employees SET salary = salary + p_amount WHERE emp_id = p_id;
END;
/

CREATE OR REPLACE FUNCTION get_salary(p_id NUMBER) RETURN NUMBER AS
  v_salary NUMBER;
BEGIN
  SELECT salary INTO v_salary FROM employees WHERE emp_id = p_id;
  RETURN v_salary;
END;
/
```

---

### 🔹 Packages

```sql
CREATE OR REPLACE PACKAGE emp_pkg AS
  PROCEDURE hire_emp(p_name VARCHAR2, p_salary NUMBER);
END emp_pkg;
/
CREATE OR REPLACE PACKAGE BODY emp_pkg AS
  PROCEDURE hire_emp(p_name VARCHAR2, p_salary NUMBER) AS
  BEGIN
    INSERT INTO employees(name, salary) VALUES (p_name, p_salary);
  END;
END emp_pkg;
/
```

---

### 🔹 Transactions and Cursors

```sql
BEGIN
  SAVEPOINT before_update;
  UPDATE employees SET salary = 6000 WHERE emp_id = 2;
  COMMIT;
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK TO before_update;
END;
```

**Cursors Example:**

```sql
DECLARE
  CURSOR emp_cur IS SELECT name FROM employees;
  v_name employees.name%TYPE;
BEGIN
  OPEN emp_cur;
  LOOP
    FETCH emp_cur INTO v_name;
    EXIT WHEN emp_cur%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_name);
  END LOOP;
  CLOSE emp_cur;
END;
/
```

---

### 🔹 Performance Tuning

* Use **EXPLAIN PLAN** and **AUTOTRACE**
* Optimize queries using **indexes**
* Monitor **AWR (Automatic Workload Repository)** reports
* Use **Materialized Views** for complex queries
* Partition large tables for performance

---

### 🔹 Backup & Recovery (RMAN)

**Backup Example:**

```bash
rman target /
BACKUP DATABASE PLUS ARCHIVELOG;
```

**Restore Example:**

```bash
rman target /
RESTORE DATABASE;
RECOVER DATABASE;
```

---

### 🔹 User Management and Security

```sql
CREATE USER dev IDENTIFIED BY StrongPass123;
GRANT CONNECT, RESOURCE TO dev;
ALTER USER dev QUOTA UNLIMITED ON USERS;
```

---

### 🔹 Oracle Data Pump

**Export Data:**

```bash
expdp system/password DIRECTORY=DATA_PUMP_DIR DUMPFILE=backup.dmp FULL=Y
```

**Import Data:**

```bash
impdp system/password DIRECTORY=DATA_PUMP_DIR DUMPFILE=backup.dmp FULL=Y
```

---

## 🧰 Administration Commands

```bash
# Start Listener
lsnrctl start

# Check Database Status
sqlplus / as sysdba
SELECT status FROM v$instance;

# Start Database
startup;

# Stop Database
shutdown immediate;
```

---

## 📚 Resources

* [Official Oracle Documentation](https://docs.oracle.com/en/database/)
* [Oracle SQL Developer](https://www.oracle.com/database/sqldeveloper/)
* [Oracle Learning Library](https://apexapps.oracle.com/pls/apex/f?p=44785:1)
* [Oracle Live SQL](https://livesql.oracle.com/)
 