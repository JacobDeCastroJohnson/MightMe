# Mighty Me: README

> Project description

  PRESS RELEASE: https://github.com/JacobDeCastroJohnson/MightMe/blob/master/_PRESS-RELEASE.md

![Alt text](/screenshots/ATeamShot2.jpg?raw=true "A-Team")

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

  To get the application, run http://localhost:3000/

<!-- ## Server API

### GET all reviews for specific room
 * GET `/api/rooms/:roomId/reviews`

Path Parameters:
  * `roomId` Room ID

Success Status Code: `200`

Returns: JSON
```json
[
  {
  "user_id": "Number",
  "username": "String",
  "image": "String",
  "review_id": "id Number",
  "dateNum": "DATE",
  "description": "String",
  "roomNum": "Number",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "valueRating": "Number",
  "total_rating": "Number",
  }
]
```

### GET all reviews for a single user
 * GET `/api/users/:userId/reviews`

Path Parameters:
  * `userId` user ID

Success Status Code:`200`

Returns: JSON
```json
[
  {
  "user_id": "Number",
  "username": "String",
  "image": "String",
  "review_id": "id Number",
  "dateNum": "DATE",
  "description": "String",
  "roomNum": "Number",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "valueRating": "Number",
  "total_rating": "Number",
  }
]
```

### POST new user review to a specific room
 * POST `/api/rooms/:roomId/reviews`

Path Parameters:
  * `roomId` Room ID

Success Status Code: `201`

Request Body: Expects JSON with the following keys.

```json
  {
  "username": "String",
  "image": "String",
  "dateNum": "DATE",
  "description": "String",
  "roomNum": "Number",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "valueRating": "Number",
  "total_rating": "Number",
  }
```

### UPDATE one review from a specific room
 * PATCH `/api/rooms/:roomId/reviews/:reviewId`

Path Parameters:
  * `roomId` Room ID
  * `reviewId` Review ID

Success Status Code:`204`

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
  "dateNum": "DATE",
  "description": "String",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "valueRating": "Number",
  "total_rating": "Number",
  }
```

### DELETE reviews from a specific room
* DELETE `/api/rooms/:roomId/reviews/:reviewId`

Path Parameters:
  * `roomId` Room ID
  * `reviewId` Review ID

Success Status Code: `204` -->

## Requirements

- Node 6.13.0 or `10.15.3`
- NPM 6.14.8 or `6.4.1`
- MongoDB `4.2.8`

## Development

### Installing Dependencies

From within the root directory:

- To install dependencies: `npm install`

### Running the application

- To run Dev Environment/ Webpack: `npm run react-dev`
- To run Server: `npm run server-dev`