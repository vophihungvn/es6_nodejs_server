# es6_nodejs_server
Nodejs server write in ES6
# Component

#### Routes
Each request will go here first. **Routes** define method, **middlewares** will be used in each method, and **controllers** which the method is passed.

#### Controllers
In charge of managing input/output from routes. It pass parameter to service to process, then, it output data from Service's results

#### Services
Logical function will process here. Service receives data from controller and 'digest' them, then it return a `Promise` to `resolve` data or `reject` error to controllers. 
Each services extend from **Base Service** `services/base.service.js`. Some reuseable function will be written on **Base Service**
A service can be import by another one

#### Repositories
An adapter between service(process) and model(database). Some re-defined function will be write on **Base Repository** such as `find`, `findAll`, `save`, `update`, `delete`,... These function will be re-written base on the **Model** that we use. We no need to change logic process code (Services)

Each **Repository** must pass their own `Model` in the constructor

#### Models
In this example, i use **Posgres SQL** with the help of **Bookshelf JS**. In practical project, it could be replaced with **MongoDB**, **MySQL** or whatever we want. Each database has their own style to write and use model. **Repositories** will be changed to adapt with **Models**


#### Middleware
Some middleware module will be written here. We can import and be used in **Routes**

#### Libs
This folder contains some shared module that we can use it in any **controllers**, **servies**, **repositories**, **models**
 
### Installation
```bash
npm install
knex migrate:latest # Run migrations
```
