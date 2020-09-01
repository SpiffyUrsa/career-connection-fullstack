import React from 'react'
import SearchForm from './SearchForm'
import JobCardList from './JobCardList'


/**
 * Routes --> Joblist --> {SearchForm, JobCardList}
 * 
 * State
 * 
 * Props
 * 
 */
function JobList(props){

  return(
    <div className='JobList'>
      <SearchForm />
      <JobCardList />
    </div>
  )
}

export default JobList