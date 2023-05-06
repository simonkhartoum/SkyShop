import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

const Search = () => {
    const {name} = useParams();
    const [searchedData, setSearchedData] = useState([]);
    

    const fetchData =() => {
        fetch('http://localhost:8000/products?name=${searchedData}')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setSearchedData(data.results);
        })
    };
    useEffect(()  => {
        fetchData();
    },[name]);
    return (
        <div>
            {/* <h3> {`"${name}"`}</h3> */}
            <div>{ searchedData && searchedData.map((data) => (
                <FeaturedProducts
                key={data.id}
                products={data}/>
            ))}</div>
        </div>
    )
}

export default Search
