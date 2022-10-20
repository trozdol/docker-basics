# Docker Basics

## Quick Start:

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
    

- __frontend__: http://localhost:8080
- __backend__: http://localhost:3000
- __database__: mysql://localhost:3306
