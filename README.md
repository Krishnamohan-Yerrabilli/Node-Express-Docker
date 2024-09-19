# Node-Express-Docker

This repository contains a basic setup for a **Node.js** application using **Express** and **Docker**. It demonstrates how to containerize a simple Node.js app with Docker, making it easy to deploy and scale.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Commands](#docker-commands)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to create a RESTful API using **Node.js** with **Express** and deploy it using **Docker**. It serves as a starting point for building and deploying scalable applications with minimal setup.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Docker](https://www.docker.com/) (version 20.x or higher)

## Installation

### 1. Clone the repository


```git clone https://github.com/Krishnamohan-Yerrabilli/Node-Express-Docker.git```

```cd Node-Express-Docker```

### 2. Install dependencies

```npm install```

This will install all necessary Node.js packages listed in the package.json file.

### 3. Create an .env file

Create an .env file in the root directory of the project and add any environment variables required by the application. Here is an example of what the .env file might look like:

```PORT=3000```
```DB_HOST=localhost```
```DB_USER=root```
```DB_PASSWORD=password```

Make sure to customize it according to your project's environment needs.

### 4. Build and run the Docker container

```docker-compose up --build```

This command will build the Docker container as per the Dockerfile and start the container using docker-compose.yml. Once the build process is complete, your application should be up and running.

### Usage

After the Docker container is up and running, you can access the application at:

```docker build -t node-express-app```

Feel free to modify the port in the .env file or docker-compose.yml to change the default behavior.

### Docker Commands

Here are some useful Docker commands to manage the container for this project:

Build the Docker image:

```docker build -t node-express-app .```

- Run the Docker container:

```docker run -p 3000:3000 node-express-app```

Stop the Docker container:

```docker-compose down```

Check running containers:

```docker ps```

Remove stopped containers:

  ```  docker rm $(docker ps -a -q)```

### Contributing

Contributions are welcome! If you find any bugs or want to contribute to this project, feel free to open an issue or submit a pull request.
Steps to Contribute:

    - Fork this repository.
    - Create a new branch (git checkout -b feature-branch).
    - Make your changes.
    - Commit your changes (git commit -m 'Add new feature').
    - Push to the branch (git push origin feature-branch).
    - Create a new Pull Request.

### License

This project is licensed under the MIT License. For more details, please refer to the LICENSE file in the repository.



