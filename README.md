UPDATE
===

I have been told that this no longer works!  I no longer use AWS/Lambda so for now the best I can do is link to an [alternate solution](https://stackoverflow.com/a/56843029/2282538).  

PRs are welcome to get this working again.



lambda-node-phantom
===

A simple ~working~ example of running PhantomJS on AWS Lambda via NodeJS
---

This repository contains a complete, working example of running a simple PhantomJS script on AWS Lambda through a NodeJS child process.

First, clone this repository (or download the zip).  Next, [compress the contents of the folder](http://stackoverflow.com/a/34640743/2282538), and upload the zip file to an AWS Lambda function.

The PhantomJS binary is included in this repository, but if you would like to download it yourself you can get it from the [PhantomJS Bitbucket Page](https://bitbucket.org/ariya/phantomjs/downloads); download `phantomjs-1.9.8-linux-x86_64.tar.bz2`.
