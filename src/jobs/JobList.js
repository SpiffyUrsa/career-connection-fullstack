import React, { useState, useEffect } from 'react'
import SearchForm from '../common/SearchForm'
import JobCardList from './JobCardList'
import JoblyApi from '../api/api.js'


/**
 * Renders all jobs
 * 
 * Routes --> Joblist --> {SearchForm, JobCardList}
 * 
 * State
 * 
 * Props
 * 
 */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function populateJobs() {
    search();
  }, []);
  
  function search(searchTerm) {
    setIsLoading(true)
    async function handlePopulate() {
      try {
        const jobsResult = await JoblyApi.getJobs(searchTerm);
        setJobs(jobsResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error('Error Finding Job')
      }
    }
    handlePopulate();
  }


  const jobListDisplay = isLoading ? <h1>Loading jobs...</h1> : <JobCardList jobs={jobs} />

  return (
    <div className='JobList'>
      <SearchForm search={search} />
      {jobListDisplay}
    </div>
  )
}

export default JobList