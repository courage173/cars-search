[![Build Status](https://travis-ci.com/courage173/cars-search.svg?branch=main)](https://travis-ci.org/courage173/team-work)
# Orbiseed test
This project provides a search api to search through a list of cars based on search criterias e.g make of the car, model of the car, minimum year, maximum year, minimum price and maximum price

## Running the project


* Run using Docker Compose [**Recommended Method**] 
    * Make a copy of **env.example** file to **.env**.
    * Execute `docker-compose up` in terminal from the repo directory.
    * You will be able to access the api from http://localhost:3003/v1/api
    * *If having any issue* then make sure 3003 port is not occupied else provide a different port in **.env** file.
    * visit http://localhost:3003/v1/api/docs to view a live documentation with swagger ui
 * Run The Tests
    * From the root of the project executes in terminal `npm install`.
    * To run the tests execute `npm test`.
 * Run Without Docker [**2nd Method**]
    * From the root of the project executes in terminal `npm install`.
    * You can run this project in two ways
         * Execute `npm run dev` to run the project during active development. this is to enable hot reload.
        * Execute `npm start` from the terminal to build and run the project.
    * You will be able to access the API from http://localhost:3003/v1/api
    * visit http://localhost:3003/v1/api/docs to view a live documentation with swagger ui

    
 
