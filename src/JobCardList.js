import React from "react";
import JobCard from "./JobCard";

/**
 * Renders details about all applicable jobs
 * 
 * Routes --> {CompanyDetail, JobList}-->JobCardList
 * -->JobCard
 * 
 * State
 * 
 * Props
 * 
 */
function JobCardList(props) {

  return (
    <div>
      <JobCard />
      <h1>This is a list of JobCard components</h1>
    </div>
  )

}


export default JobCardList;