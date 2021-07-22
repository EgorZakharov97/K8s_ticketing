import {useState} from 'react';
import useRequests from '../../hooks/use-requests';
import Router from 'next/router';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {doRequest, errors} = useRequests({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    })

    const onSubmit = (e) => {
        e.preventDefault();
        
        doRequest();

    }

    return (
        <form>
            <h1>Sign up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {errors}
            <button
                className="btn btn-primary"
                onClick={onSubmit}
            >
                Sign Up
            </button>
        </form>
    )
}