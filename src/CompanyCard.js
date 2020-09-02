import React from "react";
import {Link} from 'react-router-dom'

/**
 * Renders individual details about a company
 * 
 * Routes --> CompanyList --> CompanyCard
 * 
 * State
 * 
 * Props
 * 
 */
function CompanyCard({ handle, name, description, logoUrl }) {

  return (
    <Link exact to={`/companies/${handle}`}>
      <div className='CompanyCard'>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={logoUrl} alt={name} />
      </div>
    </Link>
  )
}


export default CompanyCard;