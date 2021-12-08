import { useNavigate } from "react-router-dom";

export const SearchInst = () => {
    let navigate = useNavigate();

    let searchCriteria = '';
    // searchCriteria = '?Book=0129&Volume=LIEN';

    console.log('SearchInst, searchCriteria:', searchCriteria);

    return <>
        <nav>
            <h1>Search Instrument</h1>
        </nav>
        <label>Volume</label> <input /><br /><br />
        <div className="buttons">
            <button onClick={() => navigate(`/search-results${searchCriteria}`)}>Search</button><br /><br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    </>

};