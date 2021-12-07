import { useNavigate } from "react-router-dom";

export const MainMenu = () => {
    let navigate = useNavigate();

    return <>
        <h1>Main Menu Stub</h1>
        <button onClick={() => navigate(`/add-new-inst`)}>Add New Instrument</button><br /><br />
        <button onClick={() => navigate(`/search-inst`)}>Search Instruments</button>
    </>

};