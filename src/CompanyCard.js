import React from "react";

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
    <div className='CompanyCard'>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={logoUrl} alt={name} />
    </div>
  )
}


export default CompanyCard;