import React from "react";
import { Link } from 'react-router-dom'
import "./CompanyCard.css";


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

  const logoDisplay = logoUrl ? <img src={logoUrl} alt={name} className="float-right ml-5"/> : null;

  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className='card-body'>
        <h6 className='card-title'>{name}</h6>
        {logoDisplay}
        <p><small>{description}</small></p>
      </div>
    </Link>
  )
}


export default CompanyCard;