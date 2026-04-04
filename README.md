# Project Name: Adventure booking system devops

## Overview

This project is a full-stack application developed as part of a DevOps-focused implementation. It demonstrates end-to-end software delivery using modern DevOps practices including automation, testing, CI/CD, and cloud deployment.

The system is designed to simulate a real-world application with emphasis on scalability, reliability, and maintainability.

---

## Tech Stack

### Frontend

* React
* Axios

### Backend

* Python (FastAPI)
* RESTful APIs
* Swagger (API documentation)

### Database

* MongoDB

### DevOps & Cloud

* Docker & Docker Compose
* GitHub Actions (CI/CD)
* AWS (EC2 / ALB / S3)
* Nginx

---

## Features

* User and booking management system
* REST API-based communication
* Admin operations with secure access
* End-to-end integration between frontend, backend, and database
* Scalable and containerized architecture

---

## Testing

Testing is implemented to ensure reliability and code quality.

* Backend unit testing using Pytest
* API testing
* Load testing using Locust
* Code coverage tracking

Run backend tests:
pytest

---

## Security

* Secure API endpoints
* Input validation and error handling
* Environment variable management
* Role-based access control (Admin/User)
* Protection against common vulnerabilities

---

## Docker Setup

The entire system is containerized using Docker.

Run the application:
docker-compose up --build

This will start:

* Frontend service
* Backend service
* MongoDB database

---

## CI/CD Pipeline

CI/CD is implemented using GitHub Actions.

Pipeline steps:

1. Code checkout
2. Install dependencies
3. Run backend tests (Pytest)
4. Code quality checks
5. Build Docker images
6. Push images to Docker registry
7. Deploy to AWS environment

---

## AWS Deployment

The application is deployed on AWS infrastructure.

Services used:

* EC2 for application hosting
* Application Load Balancer (ALB)
* S3 for storage (if required)
* IAM for secure access control

Deployment flow:

* Dockerized application deployed on EC2
* ALB routes traffic to backend services
* Environment variables configured securely

---

## Database Setup

MongoDB is used as the primary database.

Local setup:

* Runs via Docker container

Production:

* Can be configured using MongoDB Atlas or AWS-based solution

---

## Monitoring & Logs

* Application logs from backend services
* CI/CD pipeline logs
* Optional integration with AWS CloudWatch

---

## Project Structure

/backend
/frontend
/docker
/.github/workflows

---

## Future Improvements

* Kubernetes-based deployment
* Infrastructure as Code using Terraform
* Advanced monitoring and alerting
* Auto-scaling configuration

---

## Author

Alfiza Malek
Software Developer with 10+ years of experience, currently specializing in DevOps with a focus on CI/CD pipelines, cloud deployment, and infrastructure automation.

---

## Contact
alfizamalek@gmail.com
Available for collaboration and opportunities.
