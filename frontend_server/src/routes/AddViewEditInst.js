import { useParams, useNavigate } from "react-router-dom";

export const AddViewEditInst = (props) => {
    const params = useParams();
    let navigate = useNavigate();

    const handleSubmitClick = () => {
        // asdfasd
    }

    console.log(params);

    return <>
        <nav>
            <h1>Add / View / Edit / Instrument</h1>
        </nav>
        <label>Volume</label> <input /><br /><br />
        <div className="buttons">
            <button >Submit</button><br /><br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    </>

};