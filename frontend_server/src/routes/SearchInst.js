// TODO Fix bug in search with dropdowns

// TODO Add grantee/grantor functionality
// TODO     Add / Edit
// TODO     Search

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const SearchInst = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [schCriteria, setSchCriteriaObj] = useState({ Volume: "", Book: "", Page: "", RecDt: "", InstType: "" });
    const [volumes, setVolumes] = useState([]);
    const [books, setBooks] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => (async () => {
        let schCriteriaStr = '';
        Object.entries(schCriteria).forEach(([key, value]) => value !== "" && (schCriteriaStr += `&${key}=${value}`));
        schCriteriaStr[0] === "&" && (schCriteriaStr = schCriteriaStr.replace("&", "/search?"));
        try {
            const { data } = await axios.get(`/instrument${schCriteriaStr}`);
            setResults(data);
            setVolumes([...new Set(data.map(item => item.Volume))]);
            setBooks([...new Set(data.map(item => item.Book))]);
            setTypes([...new Set(data.map(item => item.InstType))]);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    })(), [schCriteria]);

    const handleFilterChange = ({ target: { name, value } }) => setSchCriteriaObj({ ...schCriteria, [name]: value });

    const handleDeleteClick = async (id) => {
        try {
            axios.delete(`/instrument/id/${id}`);
            setResults(results.filter((obj) => obj._id !== id));
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    }

    return <>
        <nav>
            <h1>Search Instruments</h1>
        </nav>

        <form className='search-criteria-form'>
            <select name="Volume" onChange={handleFilterChange}>
                <option name="Volume" value="">Select Volume</option>
                {volumes.map(obj => <><option name="Volume" value={obj}>{obj}</option></>)}
            </select>
            <select name="Book" onChange={handleFilterChange}>
                <option name="Book" value="">Select Book</option>
                {books.map(obj => <><option name="Book" value={obj}>{obj}</option></>)}
            </select>
            <label>Page: <input name="Page" value={schCriteria.Page} onChange={handleFilterChange} placeholder="Page" /></label>
            <label>RecDt: <input name="RecDt" value={schCriteria.RecDt} onChange={handleFilterChange} placeholder="RecDt" type="date"/></label>
            <select name="InstType" onChange={handleFilterChange}>
                <option name="InstType" value="">Select InstType</option>
                {types.map(obj => <><option name="InstType" value={obj}>{obj}</option></>)}
            </select>
        </form>

        <div className="buttons">
            <button onClick={() => setSchCriteriaObj({ Volume: "", Book: "", Page: "", RecDt: "", InstType: "" })}>Reset Search Criteria</button>
            <button onClick={() => navigate(`/`)}>Back</button>
        </div>

        {!results.length ? <h1>No Records Found...</h1> : <table className='table'>
            <thead>
                <tr>
                    <th>Vol</th>
                    <th>Bk</th>
                    <th>Pg</th>
                    <th>Rcrd Dt</th>
                    <th>Type</th>
                    <th></th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                {results.map(obj => <tr key={obj._id} >
                    <td>{obj.Volume}</td>
                    <td>{obj.Book}</td>
                    <td>{obj.Page}</td>
                    <td>{obj.RecDt.substring(0, 10)}</td>
                    <td>{obj.InstType}</td>
                    <td><button onClick={() => navigate(`/edit-view-inst/${obj._id}`)} className="edit-view-btn">View / Edit</button></td>
                    <td><button onClick={() => handleDeleteClick(obj._id)} className="delete-btn">X</button></td>
                </tr>)}
            </tbody>
        </table>}

    </>
};