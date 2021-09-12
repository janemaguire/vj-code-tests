# Air Quality in Indian cities

This project displays an interactive map so users can select their city and see it's air quality.
The project uses the Google Maps JavaScript API and es5 JavaScript.

## Running

The project is built using npm and parcel. Run `npm install` and `parcel airquality/src/index.html` to run locally.
If a map does not appear, refresh the page.

## Future improvements

- Fix an issue with my JavaScript sometimes loading before the Google Maps API. This means occasionally the map does not appear on the initial load.
- Display all cities in the json file by creating a reusable function for displaying city markers on the map. lat/lng co-ordinates could be added to the json or created as an Array.
- Remove the cache folder from the repo.
- Display the number of cigarettes using the cigarette icon the corresponding number of times.
