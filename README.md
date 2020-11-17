# Review-Blocks
Live subscription and review based app made using React and Graph QL.

## Features
Has real time review uploading and live reload using Apollo websockets and GraphQL mutations.


### Contribution Guide
All PRs should be directed to Development branch which will eventually be merged into Main branch. Take a look at [here](./CONTRIBUTING.md) to start contributing.

### How to install this project on your local machine
This project uses React,Postgre SQL, Hasura and Apollo. So first fork & clone the repository to your local machine.

Use Yarn as your default package manager to install new dependencies instead of npm. It might create conflicts due to different package managers being used. 

`cd review-blocks` to the folder where this project is cloned, and run `yarn install` to install all local dependencies. 

`yarn start` is used to start the project, and it locates to `localhost:3000` by default.

All other scripts used in this project can be found at [package.json](./package.json).

# How to setup Hasura and GraphQL
I am using Postgres SQL being managed in a Hasura environment. So the instance is available at Hasura. </br>
The GraphQL endpoint used is `https://review-blocks.hasura.app/v1/graphql`. Do consider mailing me in order to get access to the console.</br>
And the project is hosted at Heroku sourcing from the development branch.

## Live Preview
The application is hosted at `yellowcreek.herokuapp.com` with automatic CI from the deployment branch.

## Further Developments 
<li>
    1.Add authentication to the application. [Refer this](https://www.youtube.com/watch?v=kHCLQEKjdnI&feature=emb_rel_pause)
    2.Add styling using React Js.
    3. Spam protection
    4. Prevent cross browser script attacks
</li>
