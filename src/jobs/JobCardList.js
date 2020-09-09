import React, {useContext} from "react";
import JobCard from "./JobCard";
import UserContext from "../user/UserContext";


/**
 * Renders details about all applicable jobs
 * 
 * Routes --> {CompanyDetail, JobList}-->JobCardList
 * -->JobCard
 * 
 * State
 * 
 * Props
 *  - jobs
 */
function JobCardList({ jobs }) {

  const jobsDisplay = jobs.length === 0 ?
    <h2> No current job openings </h2> : jobs.map(job =>
      <JobCard
        id={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
        key={job.id}
      />)

  return (
    <div>
      {jobsDisplay}
    </div>
  )

}


export default JobCardList;