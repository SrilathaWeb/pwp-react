
# ⚙️ Jenkins CI/CD Pipeline

A complete Continuous Integration / Continuous Deployment (CI/CD) setup using [Jenkins](https://www.jenkins.io/).  
This project demonstrates how to automate building, testing, and deploying applications with Jenkins Pipelines.

---

## 🚀 Overview

This repository contains:
- A sample **Jenkinsfile** (Declarative Pipeline)
- Build, test, and deployment automation
- Integration with **GitHub**, **Docker**, and **Kubernetes** (optional)
- Example **Jenkins job configuration**

---

## 🧰 Prerequisites

Make sure you have the following installed or configured:

| Tool | Version | Description |
|------|----------|-------------|
| [Jenkins](https://www.jenkins.io/download/) | 2.3+ | Automation server |
| [Java JDK](https://adoptium.net/) | 11+ | Required by Jenkins |
| [Git](https://git-scm.com/) | latest | Version control |
| [Docker](https://www.docker.com/) | latest | Containerization (optional) |
| [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/) | latest | Build tool (for Java apps) |

---

## 🧩 Jenkinsfile Example

Here’s a minimal **Declarative Pipeline** example:

```groovy
pipeline {
    agent any

    environment {
        APP_NAME = "my-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh './mvnw clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh './mvnw test'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${APP_NAME}:latest")
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying ${APP_NAME}..."
                // e.g., sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
````

---

## 🏗️ Running Jenkins Locally

### 1️⃣ Run Jenkins in Docker

```bash
docker run -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts
```

Access Jenkins at [http://localhost:8080](http://localhost:8080)

---

### 2️⃣ Unlock Jenkins

When first running, Jenkins will show an **Admin Password** in logs:

```bash
docker logs <container_id>
```

Then go to [http://localhost:8080](http://localhost:8080) and paste it.

---

### 3️⃣ Install Recommended Plugins

* Git
* Pipeline
* Docker Pipeline
* Blue Ocean (optional for a modern UI)
* Credentials Binding

---

## 🔐 Credentials Management

Use **Manage Jenkins → Credentials** to securely store:

* GitHub tokens
* Docker Hub credentials
* SSH keys
* Cloud provider access keys

---

## 🧪 Example CI/CD Flow

1. **Push code** to GitHub
2. Jenkins **triggers a pipeline** automatically (via Webhook)
3. **Build & Test** stages run
4. **Docker image** built and pushed
5. **Deployment** triggered to a staging or production environment

---

## 📦 Integrations

| Service           | Purpose                  |
| ----------------- | ------------------------ |
| **GitHub**        | SCM and webhook triggers |
| **Docker Hub**    | Image storage            |
| **Kubernetes**    | Deployment               |
| **Slack / Teams** | Notifications            |
| **SonarQube**     | Code quality checks      |

 