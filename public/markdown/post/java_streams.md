 
# ☕ Java Streams API — Complete Guide

A comprehensive guide to **Java Streams API**, introduced in **Java 8**, that helps developers perform **functional-style operations** on collections and data sequences.

---

## 🧩 Overview

### 🔹 What is a Stream?
A **Stream** in Java represents a sequence of elements supporting sequential and parallel aggregate operations.  

It allows you to:
- Filter, transform, and collect data efficiently
- Write **declarative**, **functional**, and **concise** code
- Process data **without modifying** the source collection

---

## ⚙️ Importing Streams

Streams are part of the `java.util.stream` package.

```java
import java.util.stream.*;
import java.util.*;
````

---

## 🏗️ Stream Creation

### 1️⃣ From a Collection

```java
List<String> names = List.of("Alice", "Bob", "Charlie");
Stream<String> stream = names.stream();
```

### 2️⃣ From an Array

```java
String[] array = {"Java", "Python", "C++"};
Stream<String> stream = Arrays.stream(array);
```

### 3️⃣ From Static Factory Methods

```java
Stream<Integer> numbers = Stream.of(1, 2, 3, 4, 5);
```

### 4️⃣ Infinite Streams (Using `iterate()` or `generate()`)

```java
Stream<Integer> infinite = Stream.iterate(0, n -> n + 1).limit(10);
Stream<Double> randoms = Stream.generate(Math::random).limit(5);
```

---

## 🔧 Stream Pipeline

A stream pipeline has **three parts**:

| Stage                   | Description           | Example                             |
| ----------------------- | --------------------- | ----------------------------------- |
| Source                  | Data source           | List, Set, Array, File      |
| Intermediate Operations | Transform/filter data | filter(), map(), sorted()     |
| Terminal Operation      | Produces a result     | collect(), forEach(), count() |

### Example:

```java
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
```

---

## 🔍 Intermediate Operations

| Operation    | Description              | Example                      |
| ------------ | ------------------------ | ---------------------------- |
| filter()   | Filters elements         | .filter(n -> n > 10)       |
| map()      | Transforms each element  | .map(String::length)       |
| flatMap()  | Flattens nested streams  | .flatMap(List::stream)     |
| distinct() | Removes duplicates       | .distinct()                |
| sorted()   | Sorts elements           | .sorted()                  |
| limit(n)   | Limits elements          | .limit(5)                  |
| skip(n)    | Skips first n elements | .skip(2)                   |
| peek()     | Debug or inspect data    | .peek(System.out::println) |

---

## 🏁 Terminal Operations

| Operation                                   | Description                        | Example                         |
| ------------------------------------------- | ---------------------------------- | ------------------------------- |
| forEach()                                 | Iterates through elements          | .forEach(System.out::println) |
| collect()                                 | Collects results into a collection | .collect(Collectors.toList()) |
| count()                                   | Counts elements                    | .count()                      |
| reduce()                                  | Reduces elements to one value      | .reduce(0, Integer::sum)      |
| anyMatch() / allMatch() / noneMatch() | Tests conditions                   | .anyMatch(x -> x > 10)        |
| findFirst() / findAny()                 | Retrieves an element               | .findFirst().get()            |

---

## 🧮 Collectors API

The Collectors utility class provides methods for collecting stream results.

### 1️⃣ To List / Set / Map

```java
List<String> list = stream.collect(Collectors.toList());
Set<String> set = stream.collect(Collectors.toSet());
Map<Integer, String> map = employees.stream()
    .collect(Collectors.toMap(Employee::getId, Employee::getName));
```

### 2️⃣ Grouping

```java
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

### 3️⃣ Counting & Summing

```java
long count = stream.collect(Collectors.counting());
int sum = stream.collect(Collectors.summingInt(Employee::getSalary));
```

### 4️⃣ Joining Strings

```java
String namesJoined = names.stream()
    .collect(Collectors.joining(", ", "[", "]"));
```

---

## 🔁 Reduction (reduce)

```java
int sum = Stream.of(1, 2, 3, 4, 5)
    .reduce(0, Integer::sum);
```

Example with custom logic:

```java
String concatenated = Stream.of("Java", "Stream", "API")
    .reduce("", (a, b) -> a + " " + b);
```

---

## 🧠 Map vs FlatMap

| Feature | map()              | flatMap()      |
| ------- | ------------------ | -------------- |
| Input   | One element        | Nested structure |
| Output  | Stream of same level | Flattened Stream |

### Example:

```java
List<List<Integer>> list = List.of(List.of(1, 2), List.of(3, 4));
list.stream()
    .flatMap(Collection::stream)
    .forEach(System.out::println);
```

---

## ⚡ Parallel Streams

Use `parallelStream()` to enable multi-threaded stream processing.

```java
List<Integer> numbers = List.of(1,2,3,4,5,6,7,8,9);
numbers.parallelStream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);
```

> ⚠️ Use parallel streams only when thread safety and order do not matter.

---

## 🧩 Optional & Streams

Combine `Optional` and Streams for safe null handling.

```java
Optional<String> name = Optional.ofNullable("Alice");
name.stream()
    .map(String::toUpperCase)
    .forEach(System.out::println);
```

---

## 🧾 Example: Stream Operations in Practice

```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(2, 3, 5, 7, 11, 13, 17, 19);

        List<Integer> squares = numbers.stream()
            .filter(n -> n % 2 != 0)
            .map(n -> n * n)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Squares of odd numbers: " + squares);
    }
}
```

---

## 🧠 Common Interview Questions

### 1️⃣ What is the difference between `map()` and `flatMap()`?

→ `map()` transforms each element, `flatMap()` flattens nested structures.

### 2️⃣ Can a Stream be reused?

→ ❌ No, streams can be consumed only once.

### 3️⃣ Difference between `Collection` and `Stream`?

| Feature     | Collection  | Stream             |
| ----------- | ----------- | ------------------ |
| Storage     | Stores data | Doesn’t store data |
| Iteration   | External    | Internal           |
| Reusability | Reusable    | One-time use       |

### 4️⃣ How to convert a Stream to an array?

```java
String[] arr = names.stream().toArray(String[]::new);
```

---

## 🧰 Stream Tips & Best Practices

✅ Use **method references** where possible:

```java
.map(String::toUpperCase)
```

✅ Avoid modifying mutable state inside a stream
✅ Chain operations fluently for readability
✅ Use **Collectors.groupingBy()** and **partitioningBy()** for grouping data
✅ Avoid parallel streams for small datasets
✅ Always close **IO-based streams** (e.g., file streams)

---

## 📚 Real-World Use Case: Employee Data

```java
List<Employee> employees = Arrays.asList(
    new Employee(1, "Alice", "HR", 4000),
    new Employee(2, "Bob", "IT", 6000),
    new Employee(3, "Charlie", "IT", 7000),
    new Employee(4, "David", "Finance", 5500)
);

// 1️⃣ Names of IT employees sorted by salary
List<String> itNames = employees.stream()
    .filter(e -> e.getDepartment().equals("IT"))
    .sorted(Comparator.comparing(Employee::getSalary).reversed())
    .map(Employee::getName)
    .collect(Collectors.toList());

// 2️⃣ Average salary per department
Map<String, Double> avgSalary = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.averagingDouble(Employee::getSalary)));

System.out.println(itNames);
System.out.println(avgSalary);
```

---

## 🧮 Performance Notes

* Streams use **lazy evaluation** — operations are executed only when a terminal operation runs.
* Use **parallel streams** for CPU-heavy tasks on large data sets.
* Minimize chaining too many operations — can impact readability and performance.

---

## 📚 References

* [Java Stream API Docs](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html)
* [Baeldung — Java 8 Streams Tutorial](https://www.baeldung.com/java-8-streams)
* [Oracle Java Tutorial](https://docs.oracle.com/javase/tutorial/collections/streams/)

---

## 🧠 Summary

| Concept       | Example                         |
| ------------- | ------------------------------- |
| Create Stream | Stream.of(1,2,3)              |
| Filter        | .filter(x -> x > 10)          |
| Map           | .map(String::toUpperCase)     |
| Collect       | .collect(Collectors.toList()) |
| Reduce        | .reduce(0, Integer::sum)      |
| Parallel      | .parallelStream()             |
 
