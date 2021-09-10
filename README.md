# Material Query Engine

# Overview 

This project is a simple material query based on ["The Materials Project"](https://materialsproject.org) which is an open-access database offering material properties. The material project has exposed its api and this project simply uses this api to create a material query engine.   

This application is build on [sails.js](https://sailsjs.com/) MVC framework  which is build on top of nodejs. For template engine, ejs has been used.

Type the material formula on the query box and it shows the detail 
### Live Demo
https://material-query-app.herokuapp.com/

### Dependencies 
 - Node v16.8.0
 - npm v7.21.0
 - sails v1.4.
 

### Running the docker file 

After installing the latest docker in your system, run the following commands
```
> git clone https://github.com/bichar4/Material_Query_Engine.git
> Genrate api keys from https://materialsproject.org/open
> Copy and paste your keys at config/custom.js 'apiKey' field
> sudo docker build . -t bichar4/material-query-app
> docker run -p 1337:1337 bichar4/material-query-app
```