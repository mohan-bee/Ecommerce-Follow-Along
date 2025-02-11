# E-Commerce Application

This is a full-stack e-commerce web application built with **Node.js**, **Express**, **MongoDB**, **JWT**, and **React**. The application provides an online shopping experience where users can browse products, add them to the cart, place orders, and manage their profiles. Admin users can manage products, view orders, and handle user data securely.

---

## Project Overview

The **E-Commerce Application** is designed to simulate the key functionalities of a modern online store. Users can view products, add them to their cart, and place orders. Authentication and authorization are handled via **JWT tokens**, ensuring secure user sessions. The project is divided into a **backend** powered by **Node.js** and **Express** for handling API requests, and a **frontend** built with **React** for a dynamic, user-friendly interface.

Key features include:

- **User Authentication**: Users can register, log in, and access their profile securely using JWT-based authentication.
- **Product Management**: Admins can add, update, and delete products from the catalog. Users can browse and view products by category, price, and other criteria.
- **Shopping Cart**: Users can add products to their cart, modify quantities, and remove items before placing an order.
- **Order Management**: Users can view their order history and track the status of orders. Admins can manage orders, including marking them as fulfilled or canceled.
- **Admin Dashboard**: Admin users have access to a dashboard where they can manage products, orders, and users.

---

## Key Features

- **User Authentication**:

  - Secure login and registration using JWT tokens for user authentication.
  - User profile management, including password updates.

- **Product Management**:

  - Users can view and filter products by category, price, and ratings.
  - Admin users can add, update, or delete products.

- **Shopping Cart**:

  - Add products to the cart, update quantities, and proceed to checkout.
  - Real-time updates to cart total, including taxes and shipping costs.

- **Order Management**:

  - Place orders and view order details.
  - Admins can view all orders, update their statuses, and track progress.

- **Admin Dashboard**:
  - Access to an administrative dashboard for managing users, products, and orders.

---

## Tech Stack

- **Frontend**:

  - **React**: A JavaScript library for building user interfaces.
  - **React Router**: For routing between different pages.
  - **Axios**: For making API requests from the frontend to the backend.

- **Backend**:

  - **Node.js**: JavaScript runtime for building the server.
  - **Express**: Web framework for Node.js to handle routing and middleware.
  - **MongoDB**: NoSQL database to store user data, products, and orders.
  - **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
  - **JWT (JSON Web Token)**: For securing user authentication and authorization.

- **Authentication**:
  - **JWT (JSON Web Token)**: Used for secure login, registration, and token-based authentication.
- **Styling**:
  - **CSS** (for basic styling).

---

This **E-Commerce Application** provides essential features for an online store, including secure user authentication, dynamic product management, and a seamless shopping experience for users and admins alike. It’s built using modern tools and technologies to ensure scalability and maintainability.

## Milestone 1

- Create a new repository and integrated with vs-code
- added a Readme.md about the project
- This is basically a ecommerce project where user can make purchases

## Milestone 2

- Organized the project into separate folders for the frontend and backend to ensure a clear separation of concerns and ease of development.
- Initialized the frontend application using React with Vite for a faster and more optimized development experience.
- Designed and implemented a basic login page for the application. Utilized Basic css not Tailwindcss

## Milestone 3

Environment Setup: Initialized the backend and installed all required dependencies.
Server Implementation: Developed server functionality using Express and incorporated an error handler for robust exception management.
Database Integration: Established a successful connection to the database using Mongoose.

## Milestone 4

User Model: Created a basic user model with necessary feilds
User Controller: Created a POST method for '/sign-up' route and implemented the User Creation
Multer: Configured Multer's designation and filename and make uploads folder access available.

## Milestone 5

SignUp Implementation: Created a Basic Sign up page using react and made a post request using axios to the backend
Styling: Styled the Signup.jsx using Basic Css with the help of styled components

## Milestone 6 & 7

Encryption: Encrypted the Password in userController.js and stored in the Database using bcryptjs
Decryption: Using the compare function in bcrypt, Compared the actual password with the hashed password

## Milestone 8

**Styling**: Create A Reusuable Card Component using React with the basic css
**Reusuable**: Reused the Card Components for n times in the Card Container

## Milestone 9

**Form**: Created A Basic Product Form using Basic CSS in React and made to form to handle multiple images
**Backend**: Created a Basic Product Model and Routes for Creating, Updating and Deleting using express router , Handled all the images using multer and saved in uploads folder for future use.

## Milestone 10

**Schema Creation**: Created a Structured Product Schema with necessary fields and data types \
**Endpoint Creation**: Created Enought endpoints to make operation with the Product data \
**Endpoints**:

POST `/api/products`\
GET `/api/products`\
GET `/api/products/:id`\
PUT `/api/products/:id`\


**Data from Server**: Created an GET request to send data from the mongodb to the client\
**Dynamically Displaying**: Receiving the Data from the frontend using axios and displaying card dynamically.

## Milestone 12

**Backend**: I created an API endpoint in Node.js with Express to fetch products from MongoDB based on the logged-in user's email.\
**Frontend**: I wrote a function to retrieve this data and dynamically display it using the existing product card component.

## Milestone 13

**Backend**: Already create a endpoint to update the product details.\
**Frontend**: Added Edit button on clicking the edit button it will redirect to a form with details filled automatically using location from `react-router-dom` made a put request to PUT `/api/products/:id` this endpoint.


