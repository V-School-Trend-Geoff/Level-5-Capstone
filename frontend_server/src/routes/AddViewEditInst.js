// TODO Fix date picker so you can actually see the date value

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


export const AddViewEditInst = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ Volume: "", Book: "", Page: "", RecDt: "", InstType: "" });
    // const [inputs, setInputs] = useState({ Volume: "DEED", Book: "9999", Page: "9999", RecDt: "01/01/2019", InstType: "DEED" });
    const { Volume, Book, Page, RecDt, InstType } = inputs;
    const handleChange = ({ target: { name, value } }) => setInputs({ ...inputs, [name]: value });
    
    const handleSubmitClick = () => {
        params.instId && axios.put(`/instrument/id/${params.instId}`, inputs);
        params.instId || axios.post(`/instrument`, inputs);
    }
    
    useEffect(() => params.instId && (async () => {
            try {
                const { data } = await axios.get(`/instrument/id/${params.instId}`);
                setInputs(data);
            }
            catch (err) {
                console.log(err);
                alert(err);
            }
        })(), [params.instId]);

    return <>
        <nav>
            <h1>Add / View / Edit / Instrument</h1>
        </nav>
        <form className='edit-view-form'>
            <label className='edit-field'>Volume: <input name="Volume" value={Volume} onChange={handleChange} placeholder="Volume" className="input-field" /></label>
            <label className='edit-field'>Book: <input name="Book" value={Book} onChange={handleChange} placeholder="Book" className="input-field" /></label>
            <label className='edit-field'>Page: <input name="Page" value={Page} onChange={handleChange} placeholder="Page" className="input-field" /></label>
            <label className='edit-field'>RecDt: <input name="RecDt" value={RecDt} onChange={handleChange} placeholder="RecDt" className="input-field" type="date"/></label>
            <label className='edit-field'>InstType: <input name="InstType" value={InstType} onChange={handleChange} placeholder="InstType" className="input-field" /></label>
        </form>
        <div className="buttons">
            <button onClick={handleSubmitClick}>Submit</button><br /><br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    </>

};