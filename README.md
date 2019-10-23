## Problem

The goal of this exercise is to Implement a very basic version of Twitter. 

## Points to consider

- [x] User can create a tweet on this page.
- [x] For the purpose of this exercise, the tweet will contain just 140 characters long string. 
- [x] Not necessary to implement authentication or any user management. Every tweet is anonymous.
- [x] Any tweet can be retweeted. 
- [x] As you land on this page, you should display top 10 tweets. (Ordering is based on the number of retweets the original tweet gets) 
- [ ] For the purpose of this exercise, the data can be maintained in memory. 

## Demo

http://simple-tweet.lytrungtin.com/

## Stack

Back end:
- Elixir on Phoenix is deployed on Heroku.

Frontend:
- React JS is deployed on Digitalocean.

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
yarn start
```
