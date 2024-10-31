# kittl-task2

This project is a Node.js-based testing setup using Playwright for end-to-end testing, fully containerized with Docker. Follow the steps below to clone, build, and run the tests in a Docker container.

### **Prerequisites**

- Docker is installed in your machine.
- Git is installed to clone the repository.

### **Step 1: Clone the repository**

- Clone this repository in your local machine.
- git clone https://github.com/mohsin924ali/kittl-task.git
- Go to the root directory

### **Step 2: Build the Docker Image**

- Build the docker image for the project by running the following command:
- docker build -t playwright-docker .

### **Step 3: Run Playwright Test**

- Run Playwright test inside Docker container.
- docker run --rm playwright-docker
