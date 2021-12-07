import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export const SearchResults = (props) => {

    // search for urlSearchParams in https://reactrouter.com/docs/en/v6/getting-started/concepts

    const [instruments, setInstruments] = useState([]);
    let navigate = useNavigate();

    useEffect(() => (async () => {
        try {
            const { data } = await axios.get(`/instrument`);
            setInstruments(data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    })(), []);

    return !instruments.length ? <h1>Loading...</h1> : <>
        <h1>Search Results Stub</h1>
        <button onClick={() => navigate(`/search-inst`)}>Back to Search Instruments</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate(`/`)}>Back Main Menu</button><br /><br />
        <table className='table'>

            <thead>
                <tr>
                    <th>Vol</th>
                    <th>Bk</th>
                    <th>Pg</th>
                    <th>Rcrd Dt</th>
                    <th>Type</th>
                    <th>Edit Btn</th>
                    <th>Del Btn</th>
                </tr>
            </thead>

            <tbody>
                {instruments.map(obj => <tr key={obj._id} >
                    <td>{obj.Volume}</td>
                    <td>{obj.Book}</td>
                    <td>{obj.Page}</td>
                    <td>{obj.RecDt}</td>
                    <td>{obj.InstType}</td>
                    <td><button onClick={() => navigate(`/edit-view-inst/${obj._id}`)}>View / Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>)}
            </tbody>

        </table>

    </>

};