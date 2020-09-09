import React, {useState, useContext, useEffect} from "react";
import JoblyApi from '../api/api.js'
import UserContext from "../user/UserContext";
import "./JobCard.css";

/**
 * Renders details about one job
 * 
 * JobCardList --> JobCard
 * 
 * State
 * 
 * Props
 * 
 */
function JobCard({ id, title, salary, equity }) {
  const {hasAppliedToJob, applyToJob} = useContext(UserContext);
  const [updatedApply, setUpdatedApply] = useState()

  React.useEffect(function updateAppliedStatus(){
    setUpdatedApply(hasAppliedToJob(id));
  }, [id, hasAppliedToJob])
  
  function apply(){
    applyToJob(id);
    setUpdatedApply(true);
  }

  // console.log('applications', currentUser.applications);

  return (
    <div className='JobCard'>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={apply} disabled={updatedApply}>
        {updatedApply ? "Applied" : "Apply"}
      </button>
    </div>
  )
}


export default JobCard;