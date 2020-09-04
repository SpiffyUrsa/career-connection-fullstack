import React,{useContext} from "react";
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
function JobCard({ id, title, salary, equity }) {

  const user = useContext(UserContext);

  return (
    <div className='JobCard'>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  )
}


export default JobCard;