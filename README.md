# Final-project

** How to use this project! **

--------------------------------------

# Contents

1. Introduction
2. Database setup and queries
3. Backend setup
4. Frontend setup

--------------------------------------

1. Introduction to the project.

* Welcome to my final project!

- This project is based of off a made up cosmetics company that sells shampoo and conditioners. This is a full idea of how I would approach a fullstack e-commerce website for such company. 

- This project contains multiple features and functionalities including;
 * Home page
 * Product page
 * About page
 * Admin Dashboard (For Admin accounts only)
 * Functional Signup and Login page
 * AI Chatbot for Hair care tips (Powered by OpenAI)
 * Seamless design and Animation
 * and many more.

--------------------------------------

2. Database setup and queries

- 2.1 Database setup

- 1 - In pgAdmin, create a database named MesArg_Database
- 2 - create 3 tables using the queries below;

- 2.2 Database Queries

- 1 - user_auth

- 'CREATE TABLE user_auth (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL);'

- 2 - product    

- 'CREATE TABLE products (
    user_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_image VARCHAR(255) NOT NULL,
    product_price INT NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL);'

- 'INSERT INTO products (product_name, product_image, product_price, product_description, created_at) VALUES (
    'Conditioner',
    '../src/assets/images/product-img/conditioner.png',
    2200,
    'Hair conditioner consisting of high natural ingredients to strengthen your hair, colour correct and enhance your scalp',
    NOW());'

- 'INSERT INTO products (product_name, product_image, product_price, product_description, created_at) VALUES (
    'Shampoo',
    '../src/assets/images/product-img/shampoo.png',
    2200,
    'Hair shampoo consisting of best cleaning natural ingredients to remove scalp damaging bacteria and strengthen hair promoting faster and healthier hair growth',
    NOW());'

- 3 - newsletter_subscribtion

- 'CREATE TABLE newsletter_subscribtion (subscriber_id SERIAL PRIMARY KEY, subscriber_name VARCHAR(255) NOT NULL, subscriber_email  VARCHAR(255) NOT NULL UNIQUE, subscribed_at TIMESTAMP)'

* NOTE: Make sure you create a .env to connect your db to the project

--------------------------------------

3. Backend setup

- 1 - Go to the terminal
- 2 - enter 'cd server' to go into the server folder
- 3 - enter this code 'npm install' to install all dependancies
- 4 - then run this code; 'node server.js' or 'nodemon server.js' to start the server

--------------------------------------

4. Frontend setup

- 1 - Open a new terminal
- 2 - enter 'cd client' to go into the client folder
- 3 - enter 'npm install' to install all dependencies for the project
- 4 - enter 'npm run dev' to run on one device and 'npm run dev -- --host' to host globally across any device in the same network.

* EXTRA: For using the AI Chatbot you will have to create a .env file in the frontend folder (client folder) and configure your openAI account with the project and adjust the code accordingly.


