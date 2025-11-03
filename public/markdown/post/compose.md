# Docker Compose and Volumes

## Docker Compose

- **Docker Compose** - an application that allows us to run multiple Docker containers as a single application
- This is how you would launch your capstone to a new Digital Ocean droplet (or other Docker infrastructure)
- generally, it is simpler than its competition
    - Docker Swarm
    - Amazon Elastic Container Service
    - Kubernetes
    - Kubernetes: large scale orchestration with multiple nodes (machines)
    - Docker-Compose: simple orchestration meant to run on one machine
- Docker containers can be networked with each other or with other non-docker servers
    - We can map ports on the parent server to map to individual docker containers
- Docker Volumes - how docker persists data so that containers can be spun up and spun down without losing data
    - https://docs.docker.com/storage/volumes/
## **YAML** - **Y**aml **A**int **M**arkup **L**anguage
- 
- the language that Docker compose configuration files are
  written in
    - `docker-compose.yml`
    - Not Docker specific. Also used elsewhere, like Drupal templating
      **Quick Guide to YAML Syntax**

YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files. Here’s a concise guide to its syntax and structure:

**1. Document Start and End**

- Start a YAML document with three dashes:

```
---
```

- Optionally, end with three dots:

```
...
```


**2. Key-Value Pairs**

- Basic structure uses `key: value` pairs.

```
name: John Doe
age: 30
```

- The colon must be followed by a space.

**3. Indentation**

- Indentation (spaces only, no tabs) denotes hierarchy (nesting).
- Use consistent indentation, typically 2 spaces per level

**4. Lists**

- List items start with a hyphen and a space:

```
fruits:
  - apple
  - banana
  - cherry
```


**5. Nested Structures**

- Combine dictionaries and lists:

```
employees:
  - name: Alice
    role: Developer
    skills:
      - Python
      - JavaScript
  - name: Bob
    role: Designer
```


**6. Comments**

- Use `#` for comments:

```
# This is a comment
key: value  # Inline comment
```


**7. Strings**

- Strings can be unquoted, single-quoted, or double-quoted.
- Quote strings containing special characters or starting with special characters[^1_2][^1_6][^1_8]:

```
key1: value
key2: "value with special characters: @!$"
```


**9. Data Types**

- YAML supports integers, floats, booleans, strings, dates, and nulls:

```
integer: 42
float: 3.14
boolean: true
null_value: null
date: 2025-06-30
```


**Tips:**

- Always validate your YAML with a linter to catch indentation or syntax errors.
- Avoid using tabs; use spaces only for indentation.


## Docker Compose Code Review

- Example repo: https://github.com/dd-fullstack-cohort-42/docker-compose-exampe
- docker-compose.yml
    - contains the link between our backend, frontend, and sql containers
    - volume configuration links our containers ephemeral hard drive to actual hard drive location on our server
- docker-compose-lesson.env
    - Environment variables - Secret configuration we don't want to add to github
    - It is CRITICALLY important to make sure that this is ignored in your .gitignore file.
    - We don't have it this way in this repo because this is an example repo that has no real passwords
    - can find a real .gitignore example with the proper ignore rules in the example capstone
- sql/shopping-list.sql file
    - used to build the database
- sql/Dockerfile
    - automatically runs the shopping-list.sql file on build

## Commands to start and stop docker

- `docker-compose up` - spin up the docker containers indicated in the docker-compose.yml file
- `docker-compose down` - deletes all containers