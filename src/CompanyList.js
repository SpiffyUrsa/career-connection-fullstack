import React from "react";

import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";


function CompanyList(props) {



  return (
    <div>
      <SearchForm />
      {/*  Here goes the list of CompanyCard Components */}
      <CompanyCard />
      <h1>This is the Company List page.</h1>
    </div>
  )
}


export default CompanyList;