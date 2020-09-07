import React, { useEffect, useState } from "react";

import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api.js";

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
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [formData, setFormData] = useState({});

  useEffect(function populateCompanies() {
    search()
  }, []);

  function search(searchTerm) {
    setIsLoading(true);
    async function handlePopulate() {
      try {
        const companiesResult = await JoblyApi.getCompanies(searchTerm);
        setCompanies(companiesResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error("No companies found.")
      }
    }
    handlePopulate();
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
      <SearchForm search={search} />
      {companiesDisplay}
    </div>
  )
}


export default CompanyList;