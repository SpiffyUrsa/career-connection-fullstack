import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom"
import JobCardList from "../jobs/JobCardList";
import JoblyApi from "../api/api.js";


/**
 * Renders details about a company and all its jobs
 * 
 * Routes --> CompanyDetail --> JobCardList -->JobCard
 * 
 * State
 * 
 * Props
 * 
 */
function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { handle: companyHandle, name, description, numEmployees, logoUrl, jobs } = company;

  useEffect(function getCompanyDataOnMount() {
    async function getCompanyData() {
      try {
        const companyResult = await JoblyApi.getCompany(handle);
        setCompany(companyResult);
        setIsLoading(false);
      } catch (err) {
        console.log("We got into the error catch.", err[0])
        setError(err[0]);
      }
    }
    getCompanyData();
  }, [handle]);

  const companyDetailDisplay = (isLoading ? <h1>Company Details Loading...</h1> :
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <JobCardList jobs={jobs} />
    </div>
  );

  const errorMessage = <h1>{error}</h1>

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      {error ? errorMessage : companyDetailDisplay}
    </div>
  )
}


export default CompanyDetail;