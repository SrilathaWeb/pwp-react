# 🚀 Java 20 Examples and Features

This document highlights some **Java 20** features with code examples and brief explanations.

---

## 1. Record Patterns (Preview Feature)

Record patterns allow deconstructing record values directly in pattern matching.

```java
record Point(int x, int y) {}

public class RecordPatternDemo {
    public static void main(String[] args) {
        Object obj = new Point(10, 20);

        if (obj instanceof Point(int x, int y)) {
            System.out.println("Point coordinates: " + x + ", " + y);
        }
    }
}
````

**Explanation:**

* `instanceof Point(int x, int y)` pattern-matches and extracts the record components.
* Makes deconstruction cleaner and avoids explicit casting.

---

## 2. Switch Expressions

Switch expressions make `switch` more concise and safe.

```java
public class SwitchExpressionDemo {
    public static void main(String[] args) {
        String day = "SATURDAY";

        String type = switch (day) {
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default -> "Weekday";
        };

        System.out.println(type);
    }
}
```

**Key points:**

* Arrow labels (`->`) remove fall-through issues.
* Can return values directly.

---

## 3. Virtual Threads (Project Loom)

Virtual threads simplify concurrent programming by making lightweight threads.

```java
public class VirtualThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = Thread.ofVirtual().start(() -> {
            System.out.println("Running in a virtual thread!");
        });

        thread.join();
    }
}
```

**Why it matters:**

* Each virtual thread is lightweight and managed by the JVM.
* You can spawn thousands of concurrent tasks easily.

---

## 4. Scoped Values (Preview)

Scoped values (successor to thread-locals) let you safely share immutable data within a call scope.

```java
import java.lang.ScopedValue;

public class ScopedValueDemo {
    static final ScopedValue<String> USER = ScopedValue.newInstance();

    public static void main(String[] args) {
        ScopedValue.where(USER, "Shreyansh").run(() -> {
            System.out.println("Hello, " + USER.get());
        });
    }
}
```

**Highlights:**

* Avoids the pitfalls of thread-locals.
* Ensures clean, structured data sharing.

---

## 🧠 Summary

| Feature            | Description                   |
| ------------------ | ----------------------------- |
| Record Patterns    | Pattern matching for records  |
| Switch Expressions | Simplified, expressive switch |
| Virtual Threads    | Lightweight concurrency       |
| Scoped Values      | Safe scoped data sharing      |

---
 
