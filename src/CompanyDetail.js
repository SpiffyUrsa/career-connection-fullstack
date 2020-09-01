import React from "react";
import { useParams } from "react-router-dom"
import JobCardList from "./JobCardList";

function CompanyDetail() {
  const { handle } = useParams();
  return (
    <div>
      <JobCardList />
      <h1>This is the company detail page.</h1>
    </div>
  )
}


export default CompanyDetail;