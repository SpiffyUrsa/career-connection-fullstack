import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import JobCardList from './JobCardList'
import JoblyApi from './api.js'


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
function JobList(props) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(function populateJobs() {
    async function handlePopulate() {
      try {
        console.log("This is the searchTerm", formData.searchTerm);
        const jobsResult = await JoblyApi.getJobs(formData.searchTerm);
        setJobs(jobsResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error("No jobs found.")
      }
    }
    if (isLoading) handlePopulate();
  }, [formData.searchTerm, isLoading]);

  function handleFilter(formData) {
    setFormData(formData);
    setIsLoading(true);
  }

  const jobListDisplay = isLoading ? <h1>Loading jobs...</h1> : <JobCardList jobs={jobs} />

  return (
    <div className='JobList'>
      <SearchForm handleFilter={handleFilter} />
      {jobListDisplay}
    </div>
  )
}

export default JobList