import React, {useState, useContext, useEffect} from "react";
import JoblyApi from '../api/api.js'
import UserContext from "../user/UserContext";
import "./JobCard.css";
import { addCommas } from '../common/calculations'

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

  const styledSlary = addCommas(salary)

  // console.log('applications', currentUser.applications);

  return (
    <div className='JobCard card'>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>Salary: ${styledSlary}</p>
        <p>Equity: {equity}</p>
        <button
          className="btn btn-warning font-weight-bold text-uppercase float-right"
          onClick={apply}
          disabled={updatedApply}>
          {updatedApply ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  )
}


export default JobCard;