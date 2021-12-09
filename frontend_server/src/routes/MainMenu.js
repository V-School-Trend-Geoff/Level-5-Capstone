import { useNavigate } from "react-router-dom";

export const MainMenu = () => {
    let navigate = useNavigate();

    return <>
        <nav>
            <h1>Main Menu</h1>
        </nav>
        <div className="buttons">
            <button onClick={() => navigate(`/add-new-inst`)}>Add New Instrument</button><br /><br />
            <button onClick={() => navigate(`/search-instruments`)}>Search Instruments</button>
        </div>
    </>

};