import React from "react";

import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/**
 * Renders a list of companies
 * 
 * Routes --> CompanyList --> {CompanyCard, SearchForm}
 * 
 * State
 * 
 * Props
 * 
 */
function CompanyList(props) {

  return (
    <div className='CompanyList'>
      <SearchForm />
      {/*  Here goes the list of CompanyCard Components */}
      <CompanyCard />
      <h1>This is the Company List page.</h1>
    </div>
  )
}


export default CompanyList;