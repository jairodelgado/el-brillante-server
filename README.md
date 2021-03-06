# El Brillante

This is a project developed in Sequelize, Express, React and NodeJS. The
application allows to manage a Jewlery bussiness.

## Requirements

In order to run this application you will need a working installation of:

- NodeJS v.8.10.0 or higher
- NPM v.3.5.2 or higher

## Build

To build this application simply run:

`npm install`

Before you continue to the next step, you should provide database connection
information. You will need to update the file `config/config.json`.

**Note:** By default we are using a MySQL database, in addition you can use PostgreSQL
and several others of your choice. Read Sequelize documentation for more information.

**Note:** You don't need to modify your database schema, the application is responsible
of creating everithing from scratch. You should provide an empty database.

## Test
In order to populate the database with some initial information, please run the following
command:

`npx sequelize-cli db:seed:all`

## Run

To run the application you can use:

`npm start`

Application will be running in `http://localhost:3000`.

