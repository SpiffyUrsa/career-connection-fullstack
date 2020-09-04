import React, {useContext} from "react";
import JoblyApi from './api.js'
import UserContext from "./UserContext";

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

  //TODO: Need to finish application post
  const user = useContext(UserContext);
  
  async function apply(){
    await JoblyApi.applyToJob(user.username, id)
  }
  
  const applyButton = applied ?
      <button disabled >
        Applied
      </button> :
      <button onClick={apply}>
        Apply
      </button>


  return (
    <div className='JobCard'>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {applyButton}
    </div>
  )
}


export default JobCard;