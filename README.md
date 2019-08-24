## Problem

The goal of this exercise is to Implement a very basic version of Twitter. 

## Demo

http://simple-tweet.s3-website-ap-southeast-1.amazonaws.com/

## About

This is very basic version of Twitter built with Phoenix and React. 

## Getting started

To run the project locally:

#### Running the Phoenix app

Download dependencies

```
cd api
mix deps.get
```

Edit the database connection config in `/config/dev.exs` or `config/dev.secret.exs`
with your postgres user info if needed

Create and migrate the database

```
mix ecto.create ecto.migrate
```

Start the server

```
mix phoenix.server
```

#### Running the React app

Install [Yarn](https://github.com/yarnpkg/yarn)

Install dependencies

```
cd web
yarn
```

Copy `.env.example` contents into to a new `.env` file

Start the dev server

```
npm start
```
