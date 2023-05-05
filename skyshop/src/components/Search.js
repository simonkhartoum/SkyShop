import React, {useState} from 'react'

function Search(handleSearch) {
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setInputValue('');
    
        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();
    
        handleSearch(data.products);
    
        const productName = data.products[0].name;
        console.log(productName);
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
