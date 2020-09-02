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
  const [isSearching, setIsSearching] = useState(false);
  const [formData, setFormData] = useState({});


  // TODO: Why do we have to await and async here as well?
  // TODO: Can we combine these two useEffects (and the associated methods?)
  useEffect(function populateCompaniesOnMount() {
    async function populateCompanies() {
      try {
        const companiesResult = await JoblyApi.getAllCompanies();
        setCompanies(companiesResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error("No companies found.")
      }
    }
    populateCompanies();
  }, []);

  useEffect(function populateFilteredCompanies() {
    async function filterCompanies() {
      try {
        const companiesResult = await JoblyApi.filterCompanies(formData.searchTerm);
        setCompanies(companiesResult);
        setIsLoading(false);
        setIsSearching(false);
      } catch (err) {
        throw new Error("No companies found.")
      }
    }
    if(isSearching) filterCompanies();
  }, [formData.searchTerm, isSearching]);

  function handleFilterCompanies(formData){
    setFormData(formData);
    setIsSearching(true);
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
      <SearchForm handleFilterCompanies={handleFilterCompanies}/>
      {companiesDisplay}
    </div>
  )
}


export default CompanyList;