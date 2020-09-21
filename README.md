# Career Connection - Frontend

## Overview
- Application acts as a recruiting tool for users to browse available jobs by title or company. Users can login, sign up, or, if they've previously visited the site, their information is saved in local storage. Users can search by job or company and apply to relevant jobs. Each user has their own profile they can update and save. All information and actions are collected and saved on the backend (created with Heroku)

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

## State
- State is most used to store information on the current user of the application - primarily managed through context

## Tools and Resources
- react
- react-dom
- react-router-dom
- react-scripts
- json web token
- axios and career-connection-backend
- jest-dom
- bootstrap

