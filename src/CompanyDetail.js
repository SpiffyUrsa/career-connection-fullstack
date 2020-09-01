import React from "react";
import { useParams } from "react-router-dom"
import JobCardList from "./JobCardList";


/**
 * Renders details about a company and all its jobs
 * 
 * Routes --> CompanyDetail --> JobCardList -->JobCard
 * 
 * State
 * 
 * Props
 * 
 */
function CompanyDetail() {
  const { handle } = useParams();
  return (
    <div className='CompanyDetail'>
      <JobCardList />
      <h1>This is the company detail page.</h1>
    </div>
  )
}


export default CompanyDetail;