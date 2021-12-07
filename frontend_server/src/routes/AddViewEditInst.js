import { useParams, useNavigate } from "react-router-dom";

export const AddViewEditInst = (props) => {
    const params = useParams();
    let navigate = useNavigate();

    console.log(params);

    return <>
        <h1>Add / View / Edit / Instrument Stub</h1>
        <label>Volume</label> <input /><br /><br />
        <button>Submit</button><br /><br />
        <button onClick={() => navigate(-1)}>Back</button>
    </>

};