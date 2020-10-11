import React, { useState } from "react";
import "./SearchForm.css";

/**
 * Renders search form
 * 
 * Routes --> SearchForm --> Alert
 * 
 * State
 * 
 * Props
 * - {search} is called when form submitted and updates companies/jobs
 * 
 */

function SearchForm({ search }) {
  const initialState = { searchTerm: "" };
  const [formData, setFormData] = useState(initialState);

  const { searchTerm } = formData;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm);
  }

  return (
    <div className="SearchForm mb-4 sticky-top">
      <form onSubmit={handleSubmit} className="form-inline">
        <input
          name="searchTerm"
          value={searchTerm}
          placeholder="Enter search term.."
          onChange={handleChange}
          className = "form-control form-control-lg flex-grow-1" />
        <button className="btn btn-lg btn-success">
          Search
        </button>
      </form>
    </div>
  )
}


export default SearchForm;