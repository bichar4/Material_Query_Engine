# material-query-engine

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sun Sep 05 2021 17:17:10 GMT-0500 (Central Daylight Time) using Sails v1.4.4.

<!-- Internally, Sails used [`sails-generate@2.0.3`](https://github.com/balderdashy/sails-generate/tree/v2.0.3/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

### Links used to learn while deploying this app 
+ [nodejs-docker-webapp ](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
+[quickstart-node](https://code.visualstudio.com/docs/containers/quickstart-node)
### Running the docker file 

After installing the latest docker in your system, run the following commands
```
> sudo docker build . -t bichar4/material-query-app
> docker run -p 1337:1337 bichar4/material-query-app
```