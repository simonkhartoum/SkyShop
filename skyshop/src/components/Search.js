import React, {useState} from 'react'

function Search({handleSearch}) {
    const [inputValue, setInputValue] = useState("")
  return (
    <div>
        <form onSubmit={async(e) => {
            e.preventDefault()
            setInputValue("")

            const response = await fetch(`http://localhost:8000/products`)
            const data = await response.json()

           // handleSearch(data.products)

            const productBrand = data.products[0].brand;
            console.log(productBrand);
         }}>
            <input 
            type="text"
            placeholder='Search...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}></input>
            <button
            type="submit">Search</button>

        </form>
      
    </div>
  )
}

export default Search
