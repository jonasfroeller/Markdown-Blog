---
title: Docker Commands
description: A list of the most important docker-commands
date: '2023-5-28'
categories:
  - virtualization
published: true
---

## Most Important

### Management

- `docker create <image_name>`: Creates a new container from an image.
- `docker build`: Builds a Docker image from a Dockerfile.
  - `-t <image_name>`: Assigns a name and optional version to the created image.
  - `-f <path_to_dockerfile>`: Specifies the path to the Dockerfile if it's not in the current directory.
  - To exclude files, create a `.dockerignore` file.

<br>

- `docker run <image:version>`: Starts a container from an image.
  - `-d`: Runs the container in the background.
  - `-p <host_port>:<container_port>`: Maps a host port to a container port.
  - `--name <name>`: Assigns a name to the container.
  - `-v <host_path>:<container_path>`: Maps a host directory to a container directory.
- `docker stop <container_id>`: Stops a running container.
- `docker restart <container_name_or_id>`: Restarts a stopped container.

<br>

- `docker rmi <image_name>`: Removes an image.
- `docker rm <container_id>`: Removes a stopped container.
- `docker rename <old_name> <new_name>`: Renames a container.

### Docker Hub

- `docker pull <image_name:version>`: Downloads an image from a registry.
- `docker push <image_name:version>`: Publishes a Docker image to a registry.
- `docker login`: Logs in to a Docker registry account.
- `docker logout`: Logs out of a Docker registry account.

### Docker Info

- `docker info`: Displays information about the Docker system.

<br>

- `docker images`: Lists the available images.
- `docker image inspect <image_name>`: Displays detailed information about an image.

<br>

- `docker ps`: Lists the active containers.
  - `-a`: Lists all containers, including stopped ones.
- `docker container inspect <container_id>`: Displays detailed information about a container.
- `docker logs <container_id>`: Displays the logs of a container.

### Host to Container

- `docker cp <container_id>:<container_path> <host_path>`: Copies files between the host and container.
- `docker exec <container_id> <command>`: Executes a command within a running container.

- `docker network create <network_name>`: Creates a new network with the specified name.
- `docker volume create <volume_name>`: Creates a new volume with the specified name.

### docker-compose.yml (orchestrate containers)

- `docker-compose up`: Starts the application
  - `-d`: Runs the containers in the background
  - `--build`: Forces the build of images before starting the containers
- `docker-compose down`: Stops and removes the application
- `docker-compose ps`: Shows the status of the containers in the application
- `docker-compose exec <service_name> <command>`: Executes a command inside a service container
- `docker-compose logs <service_name>`: Displays the logs of a service container

**Example of a 'docker-compose.yml' file:**

```yml
version: '3.9'

services:
  web:
    container_name: nginx-web
    image: nginx:latest
    ports:
      - 80:80
    volumes:
      - ./html:/usr/share/nginx/html
    networks:
      - frontend

  app:
    container_name: my-app
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 5000:5000
    depends_on:
      - db
    environment:
      - ENV_VAR=example
    volumes:
      - ./app:/app
    networks:
      - frontend
      - backend

  db:
    container_name: mysql-db
    image: mysql:latest
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=secret
      - MYSQL_DATABASE=mydb
    volumes:
      - ./db_data:/var/lib/mysql
    networks:
      - backend

networks:
  frontend:
  backend:
```

### Dockerfile (building custom image)

`FROM`: Defines the base image on which the new image is built.
`RUN`: Executes a command to install packages or run commands inside the container.
`COPY` or `ADD`: Copies files or directories from the host into the container.
`WORKDIR`: Sets the working directory for subsequent instructions in the Dockerfile.
`EXPOSE`: Declares the port on which the container will listen for external communication.
`CMD`: Specifies the default command to be executed when starting a container.
`ENTRYPOINT`: Defines the executable command that is always executed when the container starts.
`ENV`: Sets environment variables within the container.
`VOLUME`: Declares one or more volumes to be used by the container.
`LABEL`: Adds metadata to an image.

**Example of a 'Dockerfile' file:**

```docker
# Define the base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Set environment variables
ENV ENV_VAR=example

# Expose a port
EXPOSE 8000

# Set the default command
CMD ["python", "app.py"]

# Add metadata labels
LABEL maintainer="Your Name <your.email@example.com>"
LABEL version="1.0"
LABEL description="My Dockerized App"

# Define a volume
VOLUME /data
```

## All Docker CLI Commands (A-Z)

<details>
<summary>show commands</summary>

| Command    | Description                                                                   |
|------------|-------------------------------------------------------------------------------|
| attach     | Attach local standard input, output, and error streams to a running container |
| build      | Build an image from a Dockerfile                                              |
| builder    | Manage builds                                                                 |
| checkpoint | Manage checkpoints                                                            |
| commit     | Create a new image from a container’s changes                                 |
| config     | Manage Swarm configs                                                          |
| container  | Manage containers                                                             |
| context    | Manage contexts                                                               |
| cp         | Copy files/folders between a container and the local filesystem               |
| create     | Create a new container                                                        |
| diff       | Inspect changes to files or directories on a container’s filesystem           |
| events     | Get real time events from the server                                          |
| exec       | Execute a command in a running container                                      |
| export     | Export a container’s filesystem as a tar archive                              |
| history    | Show the history of an image                                                  |
| image      | Manage images                                                                 |
| images     | List images                                                                   |
| import     | Import the contents from a tarball to create a filesystem image               |
| info       | Display system-wide information                                               |
| inspect    | Return low-level information on Docker objects                                |
| kill       | Kill one or more running containers                                           |
| load       | Load an image from a tar archive or STDIN                                     |
| login      | Log in to a registry                                                          |
| logout     | Log out from a registry                                                       |
| logs       | Fetch the logs of a container                                                 |
| manifest   | Manage Docker image manifests and manifest lists                              |
| network    | Manage networks                                                               |
| node       | Manage Swarm nodes                                                            |
| pause      | Pause all processes within one or more containers                             |
| plugin     | Manage plugins                                                                |
| port       | List port mappings or a specific mapping for the container                    |
| ps         | List containers                                                               |
| pull       | Download an image from a registry                                             |
| push       | Upload an image to a registry                                                 |
| rename     | Rename a container                                                            |
| restart    | Restart one or more containers                                                |
| rm         | Remove one or more containers                                                 |
| rmi        | Remove one or more images                                                     |
| run        | Create and run a new container from an image                                  |
| save       | Save one or more images to a tar archive (streamed to STDOUT by default)      |
| search     | Search Docker Hub for images                                                  |
| secret     | Manage Swarm secrets                                                          |
| service    | Manage Swarm services                                                         |
| stack      | Manage Swarm stacks                                                           |
| start      | Start one or more stopped containers                                          |
| stats      | Display a live stream of container(s) resource usage statistics               |
| stop       | Stop one or more running containers                                           |
| swarm      | Manage Swarm                                                                  |
| system     | Manage Docker                                                                 |
| tag        | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE                         |
| top        | Display the running processes of a container                                  |
| trust      | Manage trust on Docker images                                                 |
| unpause    | Unpause all processes within one or more containers                           |
| update     | Update configuration of one or more containers                                |
| version    | Show the Docker version information                                           |
| volume     | Manage volumes                                                                |
| wait       | Block until one or more containers stop, then print their exit codes          |

</details>

## Sources

**Markdown table-generation**: <https://www.tablesgenerator.com/markdown_tables>  
**Docker CLI commands**: <https://docs.docker.com/engine/reference/commandline/cli/>
