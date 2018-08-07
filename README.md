Christmas Market Neighborhood Map
===============================

# Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Run the Application](#run-the-application)
* [React Components Tree](#react-components-tree)
* [Dependencies](#dependencies)

## Description

Final Project created as part of the Udacity Front-End Developer Nanodegree.

It will be made from scratch using `creat-react-app` to bootstrap the project. The map is rendered using a set of components with `react-google-maps` and some informations are powered by Foursquare.

## Project Instructions

In this project, the goal is to build a single page application featuring a map of a local area and add functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

## Run the Application

In order to run the application follow these steps:

* Download as .zip file or clone this project:

    ```
    $ git clone https://github.com/stearruda/christmas-market-neighborhood-map.git
    ```

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

__Note about Service Worker__
`Create React App`, by default, includes a service worker. To enable it you must run the application in production build mode. 

    ```
    npm run build
    ```

Run `npm run build` to create a build version of the app that correctly bundles React in production mode and optimizes the build for the best performance. It will cache the site and visited pages will be rendered when there is no network access.

## React Components Tree

```
<App />
  <Header />

  <LocationList />

  <MyMap />
    <GoogleMap />
		  <MapMarker />
		    <Marker />
		    	<InfoWindow />
```

## Dependencies

### Packages

* [`creat-react-app`](https://github.com/facebookincubator/create-react-app)
* [`react-google-maps`](https://www.npmjs.com/package/create-react-app)

### API

* [Foursquare API](https://developer.foursquare.com/)
* [Google Maps API](https://cloud.google.com/maps-platform/)

### Design

* [Google Fonts](https://fonts.google.com/)
* [Icons8](https://icons8.com/)
* [Toptal Subtle Pattern](https://www.toptal.com/designers/subtlepatterns/)
