 
# Java 8 → 20 : New Features Overview

> A comprehensive summary of the most important new features introduced in Java versions 8 through 20.

---

## ☕ Java 8 (March 2014)

### 🔹 Major Features
- **Lambda Expressions** – Introduced functional programming syntax.
- **Streams API** – Process collections with a functional style.
- **Optional Class** – Avoid NullPointerException.
- **Date and Time API (java.time)** – Modern date/time handling.
- **Default & Static Methods in Interfaces** – Add behavior without breaking implementations.
- **Nashorn JavaScript Engine** – Run JS in JVM (removed in later versions).
- **Parallel Arrays and Streams** – Simplified parallel computing.

### 🧩 Example: Lambda & Stream
````java
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .filter(n -> n.startsWith("A"))
     .forEach(System.out::println);
````

---

## 🧱 Java 9 (September 2017)

### 🔹 Major Features

* **Module System (Project Jigsaw)** – Modularized JDK and user code.
* **JShell** – Interactive REPL for Java.
* **Private Methods in Interfaces**.
* **Improved Stream API** – takeWhile, dropWhile, iterate.
* **Factory Methods for Collections** – List.of(), Set.of(), Map.of().

### 🧩 Example

```java
var list = List.of("A", "B", "C");
list.forEach(System.out::println);
```

---

## 🧰 Java 10 (March 2018)

### 🔹 Major Features

* **Local Variable Type Inference** – var keyword.
* **Application Class-Data Sharing** – Faster startup.
* **Parallel Full GC for G1** – Improved performance.
* **Container Awareness** – Better behavior in Docker/Kubernetes.

### 🧩 Example

```java
var name = "Java";
System.out.println(name);
```

---

## ⚙️ Java 11 (September 2018)

### 🔹 Major Features

* **HTTP Client (Standardized)** – New java.net.http API.
* **String Methods** – isBlank(), lines(), strip(), repeat().
* **Lambda var Parameters**.
* **Single-file Source Execution** – Run .java files directly.
* **Removed**: Java EE modules, CORBA, etc.

### 🧩 Example

```java
HttpClient client = HttpClient.newHttpClient();
HttpRequest req = HttpRequest.newBuilder(URI.create("https://example.com")).build();
HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
```

---

## 🧮 Java 12 (March 2019)

### 🔹 Major Features

* **Switch Expressions (Preview)** – Return values from switch.
* **Shenandoah GC** – Low-pause garbage collector.
* **Compact Number Formatting** – e.g., 1K, 1M.

### 🧩 Example

```java
String result = switch (day) {
    case "MON", "TUE" -> "Weekday";
    case "SAT", "SUN" -> "Weekend";
    default -> "Invalid";
};
```

---

## 🧠 Java 13 (September 2019)

### 🔹 Major Features

* **Text Blocks (Preview)** – Multi-line strings.
* **Switch Expression (Standardized)** – Finalized from preview.
* **Dynamic CDS Archives** – Performance improvement.

### 🧩 Example

```java
String html = """
    <html>
        <body>Hello Java 13</body>
    </html>
    """;
```

---

## 📜 Java 14 (March 2020)

### 🔹 Major Features

* **Records (Preview)** – Compact immutable data carriers.
* **Pattern Matching for `instanceof` (Preview)**.
* **Helpful NullPointerExceptions**.
* **Switch Expressions (Finalized)**.

### 🧩 Example

```java
record Point(int x, int y) {}
Point p = new Point(1, 2);
System.out.println(p.x());
```

---

## 🧩 Java 15 (September 2020)

### 🔹 Major Features

* **Sealed Classes (Preview)** – Control subclassing.
* **Text Blocks (Finalized)**.
* **Hidden Classes** – Used for frameworks.
* **Removed Nashorn JS Engine**.

### 🧩 Example

```java
sealed class Shape permits Circle, Square {}
final class Circle extends Shape {}
final class Square extends Shape {}
```

---

## 🧬 Java 16 (March 2021)

### 🔹 Major Features

* **Records (Finalized)**.
* **Pattern Matching for `instanceof` (Finalized)**.
* **Vector API (Incubator)** – SIMD operations.
* **JEP 338: Unix-Domain Socket Channels**.

---

## 🧭 Java 17 (September 2021) – **LTS**

### 🔹 Major Features

* **Sealed Classes (Finalized)**.
* **Pattern Matching for Switch (Preview)**.
* **New macOS Rendering Pipeline (Metal)**.
* **Strong Encapsulation of JDK Internals**.
* **Removed**: RMI Activation, Applet API.

### 🧩 Example

```java
if (obj instanceof String s && s.length() > 5) {
    System.out.println(s.toUpperCase());
}
```

---

## 🧪 Java 18 (March 2022)

### 🔹 Major Features

* **Simple Web Server** – For testing and prototyping.
* **UTF-8 as Default Charset**.
* **Code Snippets in Javadoc**.

### 🧩 Example

```bash
$ jwebserver
Serving HTTP on 0.0.0.0 port 8000
```

---

## ⚗️ Java 19 (September 2022)

### 🔹 Major Features

* **Virtual Threads (Preview)** – Lightweight concurrency.
* **Record Patterns (Preview)**.
* **Pattern Matching for Switch (2nd Preview)**.
* **Foreign Function & Memory API (Preview)** – Interact with native code.

### 🧩 Example

```java
Thread.startVirtualThread(() -> System.out.println("Hello from virtual thread!"));
```

---

## 🚀 Java 20 (March 2023)

### 🔹 Major Features

* **Record Patterns (2nd Preview)**.
* **Pattern Matching for Switch (4th Preview)**.
* **Scoped Values (Incubator)** – Safer thread-local replacement.
* **Foreign Function & Memory API (2nd Preview)**.

---

## 🏁 Summary of Evolution

| Version      | Key Highlights                                     |
| ------------ | -------------------------------------------------- |
| **8**        | Lambdas, Streams, Date-Time API                    |
| **9**        | Modules, JShell                                    |
| **10**       | var, Container Awareness                           |
| **11**       | HTTP Client, New String APIs                       |
| **12–13**    | Switch Expressions, Text Blocks                    |
| **14–16**    | Records, Pattern Matching                          |
| **17 (LTS)** | Sealed Classes, Strong Encapsulation               |
| **18–20**    | Virtual Threads, Record Patterns, Foreign Memory API |
 