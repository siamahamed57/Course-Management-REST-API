# Advanced Programming in Web Technology

## Lab Tasks 01 – 04 (NestJS + TypeORM + PostgreSQL)

---

## Prepared By

**MD IBRAHIM KHALIL**
Student, Advanced Programming in Web Technology
Section - A


---

## Overview

This repository contains the implementation of Lab Tasks 01 to 04 for the course **Advanced Programming in Web Technology**.
The labs focus on building backend applications using NestJS with proper architecture, validation, dependency injection, and database integration.

---

# Lab Task 01: Course Management REST API (NestJS)

## Description

This task implements a basic REST API using NestJS following proper architecture:

* Module → Controller → Service
* No business logic inside the Controller

## Features

* GET all courses
* GET course by ID
* POST create course
* PUT update full course
* PATCH update partial course
* DELETE course

## Architecture

```
Controller → Handles request/response  
Service → Business logic  
Module → Organizes components  
```

## Project Structure

```
src/
 └── course/
     ├── course.module.ts
     ├── course.controller.ts
     └── course.service.ts
```

## Run Project

```bash
npm install
npm run start:dev
```

---

# Lab Task 02: Validation, DTOs & File Upload

## Description

This task extends Lab Task 01 by adding:

* DTO validation
* Pipes
* File upload functionality

## Features

* Input validation using class-validator
* DTO-based request structure
* Global ValidationPipe
* File upload using Multer
* File type restriction (.jpg, .png, .pdf)
* Maximum file size: 2MB

## Structure

```
course/
 ├── dto/
 │   ├── create-course.dto.ts
 │   └── update-course.dto.ts
```

## Key Concepts

* DTO (Data Transfer Object)
* ValidationPipe
* PartialType
* FileInterceptor

## Example Response

```json
{
  "message": "Course created successfully",
  "data": {
    "name": "NestJS",
    "code": "CS101"
  }
}
```

---

# Lab Task 03: Dependency Injection (DI)

## Description

This task demonstrates different types of Dependency Injection in NestJS.

## Types of DI

* Intra-Module: Within the same module
* Inter-Module: Between different modules
* Circular Dependency: Mutual dependency between services

## Modules

* CourseModule
* EnrollmentModule
* NotificationModule

## Features

### Intra-Module

* CourseController uses CourseService

### Inter-Module

* EnrollmentService uses CourseService

### Circular Dependency

* EnrollmentService and NotificationService depend on each other
* Resolved using forwardRef()

## Key Concepts

* @Injectable()
* @Inject()
* forwardRef()
* exports[] and imports[]

---

# Lab Task 04: Product Inventory API

(TypeORM + PostgreSQL)

## Description

This task implements a full CRUD API using:

* TypeORM
* PostgreSQL
* DTO validation

## Features

* Create product
* Get all products
* Get product by ID
* Update (PATCH)
* Replace (PUT)
* Delete product
* Search by name
* Filter by category
* Toggle active status

## Entity Structure

```
Products
 ├── id
 ├── name
 ├── description
 ├── price
 ├── stock
 ├── category
 ├── isActive
 ├── createdAt
 └── updatedAt
```

## Example API

### Create Product

POST /products

### Get All Products

GET /products

### Search

GET /products/search?keyword=phone

---

## Tech Stack

* NestJS
* TypeORM
* PostgreSQL
* class-validator
* class-transformer

---

## Important Rules

* No business logic inside Controller
* All logic must be inside Service
* DTO must be used for validation
* Use Repository for database operations
* Use ParseIntPipe for ID conversion
* Use NotFoundException for missing data

---

## Testing

All endpoints were tested using Postman:

* Valid requests return 200/201
* Invalid requests return 400
* Not found returns 404

---

## Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run start:dev
```

---

## Conclusion

These lab tasks demonstrate:

* REST API development
* Input validation and DTO usage
* Dependency Injection in NestJS
* Database integration using TypeORM and PostgreSQL

This repository represents a complete backend development workflow using NestJS.
