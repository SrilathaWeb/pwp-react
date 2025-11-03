 
# ☕ Java 8 – The Functional Revolution in Java

## 🧭 Introduction
Java 8 (released in March 2014) was one of the most significant releases in the Java platform’s history.  
It introduced **functional programming**, **Stream API**, **Lambda Expressions**, and **Date/Time API**, making Java more expressive, readable, and modern.

> “Java 8 changed the way we write Java code — from imperative to declarative.”

---

## ⚙️ Key Features of Java 8

| Feature | Description                                              |
|----------|----------------------------------------------------------|
| Lambda Expressions | Enable functional programming                            |
| Stream API | Process collections efficiently                          |
| Functional Interfaces | Interfaces with a single abstract method                 |
| Default & Static Methods | Add behavior to interfaces without breaking implementations |
| Optional Class | Avoid NullPointerException                               |
| New Date/Time API | Immutable, thread-safe replacement for java.util.Date    |
| Method References | Shortcuts for lambda expressions                         |
| CompletableFuture | Asynchronous programming                                 |
| Nashorn JavaScript Engine | Run JavaScript within Java applications                  |

---

## 🔹 Lambda Expressions
A **lambda expression** allows you to write inline implementations of functional interfaces.

### 🧱 Syntax:
```java
(parameters) -> expression
````

### 💡 Example:

```java
// Without Lambda
Runnable r1 = new Runnable() {
    public void run() {
        System.out.println("Hello Java 7");
    }
};

// With Lambda
Runnable r2 = () -> System.out.println("Hello Java 8");
r2.run();
```

---

## 🔹 Functional Interfaces

A **Functional Interface** is an interface with exactly one abstract method.
Examples include `Runnable`, `Callable`, `Comparator`, and `Function`.

You can also create your own using the `@FunctionalInterface` annotation.

```java
@FunctionalInterface
interface Calculator {
    int add(int a, int b);
}

public class Test {
    public static void main(String[] args) {
        Calculator sum = (a, b) -> a + b;
        System.out.println("Result: " + sum.add(5, 3));
    }
}
```

---

## 🔹 Method References

Method references make lambda expressions even more concise.

```java
// Lambda
names.forEach(name -> System.out.println(name));

// Method Reference
names.forEach(System.out::println);
```

Types of Method References:

1. **Static Method Reference** → `ClassName::staticMethod`
2. **Instance Method Reference** → `object::instanceMethod`
3. **Constructor Reference** → `ClassName::new`

---

## 🔹 Stream API

Streams provide a **functional way** to process collections of data.
They support operations like **filtering**, **mapping**, and **reducing**.

### Example:

```java
List<String> names = Arrays.asList("John", "Srilatha", "Steve", "Adam");

names.stream()
     .filter(name -> name.startsWith("S"))
     .map(String::toUpperCase)
     .sorted()
     .forEach(System.out::println);
```

### Stream Pipeline

A stream pipeline consists of:

1. **Source** (Collection, Array, etc.)
2. **Intermediate Operations** (filter, map, sorted)
3. **Terminal Operation** (forEach, collect, reduce)

---

## 🔹 Default and Static Methods in Interfaces

Before Java 8, interfaces could not have implementation.
Now you can add **default** and **static** methods.

```java
interface Vehicle {
    default void start() {
        System.out.println("Starting vehicle...");
    }
    static void info() {
        System.out.println("Vehicle Interface");
    }
}

class Car implements Vehicle {
    // can override start() if needed
}

public class Main {
    public static void main(String[] args) {
        new Car().start();
        Vehicle.info();
    }
}
```

---

## 🔹 Optional Class

Introduced to prevent the infamous `NullPointerException`.

```java
Optional<String> name = Optional.ofNullable(null);
System.out.println(name.orElse("Default Name"));
```

### Useful Methods:

* `isPresent()`
* `orElse()`
* `orElseGet()`
* `ifPresent()`

---

## 🔹 New Date and Time API (`java.time`)

Replaces `Date` and `Calendar` with a **clean, immutable** design.

```java
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, 5, 15);
Period age = Period.between(birthday, today);
System.out.println("Age: " + age.getYears());

LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
```

---

## 🔹 Stream Collectors

Collectors convert streams into collections, strings, or aggregated results.

```java
List<String> names = Arrays.asList("Srilatha", "Venu", "Sathvik");

String result = names.stream()
                     .collect(Collectors.joining(", "));
System.out.println(result); // Output: Srilatha, Venu, Sathvik
```

---

## 🔹 Parallel Streams

Use parallel streams to improve performance on large datasets.

```java
IntStream.range(1, 10)
         .parallel()
         .forEach(System.out::println);
```

> ⚠️ Be cautious — parallel streams can cause race conditions if mutable shared data is accessed.

---

## 🔹 CompletableFuture

Used for **asynchronous programming**.

```java
CompletableFuture.supplyAsync(() -> "Hello")
                 .thenApply(s -> s + " World")
                 .thenAccept(System.out::println);
```

---

## 🔹 Stream Reduction Example

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream().reduce(0, Integer::sum);
System.out.println("Sum: " + sum);
```

---

## 🧠 Interview Questions

**Q1:** What is the difference between map() and flatMap()?

* `map()` transforms each element.
* `flatMap()` flattens nested streams (e.g., List<List<T>> → List<T>).

**Q2:** What is the difference between findFirst() and findAny()?

* `findFirst()` returns the first element in encounter order.
* `findAny()` may return any element (useful for parallel streams).

**Q3:** How is Optional better than null checks?
It forces developers to handle missing values explicitly.

---

## 🏁 Conclusion

Java 8 modernized the Java ecosystem by introducing functional programming, making code **cleaner**, **less verbose**, and **more expressive**.

> “After Java 8, Java is no longer just an OOP language — it’s also functional.”

---

## 📘 Official Documentation

- [Oracle Java 8 Documentation](https://docs.oracle.com/javase/8/docs/)
- [Java SE 8 API Specification](https://docs.oracle.com/javase/8/docs/api/)
- [Java Tutorials by Oracle](https://docs.oracle.com/javase/tutorial/java/index.html)

---

## 🧠 Tutorials & Guides

- [Baeldung – Java 8 Features Overview](https://www.baeldung.com/java-8-new-features)
- [GeeksforGeeks – Java 8 Features](https://www.geeksforgeeks.org/java-8-features/)
- [JavaTpoint – Java 8 Tutorial](https://www.javatpoint.com/java-8-features)
- [W3Schools – Java 8 Stream API](https://www.w3schools.com/java/java_stream.asp)

---
