import React, {useContext} from "react";
import JobCard from "./JobCard";
import UserContext from "./UserContext";


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

  //TODO: Need to finish application post
  const user = useContext(UserContext);
  const appliedJobIds = user.jobs ? user.jobs.map(job => job.id) : []

  const jobsDisplay = jobs.length === 0 ?
    <h2> No current job openings </h2> : jobs.map(job =>
      <JobCard
        id={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
        key={job.id}
        applied={appliedJobIds.includes(job.id)}
      />)

  return (
    <div>
      {jobsDisplay}
    </div>
  )

}


export default JobCardList;