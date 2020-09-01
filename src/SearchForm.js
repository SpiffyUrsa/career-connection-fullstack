import React, { useState } from "react";


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
    <form onSubmit={handleSubmit}>
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