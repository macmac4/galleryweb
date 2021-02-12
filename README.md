# Photo Album sites.
> WebAlbum is a service that allows you to store photos, add comments, group photos by categories. <br />
> I like to use a new solutions like "UseState", "useEffect" hooks and "function components" were used to build the application.

## Table of contents
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Branche](#branche)
* [Demo example](#demo-example)
* [Contact](#contact)

## Screenshots
![Example screenshot](./public/screenshot.png)

## Technologies
* [ReactJS](https://reactjs.org/) - JavaScript library for creating user interfaces (ver. 17.0.1)
* [React-Route](https://reactrouter.com/) - routing support (ver. 5.2.0)
* [FireBase](https://console.firebase.google.com) - api functionaly to store data
* [Bootstrap](https://getbootstrap.com/) - styling template (ver. 5.0)

## Setup
Project requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm run start
```

For production environments...
```sh
$ the same as above but last commend run
$ npm run build
```

## Demo Example
Link to show examples of usage: https://albumweb-reactjs.web.app/

## Branche
I'm using metodology Gitflow.

* master - main branch, protected, merge only by authorized persons, production builds
* dev - development branch, all changes for testing, test builds go to it
* the remaining branches contain smaller modules or changes that need to be committed before merging into the test version

## Status
Project is: _in progress_ <br /><br />
**Task TODO for near feauture:**
* register panel - signup 
* login panel - login
* creating category by user
* add comments only by logged user
* integrate with socials
## Contact
Created by [maciasbuczynski@gmail.com](https://macmac4.github.io/portfolio/) - feel free to contact me!