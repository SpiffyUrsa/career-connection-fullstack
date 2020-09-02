import React, { useEffect, useState } from "react";

import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api.js";

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
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({});

  // TODO: Why do we have to await and async here as well?

  useEffect(function populateCompanies() {
    async function handlePopulate() {
      try {
        const companiesResult = await JoblyApi.getCompanies(formData.searchTerm);
        setCompanies(companiesResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error("No companies found.")
      }
    }
    if (isLoading) handlePopulate();
  }, [formData.searchTerm, isLoading]);


  function handleFilter(formData) {
    setFormData(formData);
    setIsLoading(true);
  }

  const companiesDisplay = isLoading ?
    <h1>Loading companies...</h1> :
    companies.map(company =>
      <CompanyCard
        handle={company.handle}
        name={company.name}
        description={company.description}
        logoUrl={company.logoUrl}
        key={company.handle}
      />);

  return (
    <div className='CompanyList'>
      <SearchForm handleFilter={handleFilter} />
      {companiesDisplay}
    </div>
  )
}


export default CompanyList;