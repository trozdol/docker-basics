# Docker Basics

## Todos/Goals:

- Add `.env` files for different environments.
- __database__: initialize mysql database.
- __database__: custom mysql conf.
- __backend__: Customize `./backend/Dockerfile` and update `docker-compose.yml` to reference custom file.
- __gateway__: add a container to act like a gateway. 
- __All__: Setup optional `/etc/hosts` to use to simulate a public web environment

## Quick Start:

- __frontend__: http://127.0.0.1:8080
- __backend__: http://127.0.0.1:3000
- __database__: mysql://127.0.0.1:3306/test

### Start:

    docker compose up

### Stop:

    ctl + c

### Build:

Build and Start

    docker compose up --build

Build Only

    docker compose build

Build Specific Container

    docker compose build frontend
    docker compose build backend
    docker compose build database

Clean and Build

    docker compose down && docker compose up --build
