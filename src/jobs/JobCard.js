import React, {useState, useContext, useEffect} from "react";
import JoblyApi from '../api/api.js'
import UserContext from "../user/UserContext";

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
function JobCard({ id, title, salary, equity, applied }) {
  const { applyToJob} = useContext(UserContext);
  const [updatedApply, setUpdatedApply] = useState(applied)
  
  function apply(){
    applyToJob(id);
    setUpdatedApply(true);
  }

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