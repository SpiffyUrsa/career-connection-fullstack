# Career Connection

## Overview
- Application acts as a recruiting tool for users to browse available jobs by title or company. Users can login, sign up, or, if they've previously visited the site, their information is saved in local storage. Users can search by job or company and apply to relevant jobs. Each user has their own profile they can update and save. All information and actions are collected and saved on the backend.

## Component Design
```
App --> {
  Routes --> {
    '/' --> Homepage, 
    '/companies' --> CompanyList --> {SearchForm, {CompanyList --> CompanyCard}},
    '/companies/:handle' --> CompanyDetail --> JobCardList, 
    '/jobs' --> JobList --> {SearchForm, {JobCardList --> JobCard}},
    '/login' --> LoginForm,
    '/signup' --> SignupForm,
    '/profile' --> ProfileForm,
  },
  Navigation}
```

## To run this repo locally:


### Prerequisites:
1. Install Node.js and npm
2. Install PostgreSQL

### Setup
1. Git clone this repo
2. `createdb jobly`

#### Backend
1. `cd backend`
2. `psql jobly < data.sql`
3. `npm install`
4. `npm start` or `nodemon`

#### Frontend
1. `cd frontend` from base directory
2. `npm install`
3. `npm start`

### Running the tests:
1. `npm test` from frontend directory to run frontend tests.
2. `npm test` from backend directory to run backend tests.

## Tech Stack
### Backend
1. Node - Server Runtime Environment
2. Express - Node Web App Framework
3. PostgreSQL - Relational Database
4. JSON Web Tokens - for authentication/authorization
5. bcrypt - for hashing passwords at login/registration
6. jsonshema - data validation in controller

### Frontend

1. React - FE JS Framework
2. React-Router - Library to create single page app
3. axios - http client


Note: This was a pair project at Rithm. The backend and frontend were separate projects. I created a backend
separately (see https://github.com/SpiffyUrsa/jobly-backend), but this particular rendition was focused on building the front end with React. The frontend was
entirely built by my programming partner and I. The backend is optimized code kindly provided 
by Rithm staff.
