import axios from 'axios';
import { useState } from 'react';

export default ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState(null);
    
    const doRequest = async () => {
        try{
            setErrors(null);
            const res = await axios[method](url, body);

            if(onSuccess) onSuccess(res.data);

            return res.data;
        }
        catch(e){
            setErrors(
            <div className="alter alert-danger">
                <h4>O00ps...</h4>
                <ul className="my-0">
                    {errors.response && errors.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
                </ul>
            </div>
            )
        }
    };

    return {doRequest, errors};
}
