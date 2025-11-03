
# ☁️ AWS (Amazon Web Services) Guide

A concise overview of **AWS** — core services, setup instructions, and practical examples.

---

## 🧩 What is AWS?

**Amazon Web Services (AWS)** is a cloud computing platform that provides on-demand infrastructure and services such as:
- 🖥️ Compute (EC2, Lambda)
- 💾 Storage (S3, EBS)
- 🗄️ Databases (RDS, DynamoDB)
- 🌐 Networking (VPC, Route 53)
- 🔒 Security & IAM

---

## 🧰 Prerequisites

- AWS Account → [https://aws.amazon.com](https://aws.amazon.com)
- IAM user with proper permissions
- AWS CLI installed

### Install AWS CLI

**Windows / macOS / Linux:**
```bash
pip install awscli --upgrade --user
````

Verify installation:

```bash
aws --version
```

### Configure AWS CLI

```bash
aws configure
```

Provide:

* AWS Access Key ID
* AWS Secret Access Key
* Default region name (e.g., `us-east-1`)
* Default output format (`json`)

---

## ⚙️ Identity and Access Management (IAM)

IAM helps control access to AWS resources.

### Create a new IAM user

1. Go to **IAM Console** → **Users** → **Add user**
2. Assign permissions via group or policy (e.g., `AmazonS3FullAccess`)
3. Download `.csv` credentials for CLI use

**Example Policy (Read-only S3):**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::mybucket/*"]
    }
  ]
}
```

---

## 🪣 Amazon S3 (Simple Storage Service)

S3 is used for storing and retrieving files.

### Create a Bucket

```bash
aws s3 mb s3://my-demo-bucket
```

### Upload a File

```bash
aws s3 cp file.txt s3://my-demo-bucket/
```

### List Files

```bash
aws s3 ls s3://my-demo-bucket/
```

### Make File Public

```bash
aws s3api put-object-acl --bucket my-demo-bucket --key file.txt --acl public-read
```

---

## 💻 Amazon EC2 (Elastic Compute Cloud)

EC2 provides scalable virtual machines.

### Launch an EC2 Instance (CLI Example)

```bash
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t2.micro \
  --key-name my-key \
  --security-group-ids sg-0123456789abcdef0
```

### Connect via SSH

```bash
ssh -i my-key.pem ec2-user@<public-ip>
```

### Stop / Start Instances

```bash
aws ec2 stop-instances --instance-ids i-0123456789abcdef0
aws ec2 start-instances --instance-ids i-0123456789abcdef0
```

---

## ⚡ AWS Lambda (Serverless Functions)

Lambda runs code without provisioning servers.

### Create a Simple Function

**Handler (Python):**

```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from AWS Lambda!'
    }
```

**Deploy via CLI:**

```bash
aws lambda create-function \
  --function-name helloLambda \
  --runtime python3.9 \
  --role arn:aws:iam::123456789012:role/lambda-execution-role \
  --handler lambda_function.lambda_handler \
  --zip-file fileb://function.zip
```

Invoke function:

```bash
aws lambda invoke --function-name helloLambda output.json
```

---

## 🧠 Amazon RDS (Relational Database Service)

RDS manages relational databases (MySQL, PostgreSQL, etc.)

**Create a PostgreSQL Instance:**

```bash
aws rds create-db-instance \
  --db-instance-identifier mydbinstance \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --allocated-storage 20 \
  --master-username admin \
  --master-user-password MySecretPass123
```

---

## 🌍 Amazon VPC (Virtual Private Cloud)

VPC lets you control your own network in the AWS cloud.

Basic steps:

1. Create a **VPC**
2. Add **Subnets** (public/private)
3. Attach **Internet Gateway**
4. Set up **Route Tables**
5. Launch instances within the VPC

---

## 📦 AWS CloudFormation

Infrastructure as Code (IaC) for provisioning AWS resources.

**Example Template (`s3-template.yaml`):**

```yaml
Resources:
  DemoBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-demo-bucket
```

**Deploy Template:**

```bash
aws cloudformation deploy \
  --template-file s3-template.yaml \
  --stack-name demo-stack
```

---

## 🧩 AWS CLI Cheatsheet

| Task               | Command                                            |
| ------------------ | -------------------------------------------------- |
| List S3 buckets    | `aws s3 ls`                                        |
| List EC2 instances | `aws ec2 describe-instances`                       |
| Invoke Lambda      | `aws lambda invoke --function-name my-fn out.json` |
| Create key pair    | `aws ec2 create-key-pair --key-name mykey`         |
| Describe IAM users | `aws iam list-users`                               |

---

## 🔐 Security Best Practices

* Use **IAM roles**, not root credentials.
* Enable **MFA** (Multi-Factor Authentication).
* Rotate access keys regularly.
* Apply **least privilege** principle.
* Encrypt sensitive data (KMS, SSE-S3).

---

## 📚 References

* [AWS Documentation](https://docs.aws.amazon.com/)
* [AWS CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/)
* [AWS Pricing Calculator](https://calculator.aws/#/)
* [AWS Free Tier](https://aws.amazon.com/free/)
 