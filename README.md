# Wgettify [![Build Status](https://app.travis-ci.com/ettorepane/wgettify.svg?branch=master)](https://app.travis-ci.com/ettorepane/wgettify)

Project live on [wgettify.ovh](https://www.wgettify.ovh)

## The target

Wgettify is a webapp used to convert download links (mainly the fancy serving ones like example.com/fileToDownload, without extensions) to be transformed into fast copy wget links.
Also, alongside the first beta, wgettify supports the upload of any file you like, and it gets to you the wgettable links.
Also works with cUrl!

## Why?

That's a great question, i mainly menage my server & services via ssh with my T430, when i need to upload something to the server i want it to be as fast as possible to simply continue to go on with what i'm doing.

### Why not FTP? 

Because logging in requires more time than simply open wgettify and upload my files directly in it!
For relatively small task it is incredibly powerful.

## What about privacy?

Wgettify is a fully client side application, this means that nothing is stored on the host server, exept the file that you upload in the "File" section.
In this case the file is passed directly to tmpfiles.org.
Witch provides the API and the host!
A good thing todo is actually integrating different api services, selectable by the user.
So that if a service is down, or breached, another one can immediately kick in.

# Build your own!

Feel free to take the code and modify it as you wish, based on the MIT license.
If you want to help me and submit a pull request feel free to do it!
Here's a guide on how to deploy a dev server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
