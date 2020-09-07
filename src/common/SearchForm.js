import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className='SearchForm'>
      <input
        name="searchTerm"
        value={searchTerm}
        placeholder="Enter search term.."
        onChange={handleChange} />
      <button>Search</button>
    </form>
  )
}


export default SearchForm;