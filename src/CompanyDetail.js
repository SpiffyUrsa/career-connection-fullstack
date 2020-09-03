import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom"
import JobCardList from "./JobCardList";
import JoblyApi from "./api.js";


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
  console.log('handle', handle)

  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { handle: companyHandle, name, description, numEmployees, logoUrl, jobs } = company;

  useEffect(function getCompanyDataOnMount() {
    async function getCompanyData() {
      try {
        const companyResult = await JoblyApi.getCompany(handle);
        setCompany(companyResult);
        setIsLoading(false);
      } catch (err) {
        return <Redirect to='/'/>
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


  return (
    <div className='CompanyDetail'>
      {companyDetailDisplay}
    </div>
  )
}


export default CompanyDetail;