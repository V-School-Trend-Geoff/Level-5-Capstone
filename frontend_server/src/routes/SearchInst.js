import { useNavigate } from "react-router-dom";

export const SearchInst = () => {
    let navigate = useNavigate();

    return <>
        <h1>Search Instrument Stub</h1>
        <label>Volume</label> <input/><br/><br/>
        <button onClick={() => navigate(`/search-results`, {a: 1, b: "asdf"})}>Search</button><br/><br/>
        <button onClick={() => navigate(-1)}>Back</button>
    </>
    
};