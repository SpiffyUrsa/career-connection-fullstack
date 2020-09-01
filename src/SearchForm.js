import React, { useState } from "react";

/**
 * Renders search form
 * 
 * Routes --> SearchForm --> Alert
 * 
 * State
 * 
 * Props
 * 
 */
// CR: make this form as isolated as possible - i.e. pass in
// something applicable to any form

function SearchForm() {
  const [formData, setFormData] = useState({});

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
    // Do something with the parent component function.
  }

  return (
    <form onSubmit={handleSubmit} className='SearchForm'>
      <input 
        name="searchTerm" 
        value = {searchTerm} 
        placeholder="Enter search term.."
        onChange={handleChange} />
      <button>Search</button>
    </form>
  )
}


export default SearchForm;