# House Share Client

![](https://res.cloudinary.com/khalid-faisal/image/upload/v1661171568/Personal/house-share-listings-page_kqngai.png)

You can preview this site [here](https://house2share.herokuapp.com/). Back-End code [here](https://github.com/Khalid2Faisal/house-share-server).

## Technical implementation details

- For the front end, I used React, Ant design for styling, typescript, apollo client as GraphQL client, react-stripe-js and react-stripe-elements for payments and react-router-dom for routing.

- For the back end, I used NodeJS, Express, Typescript, Stripe for payments, MongoDB as a database, eslint to find problems in my code prior to execution, and GraphQL for better APIs.

- I didn't use Redux or any other state management library, because the GraphQL API made it easy for me to deal with my back end data in my front end app and just request the data fields that I want.

- Using Google Geocoding API, I'm able to take the place name that the user writes in the search box and geocode it, then parse the address components and get the country, administrative and city of that place and use them to filter the database and get the listings that found to be in the same region.

- Stripe for payments is a good choice, reasonable fees, great documentation and community.

- For authentication, I used Google Authentication, the most used way to authenticate users, secure and easy to configure.

## Business Details

- House_Share takes a unique approach toward lodging. Part of the “sharing economy,” House_Share offers you someone’s home as a place to stay instead of a hotel.

- A House_Share user can list different spaces and book unique accommodations anywhere in the world.

- House_Share helps make sharing easy, enjoyable, and safe.

- House_Share does not own properties. It acts as an intermediary between those who want to rent out space and those who are looking for space to rent. Creating an account on House_Share is free, and simple.

- Once a user clicks on a listing, he can see a range of information about that listing, including the size of the space and the number of guests, check-in, and pricing information, a detailed description of the space, house rules, safety features, and availability.

- A user can rent out the extra space in his/her home, or rent out the entire home.

- To become a host, a user must have an account and register a stripe account, then click on "host" in the upper right corner of the page, After that, the user need to create a listing for the space. A listing is a lot like a profile page for the space he/she want to host.

## How to use

Execute [`npm start`]  to bootstrap the app:
