# Yelp-Clone
Yelp Clone app made using React,Hasura and Graph QL. 

### Contribution Guide
All PRs should be directed to Development branch which will eventually be merged into Main branch. Take a look at [here](./CONTRIBUTING.md) to start contributing.

### How to install this project on your local machine
This project uses React,Postgre SQL, Hasura and Apollo. So first fork & clone the repository to your local machine.

Use Yarn as your default package manager to install new dependencies instead of npm. It might create conflicts due to different package managers being used. 

`cd yelp-clone` to the folder where this project is cloned, and run `yarn install` to install all local dependencies. 

`yarn start` is used to start the project, and it locates to `localhost:3000` by default.

All other scripts used in this project can be found at [package.json](./package.json).

# How to setup Hasura and GraphQL
I am using Postgres SQL being managed in a Hasura environment. So the instance is available at Hasura. </br>
The GraphQL endpoint used is `https://lasting-shad-69.hasura.app/v1beta1/graphql`. Do consider mailing me in order to get access to the console.</br>
And the project is hosted at Heroku sourcing from the main branch.
