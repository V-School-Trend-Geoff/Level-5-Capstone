import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export const SearchResults = () => {
    let { search } = useLocation();
    if (search) search = `/search/${search}`;

    let navigate = useNavigate();

    const [results, setResults] = useState([]);

    useEffect(() => (async () => {
        try {
            const { data } = await axios.get(`/instrument${search}`);
            setResults(data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    })(), [search]);

    return !results.length ? <h1>Loading...</h1> : <>
        <nav>
            <h1>Search Results</h1>
        </nav>
        <div className="buttons"> 
            <button onClick={() => navigate(`/search-inst`)}>Back to Search Instruments</button>
            <button onClick={() => navigate(`/`)}>Back Main Menu</button>
        </div>


        <table className='table'>

            <thead>
                <tr>
                    <th>Vol</th>
                    <th>Bk</th>
                    <th>Pg</th>
                    <th>Rcrd Dt</th>
                    <th>Type</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {results.map(obj => <tr key={obj._id} >
                    <td>{obj.Volume}</td>
                    <td>{obj.Book}</td>
                    <td>{obj.Page}</td>
                    <td>{obj.RecDt}</td>
                    <td>{obj.InstType}</td>
                    <td><button onClick={() => navigate(`/edit-view-inst/${obj._id}`)} className="edit-view-btn">View / Edit</button></td>
                    <td><button className="delete-btn">X</button></td>
                </tr>)}
            </tbody>

        </table>

    </>

};